# timers

Mecanismos que permiten programar la ejecución de funciones después de un período de tiempo específico o en intervalos regulares. Estos se basan en el módulo de temporización del entorno de ejecución de Node.js, que a su vez utiliza las funciones del sistema operativo para gestionar los tiempos de espera.

| Metodo | Descripcion |
|--|--|
| __setImmediate__ | Programa la ejecución de una funcion al final de la cola de eventos |
| __setInterval__ | Ejecucion repetida de una funcion en intervalos de tiempo específicos |
| __setTimeout__ | Ejecuta una funcion después de un tiempo específico |
| __clearImmediate__ | Cancela una función programada con setImmediate() |
| __clearInterval__ | Cancela una función programada con setInterval() |
| __clearTimeout__ | Cancela una función programada con setTimeout() |


[Volver](/readme.md)