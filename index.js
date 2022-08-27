const express = require("express");
require("./utils/db");
const blogsRoutes = require("./routes/blogs.routes");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(blogsRoutes);
app.listen(PORT, () => {
    console.log("Server is listening at port no", PORT);
})