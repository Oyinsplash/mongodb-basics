const assert = require("assert");

const findMovies = function (db, callback) {
  // Get movie collection
  const collection = db.collection("myMovies");
  // findMovies
    collection.findOne({}, function (err, docs) {
        assert.equal(err, null);
        console.log("First document in the movie collection is:")
        console.log(docs)
    });
  
  collection.find({ rating: 7 }).toArray(function (err, docs) {
    assert.equal(err, null);
    console.log("Movies with a rating of 7 includes:");
    console.log(docs);
  });
    collection.find({}, { projection: { _id: 0, movie: 1 } }).toArray(function (err, docs) {
    assert.equal(err, null);
    console.log("Movie titles include:");
    console.log(docs);
  });
};

module.exports = findMovies;

//
