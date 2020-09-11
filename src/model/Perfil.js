import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator'

const perfil = mongoose.Schema({
    PerfilName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    DeviceProfileID: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    }
})

perfil.plugin(uniqueValidator, { message: 'El {PATH} ya existe.' })

module.exports = mongoose.model('perfil',perfil,'perfiles');