const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Crud-DB', (err)=> {
    if(!err)
        console.log('Mongo db connected...');
    else{
        console.log("Error in db connection" + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;