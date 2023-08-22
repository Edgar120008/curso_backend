const {request, response} = require('express')

let tareas =[
    {id:1, titulo:'Hacer Tarea'},
    {id:2, titulo:'Estudiar Express'}
  ];
  

const verTareas = async(req=request, res=response) =>{

    return res.status(200).json({tareas})
}

const verTareaPorId = async(req=request, res=response) =>{
    const id = parseInt(req.params.id);
    const tarea = tareas.find(t => t.id === id);

  if(isNaN(id)){
    return res.status(400).json({mensaje: 'por favor ingresa un numero como parametro'})
  }
  if(tarea){
    return res.json({tarea})
  }else{
    return res.status(404).json({mensaje: `no existe esa tarea con el id ${id}`})
  }
}

const crearTarea = async(req=request, res=response) =>{
    const nuevaTarea = req.body;
    nuevaTarea.id = tareas.length + 1;
    tareas.push(nuevaTarea);
    return res.status(201).json({mensaje: 'la Tarea se creo con exito'});
}

const editarTarea = async(req=request, res=response) =>{
    const id = parseInt (req.params.id);
    const actualizacionTarea =req.body;
    const index = tareas.findIndex(t => t.id === id);

  if(index !== -1){
    tareas[index] ={ ...tareas[index], ...actualizacionTarea};
    return res.json({mensaje: `Se edito con exito la tarea ${id}`});
  }else{
    return res.status(404).json({mensaje:'Tarea no encontrada'})
  }
}

const borrarTarea = async(req=request, res=response) =>{
    const id = parseInt (req.params.id);
    const index = tareas.findIndex(t => t.id === id);

  if(index !== -1){
    const tareaBorrada = tareas.splice(index, 1)[0];
    return res.status(200).json({mensaje: `Se borro exitosamente la tarea ${id}`});
  }else{
     return res.status(404).json({mensaje: 'Tearea no encontrada'});
  }
}



module.exports={verTareas, 
                verTareaPorId, 
                crearTarea, 
                editarTarea, 
                borrarTarea}