// importing express lib from npm

const express = require('express')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'biswash'
const app = express()
app.use(express.json())
let usersArr = []

app.post('/signup', function(req,res){
    const username = req.body.username
    const password = req.body.password

    usersArr.push({
        username: username,
        password:password
    }
    )
    res.json({
        message:"Sign up sucessful"
    })
})

app.post('/signin', function(req,res){
    const username = req.body.username
    const password = req.body.password

    let foundUser = null
    for(i=0; i<usersArr.length;i++){
        if(usersArr[i].username === username &&
            usersArr[i].password === password
        ){
           foundUser = usersArr[i] 
        }
        if(!foundUser){
            res.json({ 
                message:"Invalid username or password"
            })
        }
        else{
            const token = jwt.sign({username}, JWT_SECRET)

           res.json({
            token: token
           })
        }
    }
})

app.listen(4000, ()=>{
    console.log("app listening on port 4000")
})