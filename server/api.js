const express = require("express");
const apiRouter = express.Router();
const {
  getAllFromDatabase,
  getFromDatabaseById,
  getArrayById,
  updateInstanceInDatabase,
  addToDatabase,
  deleteFromDatabasebyId
} = require("./db");
const { MINIONS, IDEAS, MEETINGS, WORK } = require("./constants");
const { response } = require("./utils");

apiRouter.param("id", (req, res, next, id) => {
  req.id = id;
  next();
});

apiRouter.param("idWork", (req, res, next, id) => {
  req.idWork = id;
  next();
})

apiRouter.get("/minions", (req, res, next) => {
  const minions = getAllFromDatabase(MINIONS);

  response(minions, res, next);
});

apiRouter.get("/minions/:id", (req, res, next) => {
  const minion = getFromDatabaseById(MINIONS, req.id);

  response(minion, res, next);
});

apiRouter.delete("/minions/:id", (req, res, next) => {
  if (deleteFromDatabasebyId(MINIONS, req.id)) {
    res.send()
  } else {
    res.status(404).send();
  }
})

apiRouter.post("/minions", (req, res, next) => {
  const minion = addToDatabase(MINIONS, req.body);

  response(minion, res, next);
})

apiRouter.put("/minions/:id", (req, res, next) => {
  const minionUdated = updateInstanceInDatabase(MINIONS, req.body);

  response(minionUdated, res, next);
});

apiRouter.get("/minions/:id/work", (req, res, next) => {
  const minionWorks = getArrayById(WORK, req.id, "minionId");

  response(minionWorks, res, next);
});

apiRouter.post("/minions/:id/work", (req, res, next) => {
  const work = addToDatabase(WORK, req.body);

  response(work, res, next);
})

apiRouter.put("/minions/:id/work/:idWork", (req, res, next) => {
  const work = updateInstanceInDatabase(WORK, req.body);

  response(work, res, next);
})

apiRouter.delete("/minions/:id/work/:idWork", (req, res, next) => {
  const work = deleteFromDatabasebyId(WORK, req.id);

  if (work) {
    res.status(200).send()
  } else {
    res.status(404).send();
  }

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
