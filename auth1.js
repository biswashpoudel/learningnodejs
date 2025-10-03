
const express = require('express')

const app = express()

app.use(express.json())

let userArr = [];

const generateToken = () =>{
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let token = '';
    for(i=0;i<32;i++){
        tokenIndex =  Math.floor(Math.random() * characters.length)
        token = token + characters[tokenIndex]
    }
    return token
}

app.post('/signup', function(req,res){
    const username = req.body.username
    const password = req.body.password
    
    userArr.push({username,password})
    
    res.json(" Sign Up sucessful")
})

app.post('/signin', function(req,res){
    
    const username = req.body.username
    const password = req.body.password
    
    let newUser = null;
    
    for(i=0; i<userArr.length; i++){
        if(userArr[i].username === username &&
        userArr[i].password === password){
            newUser = userArr[i]
        }
    }
    if(newUser){
        token = generateToken();
        newUser.token = token
        
        res.json({
            token: token 
        })
    }
    else{
        res.json("Incorrect email or password")
    }
})

app.listen(5000)