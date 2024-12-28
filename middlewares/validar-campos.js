const { response } = require('express');
const { validationResult } = require('express-validator');

const validarCampos = (req, res = response, next) => {
    // manejo de errores
    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
        // es importante retornar el error para que no se ejecute el resto del código, ya que si no retornará los dos status 201 y 400
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }
    next();
}

module.exports = {
    validarCampos
}