const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        serviceid: {
            type : String,
            required:true
        },
        heading: {
            type: String,
            require : true
        },
        description: {
            type: String,
            required : true
        },
        imagelink : {
            type : String,
            required : true
        }
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model('Service', schema);