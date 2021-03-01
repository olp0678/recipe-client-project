'use strict';

import {Recipe, Review, User} from './Project01.model_1';

// Find details for one recipe
export function showRecipe(req, res) {
  Recipe.findById(req.params.id)
    .populate('Review')
    .exec()
    .then(function(existingRecipe) {
      /*
       findById will return null if the object was not found
       This if check will evaluate to false for a null recipe
      */
      if(existingRecipe) {
        // recipe was found by Id
        res.status(200);
        res.json(existingRecipe);
      } else {
        // recipe was not found
        res.status(404);
        res.json({message: 'Not Found'});
      }
    })
    .catch(function(err) {
      res.status(400);
      res.send(err);
    });
}

export function showReview(req, res) {
  User.findById(req.params.id)
    .populate('User')
    .exec()
    .then(function(existingReview) {
      /*
       findById will return null if the object was not found
       This if check will evaluate to false for a null review
      */
      if(existingReview) {
        // review was found by Id
        res.status(200);
        res.json(existingReview);
      } else {
        // review was not found
        res.status(404);
        res.json({message: 'Not Found'});
      }
    })
    .catch(function(err) {
      res.status(400);
      res.send(err);
    });
}

export function showUser(req, res) {
  User.findById(req.params.id)
    .exec()
    .then(function(existingUser) {
      /*
       findById will return null if the object was not found
       This if check will evaluate to false for a null user
      */
      if(existingUser) {
        // User was found by Id
        res.status(200);
        res.json(existingUser);
      } else {
        // User was not found
        res.status(404);
        res.json({message: 'Not Found'});
      }
    })
    .catch(function(err) {
      res.status(400);
      res.send(err);
    });
}

// Create a new recipe
export function createRecipe(req, res) {
  /*
    In this function we are taking the request body
    As it was sent and using it as the JSON for the recipe object.
  */
  let recipe = req.body.recipe;
  Recipe.create(recipe)

    // recipe saved successfully! return 201 with the created recipe  object
    .then(function(createdRecipe) {
      res.status(201);
      res.json(createdRecipe);
    })
    // An error was encountered during the save of the recipe
    .catch(function(err) {
      res.status(400);
      res.send(err);
    });
}

export function createReview(req, res) {

  /*
  in this function we are taking the request body
  As it was sent and using it as the JSON for the review object. In addition,
  we also include the user's ID in the request body as the user is associated
  with the review.

  */
  let review = req.body.review;
  review.date = Date.now;
  let recipeid = req.body.recipeid;
  let userid = req.body.userid;
  let user = findById(userid);
  review.user = user.userName;
  Review.create(review)
    /*
     Review was successfully saved, now associate saved review to the
     recipe that it reviews, and then updatre that recipe.
    */
    .then(function(createdReview) {
        recipe = findById(recipeid);
        recipe.reviews.push(createdReview.ObjectId);
        return Recipe.updateRecipe(recipe);
    })
    // Review saved successfully! return 201 with the created review object
    .then(function(createdReview) {
      res.status(201);
      res.json(createdReview);
    })
    // An error was encountered during the save of the review.
    .catch(function(err) {
      res.status(400);
      res.send(err);
    });
}

export function createUser(req, res) {
  /*
  in this function we are taking the request body
  As it was sent and using it as the JSON for the user object.
  */

  let user = req.body;
  User.create(user)
    // User and Address saved successfully! return 201 with the created user object
    .then(function(createdUser) {
      res.status(201);
      res.json(createdUser);
    })
    // An error was encountered during either the save of the user.
    .catch(function(err) {
      res.status(400);
      res.send(err);
    });
}
// Update a user
export function updateRecipe(req, res) {
  // Start by trying to find the Recipe by its id
  Recipe.findById(req.params.id)
    .populate('Review')
    .exec()
    // Update recipe
    .then(function(existingRecipe) {
      // If recipes exists, update all fields of the object
      if(existingRecipe) {
        existingRecipe.name = req.body.recipe.name;
        existingRecipe.description = req.body.recipe.description;
        existingRecipe.pictureUrl = req.body.recipe.pictureUrl;
        existingRecipe.prepTime = req.body.recipe.prepTime;
        existingRecipe.cookingTime = req.body.recipe.cookingTime;
        existingRecipe.directions = req.body.recipe.directions;
        existingRecipe.ingredients = req.body.recipe.ingredients;
        existingRecipe.reviews = req.body.recipe.reviews;

        // if updated successfully, return status code 200.
        res.status(200);
      } else {
        // recipe  was not found
        return existingRecipe;
      }
    })

    // Error encountered during the save of the recipe.
    .catch(function(err) {
      res.status(400);
      res.send(err);
    });
}

export function updateReview(req, res) {
  // Start by trying to find the review by its id
  Review.findById(req.params.id)
    .populate('Review')
    .exec()
    // Update review
    .then(function(existingReview) {
      // If user review exists, update all fields of the object
      if(existingReview) {
        existingReview.description = req.body.review.description;
        existingReview.rating = req.body.review.rating;
        existingReview.date = req.body.review.date;
        existingReview.user = req.body.review.user;

        // if updated successfully, return status code 200
        res.status(200);
      } else {

        // review was not found
        return existingReview;
      }
    })

    // Error encountered during the save of the review.
    .catch(function(err) {
      res.status(400);
      res.send(err);
    });
}
export function updateUser(req, res) {
  // Start by trying to find the user by its id
  User.findById(req.params.id)
    .populate('User')
    .exec()
    // Update user.
    .then(function(existingUser) {
      // If user exists, update all fields of the object
      if(existingUser) {
        existingUser.fullName = req.body.fullName;
        existingUser.userName = req.body.userName;
        existingUser.email = req.body.email;

        // if updated successfully, return status code 200
        res.status(200);
        res.json(existingUser)
      } else {
        // User was not found
        res.status(400);
      }
    })

    // Error encountered during the save of the user.
    .catch(function(err) {
      res.status(400);
      res.send(err);
    });
}

// Remove a recipe
export function destroyRecipe(req, res) {
  Recipe.findById(req.params.id)
    .populate('Review')
    .exec()
    .then(function(existingRecipe) {
      if(existingRecipe) {
        /*
          if recipe is found, remove it from its collection.
         */
          existingRecipe.remove()

      } else {
        return existingRecipe;
      }
    })
    // Delete was successful
    .then(function(deletedRecipe) {
      if(deletedRecipe) {
        res.status(204).send();
      } else {
        // recipe was not found
        res.status(404);
        res.json({message: 'Recipe Not Found'});
      }
    })
    // if recipe delete failed
    .catch(function(err) {
      res.status(400);
      res.send(err);
    });
}

export function destroyReview(req, res) {
  Review.findById(req.params.id)
    .populate('User')
    .exec()
    .then(function(existingReview) {
      if(existingReview) {
        /*
          if review is found, remove it from its collection.
         */
          existingReview.remove()
          //search for the review ID in the recipes and remove it.
          for ( const recipe in Recipe) {
              if (existingReview.ObjectId in recipe.reviews){
                  recipe.reviews.remove(existingReview.ObjectId);
              }
          };
      } else {
        return existingReview;
      }
    })
    // Delete was successful
    .then(function(deletedReview) {
      if(existingReview) {
        res.status(204).send();
      } else {
        // Review was not found
        res.status(404);
        res.json({message: 'Review Not Found'});
      }
    })
    // Review delete failed
    .catch(function(err) {
      res.status(400);
      res.send(err);
    });
}

export function destroyUser(req, res) {
  User.findById(req.params.id)
    .exec()
    .then(function(existingUser) {
      if(existingUser) {
        /*
          if user is found, remove it from its collection.
         */
          existingUser.remove()
      } else {
        return existingUser;
      }
    })
    // Delete was successful
    //.then(function(deletedUser) {
     // if(deletedUser) {
    //    res.status(204).send();
     // } else {
        // User was not found
        //res.status(404);
    //    res.json({message: 'Not Found'});
      //}
    //})
    // user delete failed
    .catch(function(err) {
      res.status(400);
      res.send(err);
    });
}
