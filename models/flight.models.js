// models/Flight.js
const mongoose = require('mongoose')
const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        required: true
    },
    flightNumber: {
        type: String,
        required: true,
        unique: true
    },
    departureAirport: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Airport',
        required: true
    },
    arrivalAirport: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Airport',
        required: true
    },
    departureTime: {
        type: Date,
        required: true
    },
    arrivalTime: {
        type: Date,
        required: true
    },
    seatsAvailable: {
        type: Number,
        required: true 
    },
    price: {
        type: Number,
        required: true }
});

export const Flight = mongoose.model('Flight', flightSchema);