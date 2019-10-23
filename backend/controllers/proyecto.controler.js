const Proyecto = require("../models/proyecto");
const proyectoCtrl = {};

proyectoCtrl.getProyectos = async (req, res) => {
  await Proyecto.findAll({
    where: {
      estado: true
    }
  })
    .then(proyectos => {
      res.json(proyectos);
    })
    .catch(err => {
      res.status(500).json({ error: "a ocurrido un error :c"});
    });
};
proyectoCtrl.createProyecto = async (req, res) => {
  var proyecto = req.body; 
  proyecto.estado=true;
  proyecto = await Proyecto.create(proyecto, {
    fields: ["nombre", "descripcion", "monto", "fecha", "estado"]
  })
    .then(proyecto => {
      res.json(proyecto);
    })
    .catch(err => {
      res.status(500).json({
        error:
          "el json solo posee 'nombre','descripcion','monto','fecha','estado'" 
      });
    });
};
proyectoCtrl.getProyecto = async (req, res) => {
  const {id}=req.params;
  await Proyecto.findAll({
    where: {
      id,
      estado: true
    }
  })
    .then(proyectos => {
      res.json(proyectos);
    })
    .catch(err => {
      res.status(500).json({ error: "el parametro debe ser de tipo entero"});
    });
};
proyectoCtrl.updateProyecto = async (req, res) => {
  const { id } = req.params;
  const proyecto = req.body;
  await Proyecto.update(proyecto, {
    where: {
      id
    }
  })
    .then(dataCount => {
      res.json({ updates: dataCount, proyecto });
    })
    .catch(err => {
      res.status(500).json({ error: "a ocurrido un error :c"});
    });
};
proyectoCtrl.deleteProyecto = async (req, res) => {
  const { id } = req.params;
  await Proyecto.update(
    {
      estado: false
    },
    {
      where: {
        id
      }
    }
  )
    .then(dataCount => {
      res.json({ updates: dataCount,id,estado:false });
    })
    .catch(err => {
      res.status(500).json({ error: "el parametro debe ser de tipo entero"});
    });
};
module.exports = proyectoCtrl;
