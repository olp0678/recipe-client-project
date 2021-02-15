//require mongoose library
var mongoose = require('mongoose');

//connect to our database, in this case called 'test'
mongoose.connect('mongodb://web2-mongodb/test');

//get a handle
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected');

    //mongoose give us a new schema , defition name : string data type
    var kittySchema = mongoose.Schema({
    name: String
    });

    kittySchema.methods.speak = function () {
    var greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
    console.log(greeting);
}

    //this model allows to create documents in the database, using kittyschema
    //name of the mode, kitten. collection will be called kitten.
    var Kitten = mongoose.model('Kitten', kittySchema);

    var silence = new Kitten({ name: 'Silence' });
    console.log(silence.name); // 'Silence'

    var fluffy = new Kitten({ name: 'fluffy' });
    fluffy.speak(); // "Meow name is fluffy"

    fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();

    Kitten.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    });
  });
});
