const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
    location: {
        type: String, require: true
    },

    date:{
        type: String, require: true
    },
    
    fighters: {
        type: String, require: true
    }

}, {
    timestamps:true
})

    module.exports = mongoose.model("events", eventSchema)