const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
       serviceid : {
            type : String
       },
       heading : {
            type : String,
            required:true
        },
       content : {
            type: String,
            require : true
        },
        imageurl : {
            type: String
        },
        services : [
            {
                type : Schema.Types.ObjectId,
                ref : 'Service'
            }
        ]
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model('Serviceintro', schema);