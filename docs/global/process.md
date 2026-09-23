# process

Interfaz para interactuar con el entorno del proceso de ejecución. Permite acceder a información y controlar el comportamiento del mismo; así como gestionar eventos y configuraciones relacionadas con el proceso.

| Propiedad | Tipo | Descripcion |
|--|--|--|
| __arch__ | _String_ | Propiedad que devuelve la arquitectura del sistema operativo actual |
| __argv__ | _Array_ | Propiedad que almacena los _argumentos_ pasados a la aplicacion que se esta ejecutando actualmente. |
| __cpuUsage__ | _Function_ | Metodo que devuelve un objeto que indica el consumo de memoria del procesador |
| __cwd__ | _Function_ | Metodo que devuelve un string con la ruta absoluta del directorio de trabajo actual |
| __env__ | _Object_ | Propiedad que contiene las _variables de entorno_ de la sistema operativo en el que se esta ejecutando. |
| __memoryUsage__ | _Function_ | Metodo de devuelve un objeto que detalla el uso de la memoria |
| __release__| _Object_ | Propiedad que contiene informacion relacionada con el version actual de NodeJS |
| __versions__ | _Object_ | Propiedad que almacena las versiones de los _modulos instalados_ y sus respectivas dependencias. | 

[Volver](/readme.md)