const express = require("express")
const app = express()
app.get('/',function(req,res){
    res.send("Hello world, from app")
})
app.get('/sum',function(req,res){

    //parseInt is for parsing to number from string 
    //req.query.a is for request of query a in browser
    const a = parseInt(req.query.a)  //introducing query param
    const b = parseInt(req.query.b)
    const data = (a + b)
    res.send("The sum of " + a + " and " + b + " is " + data)
})
app.listen(3000)