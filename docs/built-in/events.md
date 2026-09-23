# events

Son mensajes que se envían desde un lugar a otro de la aplicacion, para avisar que acciones deben desencarse, relacionadas a funciones que corresponden a otra parte del código. Cuando trabajamos con Javascript, en el navegador, es muy común trabajar con eventos.

En el frontend esto esta ligado al DOM, sin embargo, en Node no existe dicho concepto. Sin embargo, existe un módulo llamado EventEmitter que funciona de forma muy similar.

| metodo | descripcion |
|-|-|
| __on(`eventName`, `listener`)__	| Añade un oyente (listener) para el evento especificado |
| __emit(`eventName`, `...args`)__	| Dispara un evento, enviando argumentos a todos sus oyentes |
| __off(`eventName`, `listener`)__	| Elimina un oyente específico para un evento dado |
| __removeAllListeners([`eventName`])__	| Elimina todos los oyentes o los de un evento específico |
| __setMaxListeners(`n`)__	| Establece el número máximo de oyentes permitidos |
| __eventNames()__ | Devuelve un array con los nombres de los eventos registrados |
| __listenerCount(`eventName`)__	| Devuelve el número de oyentes registrados para un evento específico |

## Implementacion

La arquitectura de Node.js está basada en eventos, y EventEmitter es esencial para ello, permitiendo que los objetos arrojen y escuchen eventos con nombre, los cuales ejecutan funciones asociadas de forma asíncrona, facilitando el manejo de operaciones sin bloqueo.

```js
const EventEmitter = require('events');
const logger = new EventEmitter();

const userData = {
  username: 'c215714n',
  email: 'cristiandracedo@hotmail.com'
};
// Event Listener
logger.on('addUser', (userData) => {
  sendWelcomeEmail(userData.email);
  console.log(
    `Se registró un nuevo usuario: ${userData.username}\n`,
    `Enviando correo de bienvenida a ${userData.email}\n`
  );
});
// Event Trigger
logger.emit('addUser', userData);
```

[volver](/readme.md)