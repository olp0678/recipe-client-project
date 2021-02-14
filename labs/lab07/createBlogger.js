mongo --host web2-mongodb:27017 blogger

db.articles.insert({
...     authorName: "Oscar Pachon",
...     email: "oscar.pachon@du.edu",
...     creationDate: ISODate("2021-02-14"),
...     text: "Mongodb manual"
... })
WriteResult({ "nInserted" : 1 })

show databases
//admin    0.000GB
//blogger  0.000GB
//book     0.000GB
//config   0.000GB
//local    0.000GB

db.articles.insert({
...     authorName: "Roger Federer",
...     email: "roger.federer@du.edu",
...     creationDate: ISODate("2021-02-10"),
...     text: "Tennis manual"
... })
WriteResult({ "nInserted" : 1 })

//At this point database Blogger and collection articles have been created.

db.articles.find().pretty()
{
        "_id" : ObjectId("60296d2908db9a7a529f606c"),
        "authorName" : "Oscar Pachon",
        "email" : "oscar.pachon@du.edu",
        "creationDate" : ISODate("2021-02-14T00:00:00Z"),
        "text" : "Mongodb manual"
}
{
        "_id" : ObjectId("60296da308db9a7a529f606d"),
        "authorName" : "Roger Federer",
        "email" : "roger.federer@du.edu",
        "creationDate" : ISODate("2021-02-10T00:00:00Z"),
        "text" : "Tennis manual"
}
