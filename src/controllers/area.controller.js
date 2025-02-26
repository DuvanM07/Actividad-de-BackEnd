const AreaModel = require( '../models/areas.model' );
const dbInsertArea = require('../services/areas.service');

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

module.exports = createArea;