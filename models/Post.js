const mongoose = require('mongoose');

//creating the schema

const PostSchema = mongoose.Schema({
    // title : String,
    // description: String,
    // date: Date.now

    //adding required and default values
    title : {
        type: String,
        require: true
    },
    description : {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Posts', PostSchema);

//the first parameter is its name on mongoose atlas, and the later is the schema used for it 