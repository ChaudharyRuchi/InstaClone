const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    name: {
        type: String,
        minlength: 3,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: function () {
            return Math.ceil(Math.random() * 100)
        }
    },
    image: {
        url : String
      
    },
    date: 
        {
            type: Date, 
            default: new Date()
        }
   
  
})

const PostData = mongoose.model("Post", PostSchema);
module.exports = PostData;