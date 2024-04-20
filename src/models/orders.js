// models/orders.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    receiverName: {
        type: String, // Assuming the receiver's name is a string
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    }
    
});

// Create the model for the Orders collection
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
