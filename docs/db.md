# Bases de Datos

Estructura cuya finalidad es contener y organizar datos manteniendo la integridad de los mismos, para facilitar su acceso y uso.
Dependiendo del uso que se le vaya a dar, las bases de datos pueden ser de diferentes tipos

* relacional
* transaccional
* jerarquica
* documentos
* orientada a objetos
* grafos

## SQL (Structured Query Language)

Las bases de datos relacionales normalmente se encuentran ordenadas en tablas, las cuales se dividen de la siguiente manera:

* __Campos__ (Columnas): Conjunto de datos del _mismo tipo_
* __Registros__ (Filas): Conjunto de datos que _guardan relacion_
* __Datos__ (Celdas): Minima _porcion de informacion_

La estructura y el proceso de creacion en un modelo estructurado es rigido, ya que no puedo insertar datos en tablas que aun no hayan sido creadas; lo mismo ocurre para la creacion de las tablas, es decir, no puedo proceder si no existe la base de datos creada y  seleccionada para contener dicha tabla.

* __DDL (Data Definition Language)__ - ESTRUCTURA
    * __CREATE__ crear una db/tabla/usuario
    * __DROP__   elimina una db/tabla/usuario
    * __ALTER__  modifica un tabla
* __DML (Data Manipulation Language)__ - MANIPULACION
    * __SELECT__ consulta los registros de una tabla
    * __INSERT__ agrega registros a una tabla
    * __UPDATE__ actualiza los registros de una tabla
    * __DELETE__ elimina registros de una tabla
* __DCL (Data Control Language)__ - CONTROL
    * __GRANT__  otorga permisos a un usuario
    * __REVOKE__ elimina permisos de un usuario
    * __FLUSH PRIVILEGES__ refrescar los permisos

EL objetivo principal en este tipo de bases de datos es reducir lo maximo posible el espacio ocupado por los datos, utilizando diferentes herramientas, como lo son __las relaciones__.

* MySQL
* MariaDB
* SQLite
* Postgree
* Oracle SQL
* Microsoft SQL Server

## NoSQL (Not Only SQL)

Consisten en motores de bases de datos mas versatiles, debido a que, en muchos casos, no requerimos de la definicion de una estructura previa para la insercion de datos. mongoDB es un motor de bases de datos orientado a documentos y si lo comparamos con el esquema relacional podriamos inferir lo siguiente:

| SQL | MongoDB |
|-|-|
| Tabla | Coleccion |
| Registro | Documento |
| Campo | Clave |
| Dato | Valor |

* Conexion
```sh
# local = PROTO://HOST:PORT/DATABASE
mongosh mongodb://localhost:27017/digitalers
# remote
mongosh mongo+srv://user:password@host/database
```

A diferencia de las bases de datos SQL, no suelen tener un estandar, _no comparten lenguaje_, ni siquiera una sintaxis similar y puede dificultarse la migracion de datos de un motor a otro.

* Cassandra
* Redis
* mongoDB

[volver](/readme.md)