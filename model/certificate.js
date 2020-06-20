const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        certificateid : {
            type:String
        },
        name : {
            type : String,
            required:true
        },
        email : {
            type: String,
            require : true
        },
        imageurl : {
            type: String
        }
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model('Certificate', schema);