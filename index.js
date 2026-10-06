console.log(
    "NodeJS Digitalers",
    "\nCalculadora - Rama acceptance-driven",
    "\nPresiona CTRL+C para terminar la ejecucion"
);

import { createServer } from "./src/api.js";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

if (import.meta.url === `file://${process.argv[1]}`) {
    createServer().listen(PORT, () => {
        console.log(`Servidor de calculadora ejecutandose en http://${HOST}:${PORT}`);
    });
}

export { createServer };