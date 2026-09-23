const getProcessInfo = () => {
    const [node, AppPath, ...args] = process.argv;
    return {
        node,
        AppPath,
        args
    };
};
const printProcessInfo = () => {
    const info = getProcessInfo();
    console.log(
        "\nEjecutable NodeJS: ", info.node,
        "\nRuta de Archivo:", info.AppPath,
        "\nARGUMENTOS UTILIZADOS: (String)"
    );
    for (const a of info.args) console.log(a);
};
module.exports = { 
    getProcessInfo,
    printProcessInfo,
};