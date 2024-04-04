const express = require("express");
const apiRouter = express.Router();
const ideaRouter = require("./routers/ideas");
const minionRouter = require("./routers/minions");
const meetingRouter = require("./routers/meetings");

apiRouter.use("/minions", minionRouter);

apiRouter.use("/meetings", meetingRouter);

apiRouter.use("/ideas", ideaRouter);

module.exports = apiRouter;
