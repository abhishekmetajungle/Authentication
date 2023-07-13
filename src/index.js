
console.log("NODEMON activated")
require("dotenv").config();

const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()

// app.use(express.json())
app.use(express.json())

const emp = [
    {
        username: 'Abhishek',
        title: 'Emp1'
    }
]

app.get('/emp' ,authenticateToken, (req, res) => {
    res.json(emp.filter(post => post.username == req.user.name))

})

app.post('/login', (req, res ) => {
    const username = req.body.username
    const user = { name: username }
    // console.log("hi")

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken: accessToken})

})

function authenticateToken(req, res, next){
    const authHeader = req.authHeader['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        res.user = user
        next()
    })
}

app.listen(3000)
// const app = require("./app");
// const { PORT } = process.env;

// const startApp = () => {
//     app.listen(PORT, () => {
//         console.log(`Auth Backend running on port ${PORT}`);
//     });
// };

// startApp();