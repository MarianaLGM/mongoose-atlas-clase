
/*PASO 4: Rutas y endpoints
Por último crearemos las rutas y en ellas los diferentes endpoints(CRUD).
Para ello creamos la carpeta routes y en ella el archivo users.js que hiremos completando con los diferentes endpoints:
Ejemplo para el endpoint de crear un usuario nuevo*/

//  routes/users.js

const express = require("express");
const router = express.Router();
const User = require("../models/user.js"); 


router.post("/create", async(req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).send(user);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to create a user" });
    }
});

module.exports = router;

