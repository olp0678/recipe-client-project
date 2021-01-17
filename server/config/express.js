/**
 * Express configuration
 */

import express from 'express';
import expressStaticGzip from 'express-static-gzip';
import favicon from 'serve-favicon';
import morgan from 'morgan';
import compression from 'compression';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import errorHandler from 'errorhandler';
import path from 'path';
import lusca from 'lusca';
import config from './environment';
import passport from 'passport';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import mongoose from 'mongoose';

export default function(app) {
    var env = process.env.NODE_ENV;

    if(env === 'development' || env === 'test') {
        app.use(express.static(path.join(config.root, '.tmp')));
        app.use(require('cors')());
    }

    if(env === 'production') {
        app.use(favicon(path.join(config.root, 'client', 'favicon.ico')));
    }

    app.set('appPath', path.join(config.root, 'client'));
    app.use(express.static(app.get('appPath')));
    if(env === 'production') {
        app.use('/', expressStaticGzip(app.get('appPath')));
    }
    app.use(morgan('dev'));

    app.set('views', `${config.root}/server/views`);
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(compression());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser());
    app.use(passport.initialize());

    if(config.mongo.enabled) {
        var MongoStore = connectMongo(session);
            // Persist sessions with MongoStore / sequelizeStore
            // We need to enable sessions for passport-twitter because it's an
            // oauth 1.0 strategy, and Lusca depends on sessions
            app.use(session({
            secret: config.secrets.session,
            saveUninitialized: true,
            resave: false,
            store: new MongoStore({
              mongooseConnection: mongoose.connection,
              db: 'web2-session'
            })
        }));
    } else {
        app.use(session({
            secret: config.secrets.session,
            saveUninitialized: true,
            resave: false
        }));
    }

    /**
     * Lusca - express server security
     * https://github.com/krakenjs/lusca
     */
    if(env !== 'test' && env !== 'development') {
        // Don't allow API access outside of deployed domain in production
        app.use(lusca({
            csrf: {
                cookie: {
                    name: 'XSRF-TOKEN'
                }
            },
            xframe: 'SAMEORIGIN',
            hsts: {
                maxAge: 31536000, //1 year, in seconds
                includeSubDomains: true,
                preload: true
            },
            xssProtection: true
        }));

        // Force https in production
        app.enable('trust proxy');
        app.use(function(req, res, next) {
            if(req.secure) {
                // request was via https, so do no special handling
                return next();
            } else {
                // request was via http, so redirect to https
                res.redirect('https://' + req.headers.host + req.url);
            }
        });
    }

    if(env === 'development' || env === 'test') {
        app.use(errorHandler()); // Error handler - has to be last
    }
}
