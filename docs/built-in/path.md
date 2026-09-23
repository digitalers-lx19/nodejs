# path

Modulo que proporciona utilidades para manejar y transformar rutas de archivos en el sistema de archivos. Simplifica la manipulación de nombres de archivo y directorios y ayuda a crear rutas compatibles con diferentes sistemas operativos.

| Propiedad | Descripción |
|--|--|
| __parse__ | Devuelve un objeto con las propiedades _root, dir, base, ext, y name_ |
| __resolve__ | Resuelve una secuencia de rutas en una ruta absoluta |
| __dirname__ | Devuelve el directorio de una ruta excluyendo el nombre del archivo |
| __basename__ | Devuelve el nombre del archivo en una ruta |
| __extname__ | Devuelve la extensión de archivo en una ruta, incluyendo el punto |
| __join__ | Une varios segmentos de ruta en una sola |
| __format__ | Devuelve una ruta a partir de un objeto con _dir, base, name y ext_ |

## Implementacion

La utilizacion del modulo path es muy practica al momento de manejar rutas, especialmente cuando la estructura del proyecto se vuelve bastante compleja y el uso de rutas relativas puede llegar a ser tedioso.

```js
const path = require('path');
const mainDir = path.join(__dirname, 'data');
const filePath = path.resolve(mainDir, 'index.js');
const fileName = path.basename(filePath);
const parentDir = path.dirname(filePath);
const format = path.extname(filePath);
/* Path information */
console.log(
    `Ruta de la carpeta "data": ${mainDir} \n`,
    `Ruta absoluta del archivo: ${filePath} \n`,
    `Directorio padre: ${parentDir} \n`,
    `Nombre del archivo: ${fileName} \n`,
    `Extensión del archivo: ${format} \n`,
)
```

[Volver](/readme.md)