// Importar el módulo Express
const express = require('express');

// Crear una instancia de la aplicación Express
const app = express();

// Definir el número de puerto en el que el servidor escuchará
const PORT = 3000;

// Ejemplo de arreglo de usuarios
const usuarios = [
    { id: 1, nombre: 'Usuario 1' },
    { id: 2, nombre: 'Usuario 2' },
    { id: 3, nombre: 'Usuario 3' }
];

// Ruta para la página principal
app.get('/', (req, res) => {
    res.send("Hola clase");
});

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
    res.send('Listado de todos los usuarios: ' + usuarios.map(user => user.nombre).join(', '));
});

// Ruta para crear un nuevo usuario
app.post('/crearUsuarios', (req, res) => {
    const newUser = { id: usuarios.length + 1, nombre: 'Nuevo Usuario' };
    usuarios.push(newUser);
    res.send(`Felicidades, se creó un nuevo usuario con el ID ${newUser.id}`);
});

// Iniciar el servidor y hacerlo escuchar en el puerto definido
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Ruta para eliminar un usuario por su ID
app.delete('/eliminarUsuarios/:id', (req, res) => {
    const userID = parseInt(req.params.id);
    const usuarioIndex = usuarios.findIndex(user => user.id === userID);

    if (usuarioIndex !== -1) {
        usuarios.splice(usuarioIndex, 1);
        res.send(`Usuario con ID ${userID} eliminado correctamente.`);
    } else {
        res.send(`No se encontró ningún usuario con ID ${userID}. No se realizó ninguna eliminación.`);
    }
});
