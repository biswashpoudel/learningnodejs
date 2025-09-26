
//importing express library
const express = require('express')
const cors = require('cors')

//initalising app variable
const app = express()

app.use(express.json()) //parse the Json
app.use(cors())
//creating a post request 
app.post('/sum', function(req,res){
    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)
    const sum = a + b
    res.json({sum})
})

app.listen(3001)
