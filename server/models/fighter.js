const mongoose = require('mongoose');
const thisSchema = mongoose.Schema({
        name:{
            type: String, require: true
        },

        victory:{
            type: String, require: true
        },

        defeat:{
            type: Number, require: true
        },
        knockaut:{
            type: Number, require: true
        },

        weight:{
            type: Number, require: true
        },

        country:{
            type: String, require: true
        },

        team:{
            type: String, require: true
        },

        battle_history:{
            type: String, require: true
        },
        gender:{
            type: String, require: true
        },
        category: {
            type: String, require: true
        },

        ball: {
            type: Number, require: true
        }
}, {
    timestamps:true
})

    module.exports = mongoose.model("fighter", thisSchema)