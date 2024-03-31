const expres = require('express');
const minionRouter = expres.Router();
const { MINIONS, IDEAS, MEETINGS, WORK } = require("../constants");
const { response } = require("../utils");
const {
  getAllFromDatabase,
  getFromDatabaseById,
  getArrayById,
  updateInstanceInDatabase,
  addToDatabase,
  deleteFromDatabasebyId
} = require('../db');

minionRouter.param("id", (req, res, next, id) => {
  req.id = id;
  next();
});

minionRouter.param("idWork", (req, res, next, id) => {
  req.idWork = id;
  next();
})

minionRouter.get('/', (req, res, next) => {
  const minions = getAllFromDatabase(MINIONS);

  response(minions, res, next);
});

minionRouter.get("/:id", (req, res, next) => {
  const minion = getFromDatabaseById(MINIONS, req.id);

  response(minion, res, next);
});

minionRouter.delete("/:id", (req, res, next) => {
  if (deleteFromDatabasebyId(MINIONS, req.id)) {
    res.send()
  } else {
    res.status(404).send();
  }
})

minionRouter.post('/', (req, res, next) => {
  const minion = addToDatabase(MINIONS, req.body);

  response(minion, res, next);
})

minionRouter.put("/:id", (req, res, next) => {
  const minionUdated = updateInstanceInDatabase(MINIONS, req.body);
  response(minionUdated, res, next);
});

minionRouter.get("/:id/work", (req, res, next) => {
  const minionWorks = getArrayById(WORK, req.id, "minionId");

  response(minionWorks, res, next);
});

minionRouter.post("/:id/work", (req, res, next) => {
  const work = addToDatabase(WORK, req.body);

  response(work, res, next);
})

minionRouter.put("/:id/work/:idWork", (req, res, next) => {
  const work = updateInstanceInDatabase(WORK, req.body);

  response(work, res, next);
})

minionRouter.delete("/:id/work/:idWork", (req, res, next) => {
  const work = deleteFromDatabasebyId(WORK, req.id);

  if (work) {
    res.status(200).send()
  } else {
    res.status(404).send();
  }

})

module.exports = minionRouter