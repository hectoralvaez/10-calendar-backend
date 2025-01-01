
const { response } = require('express');

// CREATE
const createEvent = (req, res = response) => {
    console.log(req.body);
    
    res.json({
        ok: true,
        msg: 'createEvent'
    });
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