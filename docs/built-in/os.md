# os (Operating System)

Módulo que permite obtener información sobre el entorno del sistema, como la arquitectura de la CPU, la memoria disponible y el sistema de archivos. Esto es útil para la depuración, el monitoreo y la optimización del rendimiento de las aplicaciones.

| Método | Descripción |
|--|--|
| __arch__ | Devuelve la arquitectura de la CPU ('x64', 'arm', 'arm64', etc.) |
| __cpus__ | Devuelve una lista de objetos con información sobre cada CPU, incluyendo el modelo, velocidad y tiempos de uso |
| __freemem__ | Devuelve la cantidad de memoria libre en bytes |
| __totalmem__ | Devuelve la cantidad total de memoria del sistema en bytes |
| __hostname__ | Devuelve el nombre del host del sistema |
| __networkInterfaces__ | Devuelve un objeto con información sobre las interfaces de red del sistema, incluyendo direcciones IP, MAC y más |
| __platform__ | Devuelve una cadena que representa el sistema operativo ('darwin', 'freebsd', 'linux', 'sunos', 'win32') |
| __release__ | Devuelve la versión del sistema operativo |
| __tmpdir__ | Devuelve el directorio temporal del sistema |
| __uptime__ | Devuelve el tiempo de actividad del sistema en segundos desde el último inicio |
| __userInfo__ | Devuelve información sobre el usuario actual, como username, uid, gid, shell, y homedir |
| __endianness__ | Devuelve el orden de bytes del sistema ('BE' o 'LE') |

## Implementacion

Todos los métodos del módulo son síncronos y devuelven resultados inmediatamente, para aplicaciones de rendimiento crítico, es recomendable almacenar en caché los resultados aquellos métodos que sean consultados con frecuencia.

```js
const os = require('os');
/* Basic system information */
console.log(
    `OS Platform: ${os.platform()}\n`,
    `OS Type: ${os.type()}\n`,
    `OS Release: ${os.release()}\n`,
    `CPU Architecture: ${os.arch()}\n`,
    `Hostname: ${os.hostname()}\n`,
);
/* Memory information */
const totalMem = (os.totalmem() / 1024**3).toFixed(2);
const freeMem = (os.freemem() / 1024**3).toFixed(2);
console.log(`Memory: ${freeMem}GB free of ${totalMem}GB`);
/* User information */
const userInfo = os.userInfo();
console.log(
    `Current User: ${userInfo.username}\n`,
    `Home Directory: ${os.homedir()}\n`
);
```

[Volver](/readme.md)