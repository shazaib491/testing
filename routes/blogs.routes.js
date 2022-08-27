const express = require("express");

const blogsController = require("./../controllers/blogs.controller");
const router = express.Router();

router.get("/getData", blogsController.getData)

router.post("/saveData", blogsController.saveData)

router.get("/editData/:id", blogsController.editData)

router.patch("/updateData/:id", blogsController.updateData)

router.delete("/deleteData/:id", blogsController.deleteData)

router.get("/saveer", () => {
    console.log("I am from protectr")
})

router.all("/protetctir", (req, res, next) => {
    res.json({ message: "Hello i am protector'" })
})

router.post("import", () => {
    console.log("I am import");
})

router.patch("getter",()=>{
    console.log("Hello I a getter");
})

router.post("addPost/:id",(req,res,next)=>{
    console.log("Add Post Saved")
})

module.exports = router;