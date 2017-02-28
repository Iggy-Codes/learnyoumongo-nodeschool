const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const url = 'mongodb://localhost:27017/learnyoumongo'
let size = process.argv[2]

MongoClient.connect(url, (err, db) => {
  if (err) throw err
  var prices = db.collection('prices')

  prices.aggregate([
    { $match: { size: process.argv[2] }},
    { $group: {
      _id: 'average',
      average: {
        $avg: '$price'
      }
    }}
  ]).toArray(function (err, results) {
    // handle error
    console.log(Number(results[0].average).toFixed(2))
    db.close()
  })
})
