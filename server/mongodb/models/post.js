import mongoose from "mongoose";

//Post Schema with attributes and data type
const Post = new mongoose.Schema({
    name: {type: String, required: true},
    prompt: {type: String, required: true},
    photo: {type: String, required: true},
});


//making model of a PostSchema
const PostSchema = mongoose.model('Post', Post);

export default PostSchema;