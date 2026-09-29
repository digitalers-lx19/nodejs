import mongoose from "mongoose";
async function dbConn(uri) {
    try{
        const conn = await mongoose.connect(uri);
        const {connection: {db: {databaseName:db }}} = conn;
        console.log("Base de datos", db, "conectada");
    }
    catch(err){
        console.log(err.message);
    }
}
export default dbConn;