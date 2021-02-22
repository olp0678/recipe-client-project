interface Person {
    firstName: string;
    lastName: string;
}

class Bob {
    firstName: string;
    lastName: string

    constructor() {
        this.firstName = "Bob";
        this.lastName = "Smith";
    }
}


function greeter(person: Person) {
  //return "Hello, " + person.firstName + " " + person.lastName;
  return `Hello, ${person.firstName} ${person.lastName}`;
}

//let user = "Jane User";

// created an object by hand
let user = {
    firstName: 'Jane',
    lastName: 'User'
};

document.body.textContent = greeter(user);
document.body.textContent = greeter(new Bob());
//console.log(greeter(user);
//console.log(greeter(new Bob() ));
