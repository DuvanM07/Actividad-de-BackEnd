const mongoose = require( 'mongoose' )

async function dbConection() {

    try {
        await mongoose.connect( 'mongodb://localhost:27017/db-actividad');
        console.log( 'Base de datos inicializada correctamente' );
    } 
    catch (error) {
        console.error( error );
        console.log( 'Ha ocurrido un error en la conexion de la BD')
    }

}

module.exports = dbConection; 