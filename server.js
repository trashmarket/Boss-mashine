const express = require('express');
const app = express();
const cors = require('cors');
const errorhandler = require('errorhandler');

module.exports = app;

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html
app.use(cors());
// Add middware for parsing request bodies here:
app.use(express.json())


// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');

app.use('/api', apiRouter);

// This conditional is here for testing purposes:
if (!module.parent) { 
  // Add your code to start the server listening at PORT below:

}

app.use(errorNotification);

function errorNotification (err, req, res, next) {
  res.status(err.status).send(err.message);
}

app.listen(PORT, () => {
  console.log('server start at http://localhost:4001')
})