const mongoose = require("mongoose");

// connectivity
mongoose.connect("mongodb://127.0.0.1:27017/bloggingSystem", (error, success) => {
    if (error) {
        throw error;
    }
    console.log("Connected to db");
})
