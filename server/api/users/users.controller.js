'use strict';

import uuidv4 from 'uuid/v4';

import User from './users.model';

// The export keyword makes the function importable in other files
// (such as /server/api/users/index.js)
export function index(req, res) {
    // res.json will return the variable as its JSON string representation
    // https://expressjs.com/en/api.html#res.json
    res.json({
        users: User.find()
    });
}
//
//// I decided to delegate searching the array for a given ID to a helper function.
//// This will let it be reused later (like in an update function)
//function findUser(id) {
//    let foundUsers = users.filter(function(user) {
//        if(user.id === id) {
//            return true;
//        }
//        return false;
//    });
//
//    if(foundUsers.length > 0) {
//        return foundUsers[0];
//    } else {
//        // In JavaScript you could return null or undefined for "no such element"
//        // Here's some discussion about which return value might be better:
//        // https://stackoverflow.com/questions/37980559/is-it-better-to-return-undefined-or-null-from-a-javascript-function
//        return null;
//    }
//}
//
//export function show(req, res) {
//    // the :id in '/:id' declared by /server/api/users/index.js can be accessed in the request object
//    // under the params object, i.e. req.params.id
//    let existingUser = findUser(req.params.id);
//
//    if(existingUser) {
//        // Make sure to only call res.status and res.json *once* per request.
//        // If you try to set the status code twice, express.js will give you an error!
//        // A detailed explanation for this can be found here:
//        // https://stackoverflow.com/questions/7042340/error-cant-set-headers-after-they-are-sent-to-the-client
//        res.status(200);
//        res.json(existingUser);
//    } else {
//        // If you don't find the user make sure to return a 404 status code
//        // with a descriptive response
//        res.status(404);
//        res.json({message: 'Not Found'});
//    }
//}
//
export function create(req, res) {
   // Generate a random ID
   let id = uuidv4();

   // The JSON you POST when calling /api/users
   // is parsed automatically into req.body and can be accessed directly
   let name = req.body.name;
   // Validate parameter exists and is a string
   if(!name || typeof name !== 'string') {
       res.status(400);
       return res.json({
           error: 'name(String) is required'
       });
   }

   let address = req.body.address;
   // Validate parameter exists and is a string
   if(!address || typeof address !== 'string') {
       res.status(400);
       return res.json({
           error: 'address(String) is required'
       });
   }

   let age = req.body.age;
   // Validate parameter exists and is a number
   if(!age || typeof age !== 'number') {
       res.status(400);
       return res.json({
           error: 'age(Number) is required'
       });
   }
   // Create a new user object with the generated ID and the fields provided by the user
   let user = {
       id,
       name,
       address,
       age
   };

   // Add the new user object to the array
   user = create(user);

   // Set a status code of 201 (created) and return the new user object back to the caller
   // You need to return the new user so that they can see the generated ID
   res.status(201);
   res.json(user);
}
//
//export function upsert(req, res) {
//    // Create a user object to insert or update
//    // Use URL param for ID, Body for name/address/age
//    let user = {
//        id: req.params.id,
//        name: req.body.name,
//        address: req.body.address,
//        age: req.body.age
//    };
//
//    // Does this user already exist?
//    let existingUser = findUser(req.params.id);
//
//    if(!existingUser) {
//        // If user does not exist, add new user and return CREATED
//        users.push(user);
//        res.status(201);
//        res.json(user);
//    } else {
//        // Otherwise, update existing user object
//        existingUser.name = user.name;
//        existingUser.address = user.address;
//        existingUser.age = user.age;
//        res.json(existingUser);
//    }
//}
//
//export function destroy(req, res) {
//    // Find user in array
//    let userIndex = users.map(function(user) {
//        return user.id;
//    })
//        .indexOf(req.params.id);
//
//    if(userIndex !== -1) {
//        // If user exists in array, remove and return NO CONTENT
//        users.splice(userIndex, 1);
//        res.status(204)
//            .send();
//    } else {
//        // If user does not exist, return NOT FOUND
//        res.status(404);
//        res.json({message: 'Not Found'});
//    }
//}
