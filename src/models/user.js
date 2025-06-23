const mongoose = require('mongoose');
require('dotenv').config();

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
            message: props => `${props.value} no es un correo institucional válido! Solo los correos.edu son aceptados.`
        },
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    phoneNumber: {
        type: String,
        required: true,
        validate: {
          validator: function (v) {
            return /^\+?[0-9]{7,15}$/.test(v);
          },
          message: props => `${props.value} Ingresa un número de celular válido!`,
        },
    },
     profileImage: {
        type: String,
        trim: true,
        default: '../../public/images/default-profile.png', 
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    role:{
        type: String,
        enum: process.env.USER_ROLES.split(','),
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