const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
    participant: [{
        id: {
            type: Number,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        course: {
            type: String,
            required: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            trim: true
        },
        event: {
            type: String,
            required: true,
            trim: true
        },
        competition: {
            type: String,
            required: true,
            trim: true
        }
    }]
})


