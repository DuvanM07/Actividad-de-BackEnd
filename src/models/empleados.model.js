const mongoose = require( 'mongoose' );

const empleadoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    edad: {
        type: String,
        trim: true
    },
    cargo: {
        type: String,
        trim: true
    },
    areaId: {
        type: String,
        trim: true
    }
},{
    timestamps: true,
    versionKey: false
});

const EmpleadoModel = mongoose.model(
    'Empleados',
    empleadoSchema
);

module.exports = EmpleadoModel;