const assert = require('assert');

const updateMovies = function (db, callback) {
    
    const collection = db.collection("myMovies");
    collection.updateMany({ movie: 'The Banker' }, { $set: { movie: 'Lepa Shandy', year: '2002', rating: 7.5 } }, function (err, docs) {
        assert.equal(err, null);
        console.log("Data has been updated!!!")
    });
    collection.findOne({}, function(err, result) {
        assert.equal(err);
        console.log("update:");
        console.log(result);
    });
};

module.exports = updateMovies;