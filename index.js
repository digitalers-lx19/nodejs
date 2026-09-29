import { configDotenv } from "dotenv";
import morgan from "morgan";
import express from "express";
import dbConn from "./src/config/db.js";
import userRouter from "./src/routes/user.router.js";

const dotEnv = configDotenv();
const { parsed: {
    HOST,
    PORT,
    URI,
    MONGODB_URI,
}} = dotEnv;
const app = express();
dbConn(URI || MONGODB_URI);
app.use(morgan("dev"));
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine();
// Rutas de usuarios
app.use("/users", userRouter);
// Archivos Estaticos
app.use(express.static("public"));
app.listen(PORT, () => console.log(`servidor ejecutandose en http://${HOST}:${PORT}`));