const express = require('express')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'Biswash'

const app = express();
app.use(express.json()); 

let users=[]; //creating a in memory variable 

app.get('/', function(req,res){
    res.sendFile(__dirname + '/frontend.html')
})
app.post('/signup', function(req,res){
    const username = req.body.username
    const password = req.body.password

    users.push({username,password})

    res.json({
        message:"You have sucessfully signed up!"
    })
})

app.post('/signin', function(req,res){
    const username = req.body.username
    const password = req.body.password

    let foundUser = null 
    for(i=0;i<users.length;i++){
        if(users[i].username === username && 
            users[i].password === password
        ){
            foundUser = users[i]
        }

        if(!foundUser){
            res.json({
                message: "Invalid username or password"
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

app.get('/me', function(req,res){
    const token = req.headers.token
    const decodedObject = jwt.verify(token,JWT_SECRET)

    if(decodedObject.username){
        let foundUser = null
        for(i=0;i<users.length;i++){
            if(users[i].username === decodedObject.username){
                foundUser = users[i]
                res.json({
                    username: foundUser.username,
                    password: foundUser.password
                })
            }else{
                res.json({
                    message:"Unauthorized endpoint!"
                })
            }
        }
    }
})

app.listen(3000)