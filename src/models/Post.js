import mongoose from 'mongoose'

const { Schema } = mongoose

const postSechma = new Schema({
    title: {
        type: string,
        required: true,
    },

    desc: {
        type: string,
        required: true,
    },

    img: {
        type: string,
        required: true,
    },

    content: {
        type: string,
        required: true,
    },
    
    username: {
        type: string,
        required: true,
    },


}, { timestamps: true })


export default mongoose.model("Post", postSechma)