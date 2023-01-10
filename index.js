/**
 * Author: Vaarini Vijayadhwaja
 */
 
 const express = require('express')
 require('./db/mongoose')
 const userRouter = require('./routers/user')
 const sellerRouter = require('./routers/seller')
 const inventory = require('./routers/inventory')
 
 const app = express()
 const port = process.env.PORT || 3000
 
 app.use(express.json())
 app.use(userRouter)
 app.use(sellerRouter)
 app.use(inventory)
 
 let server = app.listen(port, () => {
     console.log('Server is up on port ' + port)
 })
 
 module.exports = server