const express = require('express')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'Biswash123456'

const app = express()

app.use(express.json()); 

let users = []; 
app.post('/signup', function(req,res){

    const username = req.body.username
    const password = req.body.password

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "Sign up sucessful"
    })
})

app.post('/signin', function(req,res){

    const username = req.body.username
    const password = req.body.password 

    let foundUser = null;

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
            const token = jwt.sign({
                username
            }, JWT_SECRET)

            res.json({
                token: token 
            })
        }
    }

})

app.get('/me', function(req,res){

    const token = req.headers.token
    const decodedData = jwt.verify(token, JWT_SECRET)
    console.log(decodedData)  //logging

    if(decodedData.username){
        let foundUser = null
        for(i=0;i<users.length;i++){
            if(users[i].username === decodedData.username){
                    foundUser = users[i]
                    console.log(foundUser)
                    res.json({
                        username: foundUser.username,
                        password: foundUser.password
                    })
            }
            else{
                res.json({
                    message: "Invalid username or password"
                })
            }
        }
    }

})

app.listen(3000); 