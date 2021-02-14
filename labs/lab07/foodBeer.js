//Find all towns whose name contains an e and are famous for food or beer

db.towns.find({
name:{$regex: /e/,$options: 'i'},
$or : [{ famousFor : "food" }, { famousFor : "beer" } ]}
,{_id:0,name:1})

//{ "name" : "New York" }
