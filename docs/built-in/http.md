# http (HyperText Transfer Protocol)

Es una biblioteca integrada que permite crear servidores web y realizar solicitudes HTTP a otras aplicaciones o APIs. Es fundamental para el desarrollo de aplicaciones web y APIs, permitiendo manejar los protocolos HTTP y HTTPS para la transferencia de datos entre cliente y servidor. 

| Metodo | Descripcion |
|-|-|
| __listen(`port`,`hostname`,`callback`)__  | Inicia un servidor que escucha peticiones en el puerto y hostname especificados |
| __close(`callback`)__ | Detiene la recepcion de nuevas solicitudes de conexion |
| __on(`eventName`, `listener`)__  | Registra un listener para eventos específicos, como 'request'. |

## Implementacion

Utilizando funciones como createServer(), el módulo permite crear un servidor que escucha en un host y puerto específicos, listo para recibir y procesar solicitudes HTTP de navegadores u otros clientes. 

```js
const http = require('http');
/* Server creation */
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome message\n');
});
/* Server Execution */
server.listen(3000, '127.0.0.1', () => {
  console.log('service running');
});
```

[volver](/readme.md)