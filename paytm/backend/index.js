const express = require("express");
const cors = require("cors");
const mainRouter = require("./router/index")

const app = express();

app.use(express.json());
app.use(cors);

app.use("api/vi", mainRouter)

app.listen(3000, ()=>{
    console.log("server is live at port 3000");
    
})