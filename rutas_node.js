const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') { // ruta principal localhost:3000
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('¡Hola, mundo!');
    } else if (req.url === '/usuarios') { // ruta principal localhost:3000/usuarios
      // Manejar GET para /usuarios
      res.writeHead(200, { 'Content-Type': 'application/json' });
      const usuarios = [{ id: 1, nombre: 'Usuario 1' }, { id: 2, nombre: 'Usuario 2' }];
      res.end(JSON.stringify(usuarios));
    }
  } else if (req.method === 'POST') {
    if (req.url === '/usuarios') { // ruta principal localhost:3000/usuarios
      res.writeHead(201, { 'Content-Type': 'text/plain' });
      res.end('Usuario creado con éxito');
    }
  } else if (req.method === 'PUT') {
    if (req.url === '/usuarios/1') { // ruta principal localhost:3000/usuarios/1
      // Manejar PUT para /usuarios/1
      // ... actualizar datos del usuario con ID 1 ...
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Usuario actualizado con éxito');
    }
  } else if (req.method === 'DELETE') {
    if (req.url === '/usuarios/1') { // ruta principal localhost:3000/usuarios/1
      // Manejar DELETE para /usuarios/1
      // ... eliminar usuario con ID 1 ...
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Usuario eliminado con éxito');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
