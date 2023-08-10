//vamos a declarar una constante llamada http 
//require llama a todas las librerias 

const http = require("http");

//funcion tipo flecha por como se inicializa
//request 
//response
const server = http.createServer((req, res) => {

    //se le pone 3 iguales 
    //un igual es una asignacionde valor 
    // dos iguales comparacion aproximada
    //tres iguales comparacion exacta

    if (req.method === "GET")
    {
           //la diagonal significa  local host
        if (req.url === "/") 
        {
             //localhost 3000/
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("¡Bienvenido!");
        } 
        else if (req.url === "/usuario") //ruta direccion 
        {
            //localhost 3000/
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const usuario1 = [{ id: 1, nombre: "Pancho" }];
            res.end(JSON.stringify(usuario1));
        } 
        else 
        {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("Ruta no encontrada");
        }
    } 

    else if (req.method === "POST")
     {
        if (req.url === "/Personal") 
        {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const usuario2 = [{ id: 2, nombre: "Juan" }];
            res.end(JSON.stringify(usuario2));
        } 
        else 
        {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("Ruta no encontrada");
        }
    } 
    else if (req.method === "PUT")
    {
        if (req.url.startsWith("/Poner/")) 
        {
            //const userId = req.url.split("/")[2]; segu  yo con este
            // Obtierne el ID del usuario de la URL segun 
            // Aquí se mueve lógica para actualizar el usuario con el ID que di
            // Luego ese da la respuesta 

            res.writeHead(200, { 'Content-Type': 'application/json' });
            const usuario3 = [{ id: 3, nombre: "miguel" }];
            res.end(JSON.stringify(usuario3));
        } 
        else 
        {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("Ruta no encontrada");
        }
    } 
    else if (req.method === "DELETE") 
    {
        if (req.url.startsWith("/Borrar/")) 
        {
             //const userId = req.url.split("/")[2]; segu  yo con este x2
             // Obtierne el ID del usuario de la URL segun 
            // Aquí se mueve lógica pero ahora para eliminar el usuario con el ID que di
            // Luego ese da la respuesta 

            res.writeHead(200, { 'Content-Type': 'application/json' });
            const usuario4 = [{ id: 4, nombre: "pedro" }];
            res.end(JSON.stringify(usuario4));
        } 
        else 
        {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("Ruta no encontrada");
        }
    } 
    else 
    {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end("Método no permitido");
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log("Servidor en espera en el puerto 3000");
});
