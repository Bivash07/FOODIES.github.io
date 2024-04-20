const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    confirmpassword : {
        type: String,
        required: true
    },
    phone : {
        type:Number,
        required:true,
        unique: true
    }
})

// now we need to create a collection

const Register = new mongoose.model("Register", ProjectSchema);

module.exports = Register;
