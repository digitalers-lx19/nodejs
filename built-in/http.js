const http = require('node:http');
const log = () => console.log(`servicio ejecutandose en https://${HOST}:${PORT}`)
const callBack = (request, response) => {
    const { url, headers, method } = request;
    response.writeHead(200, "ok", {
        "Content-Type": "application/json",
        "cross-origin": "*"
    });
    response.end(JSON.stringify({ url, method, headers }));
};
const server = http.createServer(callBack)
const run = ({HOST,PORT}) => server.listen(PORT, HOST, log);
module.exports = {
    run
}