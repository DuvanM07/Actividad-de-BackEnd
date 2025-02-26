const { model } = require('mongoose');
const AreaModel = require( '../models/areas.model')

async function dbInsertArea( newArea) {
   return await AreaModel.create( newArea);
}

module.exports = dbInsertArea; 