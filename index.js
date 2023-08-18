const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let tareas =[
  {id:1, titulo:'Hacer Tarea'},
  {id:2, titulo:'Estuduar Express'}
];

// esta ruta manda como respuesta todas las tareas
app.get('/tareas', (req, res) =>{
  res.json(tareas);
})

// esta ruta manda como respuesta solo la tarea que se indique en el parametro
app.get('/tarea/:id', (req, res)=>{
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);

  if(isNaN(id)){
    res.status(400).json({mensaje: 'por favor ingresa un numero como parametro'})
  }
  if(tarea){
    res.json(tarea)
  }else{
    res.status(404).json({mensaje: `no existe esa tarea con el id ${id}`})
  }
})

// esta ruta crea una nueva tarea
app.post('/nuevaTarea', (req, res)=>{
  const nuevaTarea = req.body;
  nuevaTarea.id = tareas.length + 1;
  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
})

// resta ruta actualiza las tareas
app.put('/actualizarTarea/:id', (req, res)=>{
  const id = parseInt (req.params.id);
  const actualizacionTarea =req.body;
  const index = tareas.findIndex(t => t.id === id);

  if(index !== -1){
    tareas[index] ={ ...tareas[index], ...actualizacionTarea};
    res.json(tareas[index]);
  }else{
    res.status(404).json({mensaje:'Tarea no encontrada'})
  }
})

// ruta para eliminar tareas
app.delete('/borrarTareas/:id', (req, res)=>{
  const id = parseInt (req.params.id);
  const index = tareas.findIndex(t => t.id === id);

  if(index !== -1){
    const tareaBorrada = tareas.splice(index, 1)[0];
    res.status(200).json({mensaje: `Se borro exitosamente la tarea ${id}`});
  }else{
    res.status(404).json({mensaje: 'Tearea no encontrada'});
  }
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});