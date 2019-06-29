const mongoose = require('mongoose')

const Cat = mongoose.model('Cat', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    }
})

module.exports = Cat                               