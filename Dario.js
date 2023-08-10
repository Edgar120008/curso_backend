const http = require('http');

const server = http.createServer((req,res)=>{

    if(req.method === 'GET'){
        if(req.url === '/'){
            res.writeHead(200,{'Content-Type': 'text/plain'});
            res.end('Bienvenido');
        }
        if(req.url == "/usuario"){
            res.writeHead(200,{'Content-Type': 'text/plain'});
            const usuario1 = [{id:1, nombre: "Pancho"}];
            res.end(JSON.stringify(usuario1));
        }
    }
    else if(req.method === 'POST'){
        if(req.url == "/usuario"){

            res.writeHead(201,{'Content-Type': 'text/plain'})
            const nuevoUsuario = [{id:1, nombre: "Pedro"}];
            res.end(JSON.stringify(nuevoUsuario));
        }
    }
    else if(req.method === 'PUT'){
        if(req.url === "/usuario/1"){
            res.writeHead(201,{'Content-Type': 'text/plain'});
            const actualizarUsuario = [{id:1, nombre: "Actualizar"}];
            res.end(JSON.stringify(actualizarUsuario));

        }
    }
    else if(req.method === 'DELETE'){
        if(req.url == '/usuario/{id}'){
            res.writeHead(204,{'Content-Type': 'text/plain'});
            const borrarUsuario = [{id:1, nombre: "Eliminar"}];
            res.end(JSON.stringify(borrarUsuario));
        }
    }
})

const PORT = 3000;
server.listen(PORT,()=>{
    console.log("Puerto" + PORT + " a la espera");
});