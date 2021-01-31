import express from 'express';
import * as users from './users';

let router = express.Router();

router.get('/', users.listContents);//referencing , pointer.
router.get('/:id', users.findOne);
router.post('/', users.createUser);


export {router}; //export router.js for other file to use. 
