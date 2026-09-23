const fs = require('node:fs');
const path = require('node:path');

const assetsPath = path.join(__dirname, '..', 'assets');
const writeFiles = (app, arg) => {
    console.log("\niniciando creacion de archivos");
    fs.writeFileSync(path.join(assetsPath, "app.txt"), app, 'utf-8');
    fs.writeFileSync(path.join(assetsPath, 'fsSync.txt'), arg, 'utf-8');
    console.log("\nfinalizando creacion de archivos");
};
const readFiles = () => {
    console.log("\niniciando lectura");
    const file = fs.readFileSync(path.join(assetsPath, 'fsSync.txt'));
    console.log("Archivo fsSync: ", file);
    const appdata = fs.readFileSync(path.join(assetsPath, "app.txt"));
    console.log("Archivo app: ", appdata.toLocaleString());
    console.log("\nfinalizando lectura");
};
const updateFile = () => {
    console.log("\niniciando actualizacion");
    const date = new Date().toString();
    console.log(date);
    fs.appendFileSync(path.join(assetsPath, 'fsSync.txt'), "\nCreated at: " + date, 'utf-8');
    console.log("\nfinalizando actualizacion");
};
const deleteFile = () => {
    console.log("\niniciando eliminacion");
    fs.unlinkSync(path.join(assetsPath, 'app.txt'));
    console.log("\nfinalizando eliminacion");
};
const runFsSyncDemo = (app, arg) => {
    console.log("PROBANDO MODULO FILE SYSTEM (Sync)");
    writeFiles(app, arg);
    readFiles();
    updateFile();
    deleteFile();
};
module.exports = { 
    writeFiles, 
    readFiles, 
    updateFile, 
    deleteFile, 
    runFsSyncDemo 
};