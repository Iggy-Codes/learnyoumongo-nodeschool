const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

var url = 'mongodb://localhost:27017/learnyoumongo'

MongoClient.connect(url, (err, db) => {
  if (err) throw err
  // console.log(`Succesfully connected to DB=${db.s.databaseName}`)
  var collection = db.collection('docs')

  var firstName = process.argv[2]
  var lastName = process.argv[3]
  var data = {firstName: firstName, lastName: lastName}

  collection.insert(data, function (err, documents) {
    console.log(JSON.stringify(data))
  })
  db.close()
})
