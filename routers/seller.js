/**
 * Author: Vaarini Vijayadhwaja
 */

 const express = require('express')
 const Seller = require('../models/seller')
 const router = new express.Router()
 
 router.post('/seller', async (req, res) => {
     const sellerLogin = new Seller(req.body)
 
     try {
         await sellerLogin.save()
         res.status(201).send(sellerLogin)
     } catch (e) {
         res.status(400).send(e)
     }
 })
 
 router.get('/seller', async (req, res) => {
     try {
         const seller = await Seller.find({})
         res.send(seller)
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
 
 router.delete('/seller/:id', async (req, res) => {
     try {
         const seller = await Seller.findByIdAndDelete(req.params.id)
 
         if (!seller) {
             return res.status(404).send("seller not found")
         }
 
         res.send(seller)
     } catch (e) {
         res.status(500).send()
     }
 })
 
 module.exports = router