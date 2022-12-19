const {Schema, model} = require('mongoose')

const crudSchema = new Schema({
    id: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    authors: {
        type: String,
        default: ""
    },
    favorite: {
        type: String,
        default: ""
    },
    fileCover: {
        type: String,
        default: ""
    },
    fileName: {
        type: String,
        default: ""
    }
})

module.exports = model('Crud', crudSchema)