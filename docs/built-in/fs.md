# fs (File System)

El módulo del sistema de archivos Proporciona varias API para interactuar con los sistemas de archivos sin problemas. La mayoría de las API son personalizables con opciones y banderas. También puedes utilizarlas para realizar operaciones de archivo tanto síncronas como asíncronas.

| Propiedad | Descripción |
|--|--|
| __readFile__	| Lee el contenido de un archivo de manera asíncrona |
| __writeFile__	| Escribe datos en un archivo de manera asíncrona |
| __appendFile__ | Añade datos a un archivo de manera asíncrona |
| __unlink__	| Elimina un archivo |

## Implementacion 

El módulo fs es esencial para realizar operaciones del sistema de archivos, ya sea que necesitemos leer archivos de configuración, escribir archivos de registro o servir recursos estáticos, el módulo fs proporciona las herramientas necesarias para interactuar con el sistema de archivos eficientemente.

```js
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.writeFile('output.txt', 'Este es el contenido del archivo', (err) => {
  if (err) throw err;
  console.log('Archivo guardado correctamente');
});
```
[Volver](/readme.md)