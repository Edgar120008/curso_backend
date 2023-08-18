const express = require('express');
const app = express();

const PORT = 3000;

// Diferentes parametros
// app.get('/usuario/:id/:nombre', (req, res)=>{
//     const userID = parseInt(req.params.id);
//     const nombreUsuario = req.params.nombre;
//     console.log(userID, nombreUsuario);
//     res.send(`Datos obtenidos del usuario: ${userID} ${nombreUsuario}..`);
// });

// Arreglo de parametros
// app.get('/usuario/:id', (req, res) => {
//     //Para que detecte varios id es necesario quitar el parseInt
//     // Para introducir los valores en postman le agregamos un "-", divide la cadena
//     const userID = req.params.id.split('-');
//     console.log(userID);
//     res.send(`Datos obtenidos del usuario: ${userID.join(', ')}..`);
// });

// Diferentes parametros
// app.post('/crearUsuarios/:id/:nombre', (req,res)=>{
//     const userID = parseInt(req.params.id);
//     const nombreUsuario = req.params.nombre;
//     console.log(userID, nombreUsuario);
//     res.send(`felicidades creo un usuario nuevo con el id: ${userID} ${nombreUsuario}...`);
// })

// Arreglo de parametros
// app.post('/crearUsuarios/:id', (req,res)=>{
//     const userID = req.params.id.split('-');
//     console.log(userID);
//     res.send(`felicidades creo un usuario nuevo con el id: ${userID.join(', ')}...`);
// })

// Diferentes parametros
// app.put('/actualizarUsuario/:id/:nombre', (req, res) =>{
//     const userID = parseInt(req.params.id);
//     const nombreUsuario = req.params.nombre;
//     console.log(userID, nombreUsuario);
//     res.send(`Datos de usuario actualizado con id: ${userID} ${nombreUsuario}...`);
// })

// Arreglo de parametros
// app.put('/actualizarUsuario/:id', (req, res) =>{
//     const userID = req.params.id.split('-');
//     console.log(userID);
//     res.send(`Datos de usuario actualizado con id: ${userID.join(', ')}...`);
// })

// Diferentes parametros
// app.delete('/borrarUsuario/:id/:nombre', (req, res) =>{
//     const userID = parseInt(req.params.id);
//     const nombreUsuario = req.params.nombre;
//     console.log(userID, nombreUsuario);
//     res.send(`Usuario eliminado con id: ${userID} ${nombreUsuario}...`);
// })

// Arreglo de parametros
// app.delete('/borrarUsuario/:id', (req, res) =>{
//     const userID = req.params.id.split('-');
//     console.log(userID);
//     res.send(`Usuario eliminado con id: ${userID.join(', ')}...`);
// })

//**********************/ Mensajes con inyecciones y parametros ***********************//
//*************************************************************************************//

// Definimos un mensaje de usuario
const mensaje = {
    msm: " Datos obtenidos de {nombre} con {id}"
};

// Manipular mensajes y parametros
app.get('/usuario/:nombre/:id', (req, res) => {
    const nombre = req.params.nombre;
    const userID = parseInt(req.params.id);
    const usuarioMensaje = mensaje.msm.replace('{nombre}',nombre).replace('{id}', userID);
    res.send(usuarioMensaje);
});

const mensaje1 = {
    msm: " Datos guardados en {nombre} con {id}"
};

// Manipular mensajes y parametros
app.post('/crearUsuarios/:nombre/:id', (req, res) => {
    const nombre = req.params.nombre;
    const userID = parseInt(req.params.id);
    const usuarioMensaje = mensaje1.msm.replace('{nombre}',nombre).replace('{id}', userID);
    res.send(usuarioMensaje);
});

const mensaje2 = {
    msm: " Datos modificados en {nombre} con {id}"
};

// Manipular mensajes y parametros
app.put('/actualizarUsuario/:nombre/:id', (req, res) => {
    const nombre = req.params.nombre;
    const userID = parseInt(req.params.id);
    const usuarioMensaje = mensaje2.msm.replace('{nombre}',nombre).replace('{id}', userID);
    res.send(usuarioMensaje);
});

const mensaje3 = {
    msm: " Datos eliminados de {nombre} con id: {id}"
};

// Manipular mensajes y parametros
app.delete('/borrarUsuario/:nombre/:id', (req, res) => {
    const nombre = req.params.nombre;
    const userID = parseInt(req.params.id);
    const usuarioMensaje = mensaje3.msm.replace('{nombre}',nombre).replace('{id}', userID);
    res.send(usuarioMensaje);
});

//*************************************************************************************//
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})