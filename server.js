const express = require("express") 
require('dotenv').config()
const cors = require("cors")
const app = express()
const PORT = process.env.PORT
app.use(cors())
app.get("/", (req, res) => {
  res.send("./porto.jpeg")
})
app.get("/download", (req,res) => {
  res.download("./porto.jpeg")
})

app.listen(PORT,()=>console.log(`running at ${PORT}`))