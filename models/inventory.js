/**
 * Author: Vaarini Vijayadhwaja
 */
 
 const mongoose = require('mongoose')
 const validator = require('validator')
 
 const Inventory = mongoose.model('Inventory', {
     name: {
         type: String,
         required: true,
         trim: true
     },
     description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
    }
 })
 
 module.exports = Inventory