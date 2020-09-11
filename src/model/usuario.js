import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator'

const usuario = mongoose.Schema({
    UserName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    BaseTecnica: {
        type: String,
        trim: true
    },
})

usuario.plugin(uniqueValidator, { message: 'El {PATH} ya existe.' })

module.exports = mongoose.model('usuario',usuario);