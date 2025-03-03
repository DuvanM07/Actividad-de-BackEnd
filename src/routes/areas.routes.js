// const express = require( 'express');
const express = require( 'express');
const { createArea, getAreaById, deleteAreaById, updateAreaById } = require('../controllers/area.controller');

const router = express.Router;

router.post( '/', createArea);

router.get( '/:id', getAreaById );

router.delete( '/:id', deleteAreaById);

router.patch( '/:id', updateAreaById);

module.exports = router




















// router.get( '/', function(req, res) {
//     res.json({
//         ok: true,
//         msg: 'Se obtuvieron los datos correctamente'
//     })
// });

// router.delete( '/', function(req, res) {
//     res.json({
//         ok: true,
//         msg: 'El area se elimino correctamente'
//     })
// });

// router.patch( '/', function(req, res) {
//     res.json({
//         ok: true,
//         msg: 'El area se actualizo correctamente'
//     })
// });