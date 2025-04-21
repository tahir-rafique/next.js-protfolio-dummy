import mongoose from 'mongoose'

const { Schema } = mongoose

const userSechma = new Schema({
    name: {
        type: string,
        unique: true,
        required: true,
    },

    email: {
        type: string,
        unique: true,
        required: true,
    },

    email: {
        type: string,
        required: true,
    },
}, { timestamps: true })


export default mongoose.model("User", userSechma)