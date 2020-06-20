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
        position:{
            type:String,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        logo : {
            type : String,
            required: true
        },
        description : {
            type: String,
            required: true
        }
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model('Testimonial', customerSchema);