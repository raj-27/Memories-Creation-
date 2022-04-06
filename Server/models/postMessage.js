import mongosse  from "mongoose";
const postSchema = mongosse.Schema({ 
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0, 
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
})

const PostMessage = mongosse.model('PostMessage',postSchema)
export default PostMessage;