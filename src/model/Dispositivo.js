/*
"DeviceID": 213,
"HardwareIdentifier": "354445061392121",
"FriendlyName": "mifernandez iOS 12.3.1 G5MH 354445061392121",
"Platform": "MG4X2LL",
"DisplayModel": "iPhone 6 (64 GB Silver)",
"SerialNumber": "C7JNLJJ0G5MH",
"CustomerCode": "GSMCAR",
"LocationGroupID": "1580",
"LastSeen": "2020-06-05 18:55:26.243",
"FirstSeen": "2014-12-11 17:06:25.477",
"UserName": "mifernandez",
"EnrollmentUserID": "196"
*/

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator'

const dispositivo = mongoose.Schema({
    HardwareIdentifier: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    Linea: {
        type: Number,
        trim: true,
        unique: true
    },
    UsuarioID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario"
    },
    ModeloID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "modelo"
    },
    EstadoID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "estado"
    }
})

dispositivo.plugin(uniqueValidator, { message: 'El {PATH} ya existe.' })

module.exports = mongoose.model('Dispositivo',dispositivo);