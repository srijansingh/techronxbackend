const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
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
            type: String,
            require : true
        },
        position : {
            type : String,
            require : true
        },
        linkedin : {
            type : String,
            require : true
        },
        imagelink : {
            type : String,
            require : true
        }
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model('Team', schema);