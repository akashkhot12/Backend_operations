const express = require('express');
const connections = require('./connections')
const app = express();

app.get('/',async(req,res)=>{
    let result = await connections();
    let data = await result.find().toArray();
    res.status(200).json({message:data});
    console.log(data);
})

app.post('/',async(req,res)=>{
    let result = await connections();
    let data = await result.insertOne({
        firstName:"Joy",
        lastName:"Das"
    })
    console.log(data.acknowledged);
    res.status(201).json({message:data.acknowledged})
})

app.listen(3000,()=>{
    console.log("server is started");
})