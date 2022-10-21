const express = require("express") 
const cors = require("cors")
const app = express()

app.use(cors())
app.get("/", (req, res) => {
  res.send("./porto.jpeg")
})
app.get("/download", (req,res) => {
  res.download("./porto.jpeg")
})

app.listen(5000,()=>console.log("server has running on port 5000"))