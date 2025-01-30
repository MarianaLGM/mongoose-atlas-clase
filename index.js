


//PASO 1: Crear un Servidor Express
        /*Lo primero creamos un servidor de express y lo levantamos.
        Para ello inicializamos proyecto de node e instalamos dependencias:
    Instalamos express para crear el servidor, mongoose para la conexión a la base de datos y dotenv para poder usar las variables de entorno.
        npm init -y
        npm i express mongoose dotenv
*/

const express = require('express');
const app = express();
const PORT = 8080;
const routes = require('./routes');

//PASO 2_BIS: Nos importaremos dicha conexión en index.js. 
const { dbConnection } = require('./config/config');

/*PASO 6: Por último nos importamos las rutas en nuestro archivo principal index.js, añadimos el express JSON para parsear el body, y
añadimos la ruta:*/
app.use(express.json());
app.use('/', routes);

//PASO 2_BIS: llamamos la función para que cuando levantemos el servidor haga la conexión.
dbConnection();

//PASO 1:
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


/*FINAL: Con esto ya tendríamos un servidor de express con una conexión a una base de datos MongoDB y 
con operaciones CRUD para la colección de usuarios. Para poder probarlo podemos usar Postman o
cualquier otra herramienta que nos permita hacer peticiones HTTP.*/






