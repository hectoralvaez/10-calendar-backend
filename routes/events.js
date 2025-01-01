/* 
    Rutas de Eventos
    host + /api/events
*/

const { Router } = require('express');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Todas tienen que pasar por la validación del middeware de JWT
router.use(validarJWT);

// CREATE
router.post('/new', createEvent);

// READ
router.get('/', getEvents);

// UPDATE
router.put('/update/:id', updateEvent);

// DELTE
router.delete('/delete/:id', deleteEvent);

module.exports = router;