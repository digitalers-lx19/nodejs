# url (Unique Resource Locator)

Modulo que proporciona utilidades que facilitan el análisis, la resolución y la manipulación de las URLs en las aplicaciones. Este módulo es útil para aplicaciones web y servidores que necesitan construir, analizar o resolver URLs en sus procesos.

| Método | Descripción |
|--|--|
| __parse__ | Devuelve un objeto con propiedades que representan los componentes de la URL |
| __format__ | Construye una URL a partir de un objeto (_protocol, host, pathname, search, hash, etc._) |
| __resolve__ | Convierte una URL relativa en una ruta absoluta |
| __URL__ | Clase para crear y manipular URLs con una interfaz orientada a objetos |
| __URLSearchParams__ | Clase para trabajar con los parámetros de búsqueda de la URL |

## Implementacion

El modulo url permite extraer las partes de la url creando un objeto a partir de una direccion; tambien permite identificar y acceder a los valores de cada uno de los parametros implementados al utilizar el metodo GET, facilitando la realizacion de consultas mediante el uso de formularios.

```js
const url = require('url');
const data = url.parse('http://localhost:8080/index.html?year=2025&month=september');
/* URL Params */
console.log(
    `protocol: ${data.protocol}\n`,
    `host: ${data.host}\n`,
    `hostname: ${data.hostname}\n`,
    `port: ${data.port}\n`,
    `pathname: ${data.pathname}\n`,
    `search: ${data.search}\n`,
    `href: ${data.href}\n`,
);
/* Query Params */
const query = data.query;
console.log(
    `year: ${query.year}\n`
    `month: ${query.month}\n` 
);
```

[Volver](/readme.md)