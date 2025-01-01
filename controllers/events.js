
const { response } = require('express');
const Event = require('../models/Event');

// CREATE
const createEvent = async(req, res = response) => {

    const event = new Event( req.body );
    
    try {
        event.user = req.uid;
        const eventSaved = await event.save();
        res.status(201).json({
            ok: true,
            msg: 'createEvent',
            event: eventSaved,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

// READ
const getEvents = (req, res = response) => {
    
    res.json({
        ok: true,
        msg: 'getEvents'
    });
}

// UPDATE
const updateEvent = (req, res = response) => {
    
    res.json({
        ok: true,
        msg: 'updateEvent'
    });
}

// DELTE
const deleteEvent = (req, res = response) => {
    
    res.json({
        ok: true,
        msg: 'deleteEvent'
    });
}

module.exports = {
    createEvent,
    getEvents,
    updateEvent,
    deleteEvent
}