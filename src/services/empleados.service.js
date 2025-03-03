
const EmpleadoModel = require( '../models/empleados.model' )

async function dbInsertEmpleado( newEmpleado ) {
    return await EmpleadoModel.create( newEmpleado);
}
async function dbGetEmpleadoById( id ) {
    return await EmpleadoModel.findById( id);
}
async function dbDeleteEmpleadeById( id ) {
    return await EmpleadoModel.findByIdAndDelete( id);
}
async function dbUpdateEmpleadoById( id ) {
    return await EmpleadoModel.findByIdAndUpdate( id);
}

module.exports = {dbInsertEmpleado, dbGetEmpleadoById, dbDeleteEmpleadeById, dbUpdateEmpleadoById}