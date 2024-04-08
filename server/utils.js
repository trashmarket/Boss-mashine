const response = (items, res, next, status = 200) => {
  if (items) {
    res.status(status).send(items);
  } else {
    const err = new Error('Not finded');
    err.status = 404;
    next(err);
  }
} 

module.exports = { response } 