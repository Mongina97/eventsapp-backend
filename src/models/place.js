const mongoose = require('mongoose')

const Place = mongoose.model("Place", {
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    address: { 
        city: {type: String,
            required: true,
            trim: true,
         },
       country: {
        type: String,
        required: true,
        trim: true,
       }
    }
});

module.exports = Place;