import {Schema, model} from "mongoose";

const CasaSchema = new Schema({
    thumbnail: String,
    description: String,
    price: Number,
    location: String,
    status: Boolean,
    user:{ 
        type: Schema.Types.ObjectId,
        ref: 'User'
    }    


},{
    toJSON:{
        virtuals: true
    }
});

CasaSchema.virtual('thumbnail_url').get(function () {
    return `http://localhost:3333/files/${this.thumbnail}`
})

export default model('Casa', CasaSchema)