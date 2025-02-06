// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['passenger', 'admin'],
        default: 'passenger'
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
});

export const User = mongoose.model('User', UserSchema);


