const assert = require('assert');

// function that inserts movies
const insertMovies = function (db, callback) {
    // Get the movie collection
    const collection = db.collection("myMovies");
    // insert movies
    const movie = [
        { movie: "The Banker", year: "2020", rating: 8 },
        { movie: "Bad Boys", year: "2020", rating: 7 },
        { movie: "The Hunt", year: "2020", rating: 7 },
        { movie: "Bloodshot", year: "2020", rating: 7.5 },
        { movie: "First Cow", year: "2020", rating: 6.5 },
    ];
    collection.insertMany(movie, function (err, result) {
        assert.equal(err, null);
        console.log(`${movie.length} movies have been inserted`);
        callback(result);
        console.log(result);
    });
};

module.exports = insertMovies;
// Get the movies

// var MongoClient = require("mongodb").MongoClient;

// const url = "mongodb://localhost:27017/";
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   const dbo = db.db("oyinsplash_db");
//   dbo.createCollection("myMovies", function (err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//   });
//   const movieObj = [
//     { movie: "The Banker", year: "2020", rating: 8 },
//     { movie: "Bad Boys", year: "2020", rating: 7 },
//     { movie: "The Hunt", year: "2020", rating: 7 },
//     { movie: "Bloodshot", year: "2020", rating: 7.5 },
//     { movie: "First Cow", year: "2020", rating: 6.5 },
//     ];
//     dbo.collection("myMovies").insertMany(movieObj, function (err, res) {
//         if (err) throw err;
//         console.log(`"Number of documents inserted: ${res.insertedCount}`);
//     })
//   db.close();
// });
