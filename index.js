const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('Hola clase');
});

app.post('/crearUsuarios/:id', (req, res)=>{
    const userID = parseInt(req.params.id);
    res.send(`felicidades creo un usuario nuevo con el id:${userID}`);
})




app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})