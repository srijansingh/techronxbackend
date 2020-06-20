const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema(
    {
        projectid:{
            type: String,
            required:true
        },
        title : {
            type : String,
            required:true
        },
        category : {
            type:String
        },
        description : {
            type: String,
            require : true
        },
        company: {
            type: String,
            required: true
        },
        thumbnail : {
            type : String,
            required: true
        },
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model('Portfolio', customerSchema);