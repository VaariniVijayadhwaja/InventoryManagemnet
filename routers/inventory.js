/**
 * Author: Vaarini Vijayadhwaja
 */

 const express = require('express')
 const Inventory = require('../models/inventory')
 const router = new express.Router()
 
 router.post('/inventory', async (req, res) => {
     const inventory = new Inventory(req.body)
 
     try {
         await inventory.save()
         res.status(201).send(inventory)
     } catch (e) {
         res.status(400).send(e)
     }
 })
 
 router.get('/inventory', async (req, res) => {
     try {
         const inventory = await Inventory.find({})
         res.send(inventory)
     } catch (e) {
         res.status(500).send()
     }
 })
 
 router.get('/inventory/:id', async (req, res) => {
     const _id = req.params.id
 
     try {
         const inventory = await Inventory.findById(_id)
 
         if (!inventory) {
             return res.status(404).send()
         }
 
         res.send(inventory)
     } catch (e) {
         res.status(500).send()
     }
 })
 
 router.patch('/inventory/:id', async (req, res) => {
     const updates = Object.keys(req.body)
     const allowedUpdates = ['name', 'description', 'image','cost']
     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
 
     if (!isValidOperation) {
         return res.status(400).send({ error: 'Invalid updates!' })
     }
 
     try {
         const inventory = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
 
         if (!inventory) {
             return res.status(404).send()
         }
 
         res.send(inventory)
     } catch (e) {
         res.status(400).send(e)
     }
 })
 
 router.delete('/inventory/:id', async (req, res) => {
     try {
         const inventory = await Inventory.findByIdAndDelete(req.params.id)
 
         if (!inventory) {
             return res.status(404).send("Post not found")
         }
 
         res.send(inventory)
     } catch (e) {
         res.status(500).send()
     }
 })
 
 module.exports = router