const express = require('express');

const app = express();

const middlewareFunction = (req,res,next)=>{
    console.log(req.method) //use req
    console.log(req.hostname)
    console.log(req.url)
    console.log(new Date())
    next();
}

app.use(middlewareFunction);

app.get('/sum', function getSum(req,res){
    const a = parseInt(req.query.a) 
    //query-> for client side input to server on url 
    //req.params.a -> for client side input to server on url 
    //using localhost:5050/sum/10/2.... Output-> 12
    const b = parseInt(req.query.b)
    const add = a + b

    res.json({add})
})

app.get('/diff', function getDiff(req,res){
    const a = req.query.a
    const b = req.query.b
    const sub = a - b

    res.json({sub})
})

//app listening at port 5050
app.listen(5050, function(){
    console.log("Server listening at port 5050")
});

