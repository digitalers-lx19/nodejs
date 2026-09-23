const { parseUrl } = require('./built-in/url');
const { systemInfo } = require('./built-in/os');
const { parsePath, joinPath } = require('./built-in/path');
const { getProcessInfo, printProcessInfo } = require('./built-in/process');
const { runFsSyncDemo } = require('./built-in/fsSync');
const { runFsAsyncDemo } = require('./built-in/fsAsync');
const { run: runHttpServer } = require('./built-in/http');

const main = async () => {
    console.log("NodeJS Digitalers");
    console.log("Punto de Entrada Principal");
    console.log("Presiona CTRL+C para terminar la ejecucion\n");

    console.log("=== URL Parsing ===");
    const testUrl = process.argv[2] || "https://example.com/path?query=value";
    console.log("URL:", testUrl);
    console.log("Parsed:", parseUrl(testUrl));

    console.log("\n=== OS Info ===");
    console.log(systemInfo());

    console.log("\n=== Path Operations ===");
    const appPath = process.argv[1];
    console.log("App Path:", appPath);
    console.log("Parsed:", parsePath(appPath));
    console.log("Joined:", joinPath("assets", "styles.css"));

    console.log("\n=== Process Info ===");
    printProcessInfo();
    console.log("Process Info Object:", getProcessInfo());

    console.log("\n=== FS Sync Demo ===");
    runFsSyncDemo(appPath, process.argv[2]);

    console.log("\n=== FS Async Demo ===");
    await runFsAsyncDemo(appPath);

    console.log("\n=== HTTP Server ===");
    console.log("Para probar el servidor HTTP, descomenta la siguiente linea:");
    // runHttpServer({ HOST: 'localhost', PORT: 3000 });
};
main().catch(console.error);