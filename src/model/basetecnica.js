import mongoose from 'mongoose';

const BaseTecnica = mongoose.Schema({
    SmartGroupID: {
        type: Number,
        required: true
    },
    BaseName: {
        type: String,
        required: true,
        trim: true
    },
    Region: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('BaseTecnica',BaseTecnica);