
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
const getEvents = async(req, res = response) => {

    const events = await Event.find().populate('user', 'name');

    res.json({
        ok: true,
        msg: 'getEvents',
        events
    });
}

// UPDATE
const updateEvent = async(req, res = response) => {

    const eventId = req.params.id;
    const uid = req.uid;

    try {
        const event = await Event.findById( eventId );

        if( !event ) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        }
                
        if( event.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            });
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        const eventUpdated = await Event.findByIdAndUpdate(
            eventId,
            newEvent,
            { new: true }
        );

        res.json({
            ok: true,
            msg: 'updateEvent',
            event: eventUpdated
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

// DELTE
const deleteEvent = async(req, res = response) => {
    
    const eventId = req.params.id;
    const uid = req.uid;

    try {
        const event = await Event.findById( eventId );

        if( !event ) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        }
                
        if( event.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            });
        }

        const newEvent = {
            ...req.body,
            user: uid
        }


        await Event.findByIdAndDelete(eventId);

        res.json({
            ok: true,
            msg: 'deleteEvent',
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

module.exports = {
    createEvent,
    getEvents,
    updateEvent,
    deleteEvent
}