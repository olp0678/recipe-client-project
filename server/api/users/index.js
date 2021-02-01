import express from 'express';
import * as users from './users';

let router = express.Router();

//Get methods
router.get('/', users.listContents);//referencing , pointer.
router.get('/:id', users.findOne);

//Post methods
router.post('/', users.createUser);

//PUT methods
router.put('/:id', users.updateUser);

//delete methods
router.delete('/:id', users.removeUser)

export {router}; //export router.js for other file to use.
