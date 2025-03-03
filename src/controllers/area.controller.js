const AreaModel = require( '../models/areas.model' );
const {dbDeleteAreaById, dbUpdateAreaById, dbGetAreaById, dbInsertArea} = require( '../services/areas.service' )


async function createArea( req, res ) {
    const inputData = req.body;
    
    try {
        const data = await dbInsertArea(inputData);
        res.json({
            ok: true,
            data: data
        }
        )    
    } catch (error) {
        console.error( error );
        return res.json({
            ok: false,
            msg: 'Se ha generado una excepcion'
        });
    }
    
}

async function getAreaById ( req, res) {
    const id = req.params.id;

    try {
        const data = await dbGetAreaById( id );

        res.json({
            ok: true,
            data
        });
    }
    catch ( error ) {
        console.error( error );
        res.json({
            ok:false,
            msg: 'Ha ocurrido una excepcion al obtener los datos por ID'
        })
    }
}
async function deleteAreaById( req, res ) {
    const id = req.params.id;

    try {
        const data = await dbDeleteAreaById(id);
        res.json({
            ok: true,
            data
        })
    }
    catch{
        console.error( error );
        
        res.json({
            ok: false,
            msg: "Ha ocurrido una excepcion al eliminar el area"
        })
    }
    
}

async function updateAreaById( req, res ) {
    const id = req.params.id;
    const inputData = req.body;

    try {
        const data = await dbUpdateAreaById( id, inputData)
        res.json({
            ok: true,
            data
        })
    }
    catch ( error ) {
        console.error(error);
        
        res.json({
            ok:false,
            msg: "Ha ocurrido una excepcion al actualizar el area"
        })
    }    
}
module.exports = {createArea, 
    getAreaById, 
    deleteAreaById, 
    updateAreaById
}