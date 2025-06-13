const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be a positive number'],
        validate: {
            validator: function(v) {
                return v >= 0;
            },
            message: props => `${props.value} is not a valid price!`
        }   
    },
    entrepreneur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
        trim: true,
    },
    stockQuantity: {
        type: Number,
        required: true,
        min: 0,
    },
    imageUrl: {
        type: String,
        required: false,
        trim: true,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);