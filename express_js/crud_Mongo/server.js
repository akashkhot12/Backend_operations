const express = require('express');
const {MongoClient}= require("mongodb");
const url  = "mongodb://localhost:27017";
const database = "Backend_operations";

const client = new MongoClient(url);


let getdata = async()=>{
    let result = await db.client.connect();
    let    = result.db(database);
    let collections = db.collections("crud_mongo");
    console.log(collections.find().toArray());

}

getdata();