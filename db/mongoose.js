/**
 * Author: Vaarini Vijayadhwaja
 */

//  const mongoose = require('mongoose')

//  mongoose.connect('mongodb://127.0.0.1:27017/inventryManagementSystem', {
//      useNewUrlParser: true,
//      useCreateIndex: true,
//      useFindAndModify: false,
//      useUnifiedTopology: true 
//  })
 var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/inventryManagementSystem';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
