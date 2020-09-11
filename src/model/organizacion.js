import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator'

const organizacion = mongoose.Schema({
    OGName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    CustomerCode: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    LocationGroupID: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    }
})

organizacion.plugin(uniqueValidator, { message: 'El {PATH} ya existe.' })

module.exports = mongoose.model('organizacion',organizacion,'organizaciones');