const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    secondName: {
        type: String,
        required: false,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    secondLastName: {
        type: String,
        required: false,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.edu$/.test(v);
            },
            message: props => `${props.value} is not a valid institutional email! Only .edu emails are accepted.`
        },
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    role:{
        type: String,
        enum: ['admin', 'user', 'seller'],
        required: true,
        default: 'user',
    },
    favorites: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        }
    ]},
    {
    timestamps: true,
    }
    );

    module.exports = mongoose.model('User', userSchema);