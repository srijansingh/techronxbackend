const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema(
    {
        name : {
            type : String,
           
        },
        email : {
            type: String,
            
        },
        phonenum : {
            type: String
        },
        occpation : {
            type : String
        }
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model('Customer', customerSchema);