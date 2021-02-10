import uuidv4 from 'uuid/v4';

class User {
    users = [];

    find() {
        // Returns a list of all users
        return this.users;
    }

    findById(userId) {
        // Find user by Id
        // Returns user, or null if not present
    }
    // User(){
    //     this.name;
    //     this.address;
    //     this.age;
    //     this.id = uuidv4();
    // }

    create(user) {
        // // Create a new user
         //user.id = uuidv4();
        // Return created user
         users.push(user);
         return user;
        // Generate the id and overwrite any id that may be present in user
    }

    findOneAndUpdate(user) {
        // Find user and update
        //let id = user.id;
        for (x in this.users){
            if (x.id == user.id){
                x.name = user.name;
                x.address = user.address;
                x.age = user.age;
                return true;
            }
        }

        create(user);
        return false;

        //        return false;
        // If user does not exist, create it using Id provided
        // Return true if user was updated, false if user was created
    }

    remove(user) {
        for (x in this.users){
            if (x.id == user.id){
                this.users.splice(this.users.indexOf(x),1);
                return true;
            }
        // Remove user if exists with the Id provided
        // Return true if removed
        // Return false if did user not exist
    }
    return false;
  }
}

export default new User();
