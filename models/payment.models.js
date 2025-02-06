// models/Payment.js
const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking', 
        required: true 
    },
    amount: {
        type: Number,
        required: true 
    },
    paymentMethod: {
        type: String,
        enum: ['credit_card', 'debit_card', 'paypal'],
        required: true 
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending' 
    },
    transactionId: {
        type: String,
        unique: true 
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
});

export const Payment = mongoose.model('Payment', paymentSchema);