/**
 * Author: Vaarini Vijayadhwaja
 */

 const express = require('express')
 const User = require('../models/user')
 const router = new express.Router()
 
 router.post('/users', async (req, res) => {
     const UserLogin = new User(req.body)
 
     try {
         await UserLogin.save()
         res.status(201).send(UserLogin)
     } catch (e) {
         res.status(400).send(e)
     }
 })
 
 router.get('/users', async (req, res) => {
     try {
         const users = await User.find({})
         res.send(users)
     } catch (e) {
         res.status(500).send()
     }
 })
 
 router.get('/users/:id', async (req, res) => {
     const _id = req.params.id
 
     try {
         const user = await User.findById(_id)
 
         if (!user) {
             return res.status(404).send()
         }
 
         res.send(user)
     } catch (e) {
         res.status(500).send()
     }
 })
 
 router.delete('/users/:id', async (req, res) => {
     try {
         const user = await User.findByIdAndDelete(req.params.id)
 
         if (!user) {
             return res.status(404).send()
         }
 
         res.send(user)
     } catch (e) {
         res.status(500).send()
     }
 })
 
 module.exports = router