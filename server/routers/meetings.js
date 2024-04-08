const expres = require('express');
const meetingRouter = expres.Router();
const { MEETINGS } = require("../constants");
const { response } = require("../utils");
const {
  getAllFromDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  addToDatabase,
  createMeeting,
  deleteAllFromDatabase
} = require('../db');

meetingRouter.get("/", (req, res, next) => {
  const meetings = getAllFromDatabase(MEETINGS);

  // meetings && res.send(meetings);
  response(meetings, res, next);

});

meetingRouter.post("/", (req, res, next) => {
  const meetingItem = createMeeting();
  const meeting = addToDatabase(MEETINGS, meetingItem)

  response(meeting, res, next, 201);
});

meetingRouter.delete("/", (req, res, next) => {
  deleteAllFromDatabase(MEETINGS) && res.status(204).send()
})

module.exports = meetingRouter