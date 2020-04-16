const MongoClient = require('mongodb').MongoClient;
const insertMovies = require('./interns.js');
const assert = require('assert'); 
const findMovie = require('./findInterns')
const updateMovies = require('./updateInterns');

// Connection URL
const url = "mongodb://localhost:27017/oyinsplashdb";

// Database Name
const dbName = "oyinsplash";

// create a new MongoClient
const client = new MongoClient(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// connent to server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connnected succesfully to server");

    const db = client.db(dbName);
    insertMovies(db, function () {
        findMovie(db, function () {
            updateMovies(db, function () {
                client.close();
            })
        });
    });

    })


