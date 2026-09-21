import { configDotenv } from "dotenv";
import express from "express";

const dotEnv = configDotenv()
const { parsed: {
    HOST,
    PORT,
    URI,
}} = dotEnv
const app = express()

app.get("/", (req, res) => {
    res.json({
        method: req.method,
        message: "NO SE ENCONTRARON DATOS"
    })
});
app.post("/", (req, res) => {
    res.json({
        method: req.method,
        message: "SOLICITUD CARGADA EXITOSAMENTE"
    })
});
app.put("/", (req, res) => {
    res.json({
        method: req.method,
        message: "DATOS ACTUALIZADOS EXITOSAMENTE"
    })
});
app.delete("/", (req, res) => {
    res.json({
        method: req.method,
        message: "DATOS ELIMINADOS EXITOSAMENTE"
    })
});

app.listen(PORT);