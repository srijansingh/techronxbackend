const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        heading : {
            type : String,
            required:true
        },
        content : {
            type: String,
            require : true
        },
        thumbnail: {
            type: String,
            required:true
        },
        keywords : {
            type : String
        },
        creator : {
            type : Object
        }
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model('Blog', schema);