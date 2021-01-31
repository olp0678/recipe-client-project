import uuidv4 from 'uuid/v4';

let users = [];

export function listContents(req, res) {
    res.status(200);
    res.json({
        users
    });
}

//findUser will search array for a given ID,uses filter to check
//if id matches then return user found or null otherwise.
//and returns false otherwise.
function userFind(id){
    let foundUsersID = users.filter(function(user_id){
        if (user_id.id === id){
            return true;
        }
        return false;
    });
    if (foundUsersID.length > 0){
        return foundUsersID[0];
    } else {
        return null;
    }
}

export function findOne(req, res){
    let currentUser = userFind(req.params.id);
    if(currentUser){
        res.status(200);
        res.json(currentUser);
    } else {
        res.status(404);
        res.json(
            {message: 'Not Found'});
    }
}

export function createUser(req, res) {
    let id = uuidv4();
    let name = req.body.name;
    //validate name exists and is type String
    if(typeof name !== 'string' || !name) {
      res.status(400);
      return res.json({
        error: 'name is required'
      });
    }
    let address = req.body.address;
    if(!address || typeof address !== 'string') {
      res.status(400);
      return res.json({
        error: 'address is required'
      });
    }
    let age = req.body.age;
    if(typeof age !== 'number' || !age) {
      res.status(400);
      return res.json({
        error: 'age is required'
      });
    }
    let newUser = {
        id,
        name,
        address,
        age
    };
    users.push(newUser); // add new user to array
    res.status(201); //return status code 201, meaning user created
    res.json(newUser); // return user created with generated ID.
}
