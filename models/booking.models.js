// models/Booking.js
const mongoose = require('mongoose')
const bookingSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true },
    flight: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flight',
        required: true
    },
    seatNumber: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['booked', 'cancelled'],
        default: 'booked'
    },
    bookingReference: {
        type: String,
        unique: true
    },
    createdAt: {
        type: Date, 
        default: Date.now 
    }
});

export const Booking = mongoose.model('Booking', bookingSchema);