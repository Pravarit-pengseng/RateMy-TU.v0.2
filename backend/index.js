const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const AuthRouter = require("./Routes/AuthRouter")

require("dotenv").config()
require("./Models/db")

const PORT = process.env.PORT || 8080


// test for res
app.get("/ding", (req, res) => {
    res.send("dong")
})

app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

app.use("/auth", AuthRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})