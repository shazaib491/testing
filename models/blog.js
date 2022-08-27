const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema({
    title: String,
    body: String
})

const blogs=mongoose.model("blog",blogSchema);

module.exports=blogs;
