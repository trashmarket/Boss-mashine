const express = require("express");
const apiRouter = express.Router();
const ideaRouter = require("./routers/ideas");
const minionRouter = require("./routers/minions");
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

apiRouter.use("/minions", minionRouter);

apiRouter.get("/meetings", (req, res, next) => {
  const meetings = getAllFromDatabase(MEETINGS);

  meetings && res.send(meetings);
});

apiRouter.post("/meetings", (req, res, next) => {
  const meetings = getAllFromDatabase(MEETINGS);

  meetings && res.send(meetings);
});

apiRouter.use("/ideas", ideaRouter);

module.exports = apiRouter;
