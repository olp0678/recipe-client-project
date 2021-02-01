import uuidv4 from 'uuid/v4';  /// to gieve us our random ids

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
    let ifFoundUsers = users.filter(function(user){
        if (user.id === id){
            return true;
        }
        return false;
    });
    if (ifFoundUsers.length > 0){
        return ifFoundUsers[0];
    } else {
        return null;
    }
}

export function findOne(req, res){
    let existingUser = userFind(req.params.id);
    if(existingUser){
        res.status(200);
        res.json(existingUser);
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

export function updateUser(req, res){
    let user = {
        id: req.param.id,
        name: req.body.name,
        address: req.body.address,
        age: req.body.age
    };

    let existingUser = userFind(req.params.id);

    //if user is not found
    if(!existingUser){
        //existingUser.id = user.id;
        users.push(user); //add user to USERS array
        res.status(201); // status for POST created
        res.json(user); //return newly created object
    } else {
        //if user is found, update object
        existingUser.name = user.name;
        existingUser.address = user.address;
        existingUser.age = user.age;
        res.status(200); //status OK
        res.json(existingUser); //return update object
    } //close else
}//close updateUser

export function removeUser(req, res){
    //use map function on array of users to return index if it exist, or -1 otherwise
    let id = req.params.id;
    let userArrayIndex = users.map(function(user){
        return user.id;
    }).indexOf(id);

    if(userArrayIndex !== -1){ // if found remove it
        users.splice(userArrayIndex, 1); // remove only element at index (UserArrayIndex)
        res.status(204).send();// no content status 204 would be send.
    } else { //if not found, return 404 and 'NOT FOUND'
        res.status(404);
        res.json({message: 'NOT FOUND'});
    }
}
