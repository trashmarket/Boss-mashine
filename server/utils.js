const response = (items, res, next) => {
  if (items) {
    res.send(items);
  } else {
    const err = new Error('Not finded');
    err.status = 404;
    next(err);
  }
} 

module.exports = { response } 