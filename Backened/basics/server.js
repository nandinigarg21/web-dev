//create server
const express = require('express');
const app  = express();

const bodyParser = require("body-parser")

app.use(bodyParser.json())

//listen server at port no 3000
app.listen(3000, () => {
    console.log("server started at port no 3000")
})



app.get('/', (req,res) => {
    res.send(`<h1>hello</h1>`);
})

app.post("/api/car",(req,res)=>{
    const {name, brand} = req.body;
    console.log(name,brand);
    
    res.send('data gathered')
})