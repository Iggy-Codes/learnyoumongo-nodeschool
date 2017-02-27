const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

var url = 'mongodb://localhost:27017/' + process.argv[2]

MongoClient.connect(url, (err, db) => {
  if (err) throw err

  var collection = db.collection('users')
  collection.update({'username': 'tinatime'}, {$set: {'age': 40}})
  db.close()
})
