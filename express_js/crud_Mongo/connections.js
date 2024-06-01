const{MongoClient}= require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = 'Backend_operations';


const connect = async()=>{
    let result = await client.connect();
    let db = await result.db(database);
    return db.collection("crud_mongo");
    
}

module.exports = connect;