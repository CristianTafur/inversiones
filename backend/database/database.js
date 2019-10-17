const Sequelize =require('sequelize');

const sequelize =new Sequelize('inversiones','postgres','password',{
    host:'localhost',
    dialect:'postgres',
    "logging": false,
    define: {
        // Table names won't be pluralized.
        freezeTableName: true,
        // All tables won't have "createdAt" and "updatedAt" Auto fields.
        timestamps: false
    },
    pool:{
        max:5,
        min:0,
        require:30000,
        idle:10000 
    }
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
   //
    module.exports=sequelize;
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
 
module.exports=sequelize;