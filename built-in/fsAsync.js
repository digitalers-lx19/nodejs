const fs = require('node:fs');
const path = require('node:path');

const assetsPath = path.join(__dirname, '..', 'assets');

const writeFileAsync = (app) => new Promise((resolve, reject) => 
    fs.writeFile(path.join(assetsPath, "app.txt"), app, 'utf-8', (err) => 
        err ? reject(err) : resolve("WRITE")
));
const readFileAsync = (filename) => new Promise((resolve, reject) => 
    fs.readFile(path.join(assetsPath, filename), (err, data) => 
        err ? reject(err) : resolve(data)
));
const appendFileAsync = (filename, content) => new Promise((resolve, reject) => 
    fs.appendFile(path.join(assetsPath, filename), content, 'utf-8', (err) => 
        err ? reject(err) : resolve("APPEND")
));
const unlinkFileAsync = (filename) => new Promise((resolve, reject) => 
    fs.unlink(path.join(assetsPath, filename), (err) => 
        err ? reject(err) : resolve("UNLINK")
));
const runFsAsyncDemo = async (app) => {
    console.log("PROBANDO MODULO FILE SYSTEM (Async)");
    console.log("\niniciando creacion de archivos");
    await writeFileAsync(app);
    console.log("WRITE completado");

    console.log("\niniciando lectura");
    const fsSyncData = await readFileAsync('fsSync.txt');
    console.log("Archivo fsSync: ", fsSyncData);
    const appData = await readFileAsync("app.txt");
    console.log("Archivo app: ", appData.toString());
    
    console.log("\niniciando actualizacion");
    const date = new Date().toString();
    await appendFileAsync('fsSync.txt', "\nCreated at: " + date);
    console.log("APPEND completado");
    
    console.log("\niniciando eliminacion");
    await unlinkFileAsync('app.txt');
    console.log("UNLINK completado");
};
module.exports = {
    writeFileAsync,
    readFileAsync,
    appendFileAsync,
    unlinkFileAsync,
    runFsAsyncDemo,
};