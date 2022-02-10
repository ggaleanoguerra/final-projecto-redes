const mysql = require('mysql');
const conexion = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'cocuelo_db'  
});
conexion.connect((error)=>{
    if (error) {
      console.error('El error de conexión es: ' + error);
      return;
    }
    console.log('IE El Cocuelo conectada a base de datos MYSQL');
  });
module.exports = conexion;