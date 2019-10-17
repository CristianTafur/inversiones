const Sequelize = require('sequelize');

const sequelize= require('../database/database'); 

const Proyecto= sequelize.define('proyecto',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    nombre:{
        type:Sequelize.TEXT
    },
    descripcion:{
        type:Sequelize.TEXT
    },
    monto:{
        type:Sequelize.INTEGER
    },
    fecha:{
        type:Sequelize.DATE
    },
    estado:{
        type:Sequelize.BOOLEAN
    }

},{
    timestamp:false
});
module.exports=Proyecto; 