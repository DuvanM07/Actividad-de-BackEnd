const express = require( 'express');
const createArea = require('../controllers/area.controller');


const router = express.Router();

router.post( '/', createArea);

router.get( '/', function(req, res) {
    res.json({
        ok: true,
        msg: 'Se obtuvieron los datos correctamente'
    })
});

router.delete( '/', function(req, res) {
    res.json({
        ok: true,
        msg: 'El area se elimino correctamente'
    })
});

router.patch( '/', function(req, res) {
    res.json({
        ok: true,
        msg: 'El area se actualizo correctamente'
    })
});

module.exports = router