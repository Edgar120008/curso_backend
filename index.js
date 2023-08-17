const express = require ('express');
const app = express();
const PORT = 3000;

// middleware para parserar JSON en las solicitudes
app.use(express.json());

// midleware perzonalizado para registrar solicitudes
app.use((req, res, next)=>{
  console.log(`Solicitud recibida en ${new Date()}`)
  next();
})

// middleware perzonalizado para autnticacion basica
const auth = (req, res, next) =>{
  const palabra = req.headers.authorization;

  if(palabra==='llave'){
    next(); //continua si el valor de la palabra es la correcta
  }else{
    res.status(401).json({error:'el valor de la palabra no es correcto'});
  }
};

app.get('/ruta/palabra', auth, (req, res)=>{
  res.json({mensaje: 'se ingreso con exito a la ruta'});
});

app.listen(PORT, ()=>{
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});