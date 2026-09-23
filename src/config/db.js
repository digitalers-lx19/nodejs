import mongoose from "mongoose";
async function dbConn(uri) {
    try{
        await mongoose.connect(uri);
        console.log("Base de datos conectada correctamente");
    }
    catch(err){
        console.log(err);
    }
}
export default dbConn;