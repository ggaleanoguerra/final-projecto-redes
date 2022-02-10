const express = require('express');
const app = express();
app.set('view engine','ejs');
app.set('port', 3000);
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//Rutas
app.use('/', require('./router'));



//Inicio del servidor
app.listen(app.get('port'), () =>{
    console.log(`Servidor de la IE El Cocuelo, corriendo en el puerto ${app.get('port')}`)
})