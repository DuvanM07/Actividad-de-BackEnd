// const AreaModel = require( '../models/areas.model')

const AreaModel = require( '../models/areas.model')

async function dbInsertArea( newArea) {
   return await AreaModel.create( newArea);
}
async function dbGetAreaById( id ) {
   return await AreaModel.findById( id);
}
async function dbDeleteAreaById( id ) {
   return await AreaModel.findByIdDelete( id );
}
async function dbUpdateAreaById( id ) {
   return await AreaModel.findByIdUpdate( id );
}
module.exports = {dbInsertArea, dbDeleteAreaById, dbGetAreaById, dbUpdateAreaById}; 