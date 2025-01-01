/* 
    Rutas de Eventos / Events
    host + /api/events
*/

const { Router } = require('express');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Todas tienen que pasar por la validación del middeware de JWT
// CREATE
router.post('/new', validarJWT, createEvent);

// READ
router.get('/', validarJWT, getEvents);

// UPDATE
router.put('/update/:id', validarJWT, updateEvent);

// DELTE
router.delete('/delete/:id', validarJWT, deleteEvent);

module.exports = router;