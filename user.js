

/*PASO 3: Modelo User
Después creamos el modelo del usuario. Esto permite que podamos realizar operaciones en la base de datos MongoDB relacionadas 
con la colección de usuarios. Para ello creamos una carpeta models y dentro crearemos nuestros modelos.
En este caso creamos un archivo llamado User.js que contendrá nuestro modelo de User.
De esta forma tendremos una estructura que nos permitirá el uso de operaciones CRUD (Create, Read, Update, Delete)
que pueden realizarse en la base de datos.*/

// User.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;