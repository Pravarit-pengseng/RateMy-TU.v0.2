const router = require("express").Router()
const { signup, login } = require("../Controllers/AuthController")
const { signupValidation, loginValidation } = require("../Middlewares/AuthValidation")

// Test Login

// router.post("/login", (req, res) => {
//     console.log("/auth/login Post rout hit")
//     res.send("Login Success")
// })

router.post("/login", loginValidation, login)
router.post("/signup", signupValidation, signup)

module.exports = router