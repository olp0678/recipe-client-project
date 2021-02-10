import express from 'express';
import * as controller from './users.controller';

// Declare an Express.js Router instance
let router = express.Router();

// GET methods
router.get('/', controller.index);
//router.get('/:id', controller.show);

// POST method
router.post('/', controller.create);

// PUT method
//router.put('/:id', controller.upsert);

// DELETE method
//router.delete('/:id', controller.destroy);

// Export the Express.js Router for other files to use (such as /server/routes.js)
export {router};
