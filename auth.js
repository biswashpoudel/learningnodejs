const express = require('express')
const app = express();

app.use(express.json()); //parse the body object to json

let users = [] //written globally to make available on signup/signin


function generateToken(){
    let token = ''
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for(i=0;i<32;i++){
        let index = Math.floor((Math.random() * char.length))
        token = token + char[index]
    }
    return token;
}

app.post('/signup',function(req,res){
    const username = req.body.username
    const password = req.body.password

    users.push({
        username: username,
        password: password
    })

    res.json('Sucessfully signed up')
})

app.post('/signin',function(req,res){

    const username = req.body.username
    const password = req.body.password 

    let foundUser = null;
    for(i=0;i<users.length; i++){
       
        if(users[i].username == username &&
            users[i].password == password
        ){
            foundUser = users[i];
        }

        if(foundUser){
            token1 = generateToken();
            foundUser.token = token1;

            res.json({
                token: token1
            })
        }

        else{
            res.json('Invalid Username or Password')
        }

    }
})

app.listen(3001,()=>{
    console.log("app listenig on port 3000")
})