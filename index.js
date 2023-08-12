const express = require('express');
const app = express ();

const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('Hola clase');
});

app.post('/crearUsuarios/:id', (req, res)=>{
    const userID = parseInt(req.params.id);
    res.send(`Felicidades creo el User nuevo con el id: ${userID}...`)
})
app.put('/actualizarUser/:id', (req, res)=>{
    const User=parseInt(req.params.id);
    res.send(`El usuario con el id: ${User} fue modificado`)
})
app.delete('/EliminarUser/:id', (req, res)=>{
    const Borrar=parseInt(req.params.id);
    res.send(`El usario ${Borrar} fue eliminado`)
})

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})



// get post put y delete