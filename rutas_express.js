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

app.put('/usuarios/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Usuario ${userId} actualizado con éxito`);
  });

  app.delete('/usuarios/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Usuario ${userId} eliminado con éxito`);
  });


app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})