/**
 * Author: Vaarini Vijayadhwaja
 */
 
 const mongoose = require('mongoose')
 const validator = require('validator')
 
 const seller = mongoose.model('sellerLogin', {
     firstName: {
         type: String,
         required: true,
         trim: true
     },
     lastName: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        required: true,
        trim: true
    },
     email: {
         type: String,
         required: true,
         trim: true,
         lowercase: true,
         validate(value) {
             if (!validator.isEmail(value)) {
                 throw new Error('Email is invalid')
             }
         }
     },
     password: {
         type: String,
         required: true,
         minlength: 7,
         trim: true,
         validate(value) {
             if (value.toLowerCase().includes('password')) {
                 throw new Error('Password cannot contain "password"')
             }
         }
     },
     phoneNumber: {
         type: Number,
         required: true,
         trim: true,
        
         minlength: 10,
     },
     seller: {
        type: Boolean,
        validate(value){
            if(value === false)
            throw new Error ('User must be seller')
        },
        required:true,
       }
 })
 
 module.exports = seller