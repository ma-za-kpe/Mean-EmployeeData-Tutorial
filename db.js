const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Employee1", (err) => {
    if (!err) {
        console.log("mongodb connection success...");
    } else {
        console.log("Error in mongodb connection ..." + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;