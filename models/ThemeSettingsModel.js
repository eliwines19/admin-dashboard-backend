const mongoose = require('mongoose')

const ThemeSettingsSchema = new mongoose.Schema({
    darkMode: {
        type: Boolean,
        default: false
    },
    themeColor: {
        type: String,
        required: true,
        trim: true,
        maxLength: 255,
        default: '#02C9D6'
    }
})

module.exports = mongoose.model('ThemeSettings', ThemeSettingsSchema)