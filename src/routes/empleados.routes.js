const express = require( 'express' );
const { createEmpleado, getEmpleadoById, deleteEmpleadoById, updateEmpleadoById } = require('../controllers/empleado.controller');

const router = express.Router()

router.post( '/', createEmpleado);

router.get( '/:id', getEmpleadoById);

router.delete( '/:id', deleteEmpleadoById);

router.patch( '/:id', updateEmpleadoById);

module.exports = router