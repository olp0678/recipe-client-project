var Bob = /** @class */ (function () {
    function Bob() {
        this.firstName = "Bob";
        this.lastName = "Smith";
    }
    return Bob;
}());
function greeter(person) {
    //return "Hello, " + person.firstName + " " + person.lastName;
    return "Hello, " + person.firstName + " " + person.lastName;
}
//let user = "Jane User";
// created an object by hand
var user = {
    firstName: 'Jane',
    lastName: 'User'
};
document.body.textContent = greeter(user);
document.body.textContent = greeter(new Bob());
//console.log(greeter(user);
//console.log(greeter(new Bob() ));
