const express = require('express')

const app = express()

// declaring and initialising this variable outside 
// so that it doesnot sets to zero again when the 
//function is called 

let countRes = 0;

const countResponse = (req,res,next)=>{
    countRes= countRes+ 1;
    console.log("Count Response: " + countRes)
    next();
}
const getSum = (req,res) => {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json(a+b)
}
app.get('/sum',countResponse,getSum);

app.listen(3009);