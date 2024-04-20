const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ProjectReg", {
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
    // userCreateIndex:true
}).then(() => {
    console.log(`connection successful with database`);
}).catch((e) => {
    console.log(`Error connecting to MongoDB: ${e.message}`);
})

