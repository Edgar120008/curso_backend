const express = require('express');
// const cors = require('cors');
const path = require('path');

class Server{
    constructor(){
        this.app = express();
        this.port =3000;

        // aqui se agregan las rutas que se consumiran

        // esta es la ruta principal
        this.rutaPrincipal = '/api/curso'

        this.middlewares();

        this.routes();

    }

    middlewares(){

        // este se utiliza para la ejecucion de credenciales para la subida del servidor
        // this.app.use(cors({ origin: true, credentials: true }));

        this.app.use(express.json());

        // con esta linea de codigo se usa para el renderizado de contenido publico o un frontend
        // this.app.use(express.static(path.join(__dirname, '../', "public")));

    }

    routes(){
        this.app.use(this.rutaPrincipal, require('../routes/verTareas.routes'));
    }

    listen(){

        this.app.listen(this.port, console.log(`Servidor a la espera de instrucciones ${this.port}`));
    }
}

module.exports = Server
