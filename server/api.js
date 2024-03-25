const express = require('express');
const apiRouter = express.Router();
const { getAllFromDatabase } = require('./db');
const { MINIONS, IDEAS, MEETINGS } = require('./constants');

apiRouter.get('/minions', (req, res, next) => {
    const minions = getAllFromDatabase(MINIONS);
    
    minions && res.send(minions)
})

apiRouter.get('/ideas', (req, res, next) => {
    const ideas = getAllFromDatabase(IDEAS);

    ideas && res.send(ideas);
})

apiRouter.get('/meetings', (req, res, next) => {
    const meetings = getAllFromDatabase(MEETINGS);

    meetings && res.send(meetings);
})

apiRouter.post('/meetings', (req, res, next) => {
    const meetings = getAllFromDatabase(MEETINGS);

    meetings && res.send(meetings);
})

module.exports = apiRouter;
