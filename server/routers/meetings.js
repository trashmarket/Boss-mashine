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

  meetings && res.send(meetings);
});

meetingRouter.post("/", (req, res, next) => {
  const meetingItem = createMeeting();
  const meeting = addToDatabase(MEETINGS, meetingItem)

  meeting && res.send(meeting);
});

meetingRouter.delete("/", (req, res, next) => {
  deleteAllFromDatabase(MEETINGS) && res.status(203).send()
})

module.exports = meetingRouter