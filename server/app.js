const express = require('express');
const app = express();
const port = 3000;
//const { conectar, cerrar } = require('./config/conexion');
const conexion = require("./config/conexion");

app.get('/',(req, res) => {
    res.send('Hola');

})

app.listen(port,() => {
    console.log(`Servidor inicializado en el puerto ${port}`);
    console.log("Testing" + conexion.connection());
});
