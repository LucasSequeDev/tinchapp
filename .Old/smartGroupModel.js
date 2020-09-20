import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator'

const smartGroup = mongoose.Schema({
    Group: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    ManagedBy: {
        type: String,
        required: true,
        trim: true
    },
})

smartGroup.plugin(uniqueValidator, { message: 'El {PATH} ya existe.' })

module.exports = mongoose.model('smartGroup',smartGroup);