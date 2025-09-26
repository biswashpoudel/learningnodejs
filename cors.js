const express = require ('express');
const cors = require('cors');
const app = express();
app.use(express.json()) //parsing the json in post req
app.use(cors());
app.post('/sum', function(req,res){
    const a = req.body.a
    const b = req.body.b
    const sum = a + b
    res.json({sum})
})
app.listen(3000)