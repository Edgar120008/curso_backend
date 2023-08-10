const http = require('http'); 
  
// Estructura es metodo, ruta y mensaje

const server = http.createServer((req, res) => {
   if(req.method === 'GET'){
        if(req.url === '/'){ // localhost:3000/
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Bienvenido');
        }
        if(req.url === '/User'){ //  localhost:3000/usuario
            res.writeHead(200, {'Content-Type': 'text/plain'});
            const usuario1 = [{id:1, nombre:"Pancho"}] 
            res.end(JSON.stringify(usuario1));
        }
        
    }else if(req.method === 'POST'){
        if(req.url === '/POST'){   //direccion
        let body = 'Metodo POST';   

        req.on('data', chunk=>{body+=chunk;}); //inicio

        req.on('end', ()=>{         //final
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(body))
        });
    }
    }
    else if(req.method === 'PUT'){
        if(req.url === '/PUT_metod'){
            res.writeHead(200, {'Content-Type': 'text/plain'});
            let user = 'Metodo put'
            res.end(JSON.stringify(user));
        }
    }
    else if(req.method === 'DELETE'){
        if(req.url === '/Delete'){
            res.writeHead(200, {'Content-Type': 'text/plain'});
            let Delete = 'Metodo delete';
            res.end(JSON.stringify(Delete));
        }
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada');
      }
    })
const PORT = 3000;
server.listen(PORT, ()=>{
    console.log("Server iniciado....");
})