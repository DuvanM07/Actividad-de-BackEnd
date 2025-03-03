const EmpleadoModel = require( '../models/empleados.model');
const { dbInsertEmpleado, dbGetEmpleadoById, dbDeleteEmpleadeById, dbUpdateEmpleadoById } = require('../services/empleados.service');


async function createEmpleado( req, res) {
    const inputData = req.bodyM

    try {
        const data = await dbInsertEmpleado(inputData)
        res.json({
            ok: true,
            data
        })
    } catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Se ha generado una Excepcion al registrar el empleado'
        })
    }
}

async function getEmpleadoById( req, res) {
    const id = req.params.id;

    try {
        const data = await dbGetEmpleadoById( id );
        res.json({
            ok: true,
            data
        })
    } catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Se ha generado una Excepcion al obtener los datos'
        })
    }
}

async function deleteEmpleadoById( req, res) {
    const id = req.params.id;
    
    try {
        const data = await dbDeleteEmpleadeById( id );
        res.json({
            ok: true,
            data
        })
    } catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Se ha generado una excepcion al eliminar el empleado'
        })
        
    }
}

async function updateEmpleadoById( req, res) {
    const id = req.params.id;
    const inputData = req.body;
    
    try {
        const data = await dbUpdateEmpleadoById( id, inputData);
        res.json({
            ok: true,
            data
        })
    } catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Se ha generado una excepcion al eliminar el empleado'
        })
        
    }
}




module.exports = {createEmpleado, 
    getEmpleadoById, 
    deleteEmpleadoById, 
    updateEmpleadoById
}