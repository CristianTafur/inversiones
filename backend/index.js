//dependecias necesarias

const express = require('express'); 
const cors = require('cors'); 
const app = express(); 

//dependencias de desarrollo

const morgan=require('morgan'); 
 
// configuraciones

app.set('port', process.env.PORT || 3000); 
app.use(cors({origin: 'http://localhost:4200'},{origin:'http://localhost:4200/add-proyecto'},{origin:'http://localhost:4200/list-proyecto'},{origin:'http://localhost:4200/edit-proyecto'})); 
app.use(express.json()); 

app.use(morgan('dev'));

// Rutas

app.use('/inversiones', require('./routes/inversiones.routes'));

//inicar el servidor 

app.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}/inversiones/proyecto`);
});