const path = require('node:path');
const parsePath = (AppPath) => AppPath ? 
    path.parse(AppPath) : 
    "No se encontro una Ruta Valida";
const joinPath = (...paths) => 
    path.join(__dirname, ...paths);
module.exports = { 
    parsePath, 
    joinPath 
};