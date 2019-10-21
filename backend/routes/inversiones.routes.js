const router=require('express').Router();

const proyectoCtrl=require('../controllers/proyecto.controler');

router.get('/proyectos',proyectoCtrl.getProyectos);
router.get('/proyecto/:id',proyectoCtrl.getProyecto);
router.post('/proyecto',proyectoCtrl.createProyecto);
router.put('/proyecto/:id',proyectoCtrl.updateProyecto);
router.delete('/proyecto/:id',proyectoCtrl.deleteProyecto);

module.exports=router;
