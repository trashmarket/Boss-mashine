const checkMillionDollarIdea = (req, res, next) => {
  const body = req.body;

  if (
    body.numWeeks &&
    body.weeklyRevenue &&
    !isNaN(+body.numWeeks) &&
    !isNaN(+body.weeklyRevenue)
  ) {
    const multiteple = Number(body.numWeeks) * Number(body.weeklyRevenue);

    if (multiteple >= 10000) {
      next();
      return;
    }
  }

  res.status(400).send();
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
