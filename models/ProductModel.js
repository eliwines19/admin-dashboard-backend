const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    img: {
        data: Buffer,
        contentType: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 80
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 20
    }
}, { timestamps: true })

module.exports = mongoose.model('Product', ProductSchema)