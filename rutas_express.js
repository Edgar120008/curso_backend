const express = require('express');
const app = express ();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('Hola clase');
});

app.post('/crearUsuarios/:id/:name', (req, res)=>{
    const userID = parseInt(req.params.id);
    let N = req.params.name;
    res.send(`Felicidades creo el User nuevo con el id: ${userID} y el nombre ${N}...`)
})
app.put('/actualizarUser/:id/:name', (req, res)=>{
    const User=parseInt(req.params.id);
    let Nombre = req.params.name;
    res.send(`El usuario con el id: ${User} fue modificado con el nombre ${Nombre}`)
})
app.delete('/EliminarUser/:id/:name', (req, res)=>{
    const Borrar=parseInt(req.params.id);
    let Name=req.params.name;
    res.send(`El usario ${Borrar} con el nombre ${Name} fue eliminado`)
})

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})
