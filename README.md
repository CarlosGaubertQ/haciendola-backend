# Backend Haciendola - prueba tecnica

Para poder hacer uso del sistema, debemos tener instalado:

- Node js
- Mysql 

## Preparación de la base de datos 

En la base de datos mysql debemos acceder mediante la terminal con el comando 

```
mysql -u root -p 
```

Nos pedira nuestra contraseña la escribimos, luego crearemos una base de datos con el nombre `haciendola`, accederemos a ella y mediante el archivo database_dump.sql

```
node_modules/
src/
├── controllers/
├── database/
│   ├── database_dump.sql  <---
│   └── database.js
├── models/
└── routes/
    ├── app.js
    └── index.js
.env
.gitignore
dump.sql
image.png
package-lock.json
package.json
README.md
```

Copiaremos el contenido del archivo dentro de la base de datos


Lo siguente sera crear un archivo .env en la carpeta en donde este alojado el Backend con la siguiente estructura:

```
PASS=**************
```

Se debe reemplazar el valor de la variable `PASS` con contraseña de la base de datos mysql local.

Ahora procedemos a utilizar el siguiente comando:

```
npm install
```

Con esto instalaremos las depencias del sistema, luego usaremos el comando:

```
npm run dev 
```

Con esto tendremos el Backend/Servidor corriendo a la espera de una solicitud por parte del sistema web. 
Por defecto se esta usando el puerto `3000` para poder usar este como acceso al Backend, asi no habra problemas con respecto al Frontend y sus solicitudes.

![alt text](image.png)
