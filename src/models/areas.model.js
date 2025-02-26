
const mongoose = require( 'mongoose' );

const areaSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [ true, 'El nombre del producto es obligatorio' ]
    },
    description: {
        type: String,
        trim: true
    },
},{
    timestamps: true,
    versionKey: false
});

const AreaModel = mongoose.model(
    'Areas',
    areaSchema
);

module.exports = AreaModel;