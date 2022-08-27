const express = require("express");

const blogsController = require("./../controllers/blogs.controller");
const router = express.Router();

router.get("/getData", blogsController.getData)

router.post("/saveData", blogsController.saveData)

router.get("/editData/:id", blogsController.editData)

router.patch("/updateData/:id", blogsController.updateData)

router.delete("/deleteData/:id", blogsController.deleteData)

router.all("/protetctir", (req, res, next) => {
    res.json({ message: "Hello i am protector'" })
})

module.exports = router;