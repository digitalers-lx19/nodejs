const os = require('node:os');
const systemInfo = () => `
INFORMACION DEL SISTEMA:
    arquitectura: ${os.arch()}
    Memoria RAM: ${os.totalmem() / (1024)**3}
    RAM Disponible: ${os.freemem() / (1024)**3} GB
    Procesador: ${os.cpus()[0].model}
    nucleos: ${os.cpus().length}
`;
module.exports = {
    systemInfo
};