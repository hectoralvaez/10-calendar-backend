const { response } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = response) => {

    const { name, email, password } = req.body;

    // manejo de errores
    const errors = validationResult( req );
    if( !errors.isEmpty() ){
        // es importante retornar el error para que no se ejecute el resto del código, ya que si no retornará los dos status 201 y 400
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    res.status(201).json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password
    });
}

const loginUsuario = (req, res = response) => {
    
    const { email, password } = req.body;

    // manejo de errores
    const errors = validationResult( req );
    if( !errors.isEmpty() ){
        // es importante retornar el error para que no se ejecute el resto del código, ya que si no retornará los dos status 201 y 400
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    res.status(201).json({
        ok: true,
        msg: 'login',
        email,
        password
    });
}

const revalidarToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
}


module.exports = {
    crearUsuario, 
    loginUsuario, 
    revalidarToken
}