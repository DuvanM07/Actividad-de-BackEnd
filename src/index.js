const express = require( 'express')
const dbConection = require( './config/mongo.config' )

const app = express();

dbConection();

app.use( express.json() );

// app.use( './api/empleados', require ( 'Falta Ruta') );

app.use( '/api/areas', require( './routes/areas.routes'));

// app.use( '/api/empleados', require( './routes/'))

app.listen( 3000, function() {
    console.log( 'El servidor esta escuchando el port 3000')
})
// const dbConection = requiere( '.')
// console.log ("hola")