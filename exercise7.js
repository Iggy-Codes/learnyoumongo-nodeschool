const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

var url = 'mongodb://localhost:27017/' + process.argv[2]

MongoClient.connect(url, (err, db) => {
  if (err) throw err

  var collection = db.collection(process.argv[3])
  collection.remove({'_id': process.argv[4]})
  db.close()
})
