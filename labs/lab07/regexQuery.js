//Find a town by name in a case-insenstive regular expression
//containing the word new

db.towns.find({name:{$regex: /new/, $options: 'i'}},{_id:0, name:1})

//{ "name" : "New York" }
