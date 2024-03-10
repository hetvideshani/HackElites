const mongoose = require('mongoose');
const express = require('express');
const Event = require('../models/eventSchema');
const Admin = require('../models/adminSchema');
const Competition = require('../models/competitionSchema');
const Participants = require('../models/participantSchema');

const { adminLogin, getAllAdmin } = require('../controllers/adminController');
const { createEvent, getOneEvent, getAllEvent, deleteEvent, updateEvent } = require('../controllers/eventController');
const { createComp, getOneComp, getAllComp, deleteComp, updateComp } = require('../controllers/competitionController');
const { createPart, getOnePart, getAllPart, deletePart, updatePart } = require('../controllers/participantController');

const route = express.Router();

route.get('/getAllAdmin', async (req, res) => {
    getAllAdmin(req, res);
})
route.post('/adminLogin', async (req, res) => {
    adminLogin(req, res);
})



route.post('/createEvent', async (req, res) => {
    createEvent(req, res)
})

route.get('/getAllEvent', async (req, res) => {
    getAllEvent(req, res)
})

route.get('/getOneEvent/:_id', async (req, res) => {
    getOneEvent(req, res)
})

route.delete('/deleteEvent/:_id', async (req, res) => {
    deleteEvent(req, res);
})

route.patch('/updateEvent/:_id', async (req, res) => {
    updateEvent(req, res);
})



route.post('/createComp', async (req, res) => {
    createComp(req, res);
})

route.get('/getAllComp', async (req, res) => {
    getAllComp(req, res)
})

route.get('/getOneComp/:_id', async (req, res) => {
    getOneComp(req, res)
})

route.patch('/updateComp/:_id', async (req, res) => {
    updateComp(req, res);
})

route.delete('/deleteComp/:_id', async (req, res) => {
    deleteComp(req, res);
})



route.get('/getAllPart', async (req, res) => {
    getAllPart(req, res);
})

route.post('/createPart', async (req, res) => {
    createPart(req, res);
})

route.delete('/deletePart/:_id', async (req, res) => {
    deletePart(req, res);
})


module.exports = route;