const express = require("express");
const apiRouter = express.Router();
const { getAllFromDatabase, getFromDatabaseById } = require("./db");
const { MINIONS, IDEAS, MEETINGS, WORK } = require("./constants");
const { response } = require("./utils");
//minionId
apiRouter.param("id", (req, res, next, id) => {
  req.id = id;
  next();
});

apiRouter.get("/minions", (req, res, next) => {
  const minions = getAllFromDatabase(MINIONS);

  response(minions, res, next);
});

apiRouter.get("/minions/:id", (req, res, next) => {
  const minion = getFromDatabaseById(MINIONS, req.id);

  response(minion, res, next);
});

apiRouter.get("/minions/:id/work", () => {
  const minionWorks = getFromDatabaseById(MINIONS, req.id);

})

apiRouter.get("/meetings", (req, res, next) => {
  const meetings = getAllFromDatabase(MEETINGS);

  meetings && res.send(meetings);
});

apiRouter.post("/meetings", (req, res, next) => {
  const meetings = getAllFromDatabase(MEETINGS);

  meetings && res.send(meetings);
});

apiRouter.get("/ideas", (req, res, next) => {
  const ideas = getAllFromDatabase(IDEAS);

  ideas && res.send(ideas);
});
module.exports = apiRouter;
