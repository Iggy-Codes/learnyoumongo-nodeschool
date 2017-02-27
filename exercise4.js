const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

var url = 'mongodb://localhost:27017/learnyoumongo'

MongoClient.connect(url, (err, db) => {
  if (err) throw err
  // console.log(`Succesfully connected to DB=${db.s.databaseName}`)
  db.collection('parrots')
    .find({'age': {$gt: parseInt(process.argv[2])}}, {name: 1, age: 1, _id: 0})
    .toArray(function (err, documents) {
      console.log(documents)
    })
  db.close()
})
