const express = require('express');
const app = express();

const PORT = 3000;

// Ejemplo de arreglo de usuarios
const usuarios = [
    { id: 1, nombre: 'Usuario 1' },
    { id: 2, nombre: 'Usuario 2' },
    { id: 3, nombre: 'Usuario 3' }
];

// Función para manejar mensajes
function mensajeHandler(mensaje) {
    return (req, res) => {
        res.send(mensaje);
    };
}

// Ruta para la página principal
app.get('/', mensajeHandler("Hola clase"));

// Ruta para obtener información de un usuario por su ID
app.get('/usuarios/:id', (req, res) => {
    const userID = parseInt(req.params.id);
    const usuario = usuarios.find(user => user.id === userID);
    if (usuario) {
        res.send(`Información del usuario con ID ${userID}: ${usuario.nombre}`);
    } else {
        res.send(`No se encontró ningún usuario con ID ${userID}`);
    }
});

// Ruta para listar todos los usuarios
app.get('/usuarios', (req, res) => {
    const userList = usuarios.map(user => user.nombre).join(', ');
    res.send(mensajeHandler('Listado de todos los usuarios: ' + userList)(req, res));
});

// Función para manejar parámetros
function parametroHandler(parametro) {
    return (req, res) => {
        res.send(`Parámetro recibido: ${parametro}`);
    };
}

// Ruta para manipular un parámetro
app.get('/parametro/:valor', (req, res) => {
    parametroHandler(req.params.valor)(req, res);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
