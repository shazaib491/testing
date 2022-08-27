const express = require("express");
//calling top level function
require("./utils/db");
const blogsRoutes = require("./routes/blogs.routes");
const app = express();


// initialise port no
const PORT = 3000;
// middle ware function

app.use(express.json());//converting response to string

app.use(blogsRoutes);

// to create server in nodejs
app.listen(PORT, () => {
    console.log("Server is listening at port no", PORT);
})