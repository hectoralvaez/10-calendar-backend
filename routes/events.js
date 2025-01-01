/* 
    Rutas de Eventos
    host + /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

const router = Router();

// Todas tienen que pasar por la validación del middeware de JWT
router.use(validarJWT);

// CREATE
router.post('/new',
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom( isDate),
        check('end', 'La fecha de finalización es obligatoria').custom( isDate),
        validarCampos,
    ],
    createEvent);

// READ
router.get('/', getEvents);

// UPDATE
router.put('/update/:id', updateEvent);

// DELTE
router.delete('/delete/:id', deleteEvent);

module.exports = router;