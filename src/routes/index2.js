const express = require('express')
const router = express.Router()
// const fileMulter = require('../middleware/file')
const Crud = require('../models/crud');


router.get('/', async (req, res) => {
    try {
        const crud = await Crud.find().select('-__v')
        res.json(crud)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.post('/', async (req, res) => {
    const {title, description, authors, favourite, fileCover, fileName} = req.body
    const newCrud = new Crud({
        title,
        description,
        authors,
        favourite,
        fileCover,
        fileName,
    })

    try {
        await newCrud.save()
        res.json(newCrud)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const crud = await Crud.findById(id).select('-__v')
        res.json(crud)
    } catch (e) {
        res.status(500).json(e)
    }
})


router.delete('/:id', async (req, res) => {
    const {id} = req.params

    try {
        await Crud.deleteOne({_id: id})
        res.json(true)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.put('/:id', async (req, res) => {
    const {id} = req.params
    const {title, description, authors, favourite, fileCover, fileName} = req.body

    try {
        await Crud.findByIdAndUpdate(id, {title, description, authors, favourite, fileCover, fileName})
        res.redirect(`/api/books/${id}`)


    } catch (e) {
        res.status(500).json(e)
    }
})

module.exports = router