const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema(
    {
        name : {
            type : String,
            required:true
        },
        email : {
            type: String,
            require : true
        },
        phonenum : {
            type: String
        },
        password : {
            type : String,
            required : true
        },
        role : {
            type : String,
            default : 'member'
        },
        thumbnail : {
            type : String
        },
        blog : [
            {
                type: Schema.Types.ObjectId,
                ref : 'Blog'
            }
        ]
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model('User', customerSchema);