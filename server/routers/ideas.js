const expres = require('express');
const ideaRouter = expres.Router();

const { IDEAS } = require("../constants");
const { response } = require("../utils");
const {
  getAllFromDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  addToDatabase,
  deleteFromDatabasebyId
} = require('../db');
const checkMillionDollarIdea = require("../checkMillionDollarIdea");

ideaRouter.param('id', (req, res, next, id) => {
  if (id) {
    if (!isNaN(+id)) {
      req.id = id;
  
      next();
    }
    res.status(404).send();
  } 
  next();
})

ideaRouter.get("/", (req, res, next) => {
  const ideas = getAllFromDatabase(IDEAS);

  ideas && res.send(ideas);
});

ideaRouter.post("/", checkMillionDollarIdea, (req, res, next) => {
  const newIdea = addToDatabase(IDEAS, req.body);

  response(newIdea, res, next, 201)
})

ideaRouter.get("/:id", (req, res, next) => {
  const idea = getFromDatabaseById(IDEAS, req.id);

  response(idea, res, next)
})

ideaRouter.put("/:id", checkMillionDollarIdea, (req, res, next) => {
  if (!isNaN(+req.id)) {
    const idea = updateInstanceInDatabase(IDEAS, req.body);
    response(idea, res, next);
    return;
  }
  res.status(404).send();
})

ideaRouter.delete("/:id", (req, res, next) => {
  const ideaDel = deleteFromDatabasebyId(IDEAS, `${req.id}`);

  if (ideaDel) {
    res.status(204).send()
  } else {
    res.status(404).send()
  }
})

module.exports = ideaRouter;