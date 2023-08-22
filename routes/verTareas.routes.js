const { Router } = require('express');
const {verTareas, 
       verTareaPorId, 
       crearTarea, 
       editarTarea, 
       borrarTarea}  = require('../controllers/verTareas.controllers')

const router = Router();

router.get('/verTareas', verTareas)
router.get('/tarea/:id', verTareaPorId)

router.post('/creaTarea', crearTarea)

router.put('/actualizarTarea/:id',editarTarea);

router.delete('/borrarTareas/:id', borrarTarea);

module.exports = router;