# console

Objeto que ofrece métodos para imprimir información y errores en la consola estándar. Es bastante útil debido a que facilita la visualización de datos y la depuración de aplicaciones. 

| Método | Descripción | Ejemplo |
|-|-|-|
| __log__ | Imprime mensajes en la consola estándar	| __console.log(`"message"`)__ |
| __error__ | Imprime un mensaje de error en un formato diferente | __console.error(`"message"`)__ |
| __warn__ | Imprime un mensaje de advertencia, con un estilo distinto | __console.warn(`"message"`)__ |
| __info__ | Imprime un mensaje informativo	| __console.info(`"message"`)__ |
| __count__ | Cuenta el número de veces que se llama un mensaje específico | __console.count(`"iteration"`)__ | 
| __table__ | Muestra los datos en formato de tabla | __console.table(__[`"jane"`, `"john"`]__)__ |
| __group__ | Permiten agrupar mensajes relacionados | __console.group(`"start"`)__; ... __console.groupEnd()__ |
| __time__ | Mide el tiempo que tarda una operación | __console.time(`"process"`)__; ... __console.timeEnd(`"process"`);__ |
| __assert__ | Imprime un mensaje de error si el primer argumento es falso	| __console.assert(`condition`, `"failed"`)__ |

[Volver](/readme.md)