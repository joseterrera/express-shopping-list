const express = require('express')
const app = express()
const itemsRoutes = require('./routes/items')
const ExpressError = require('./expressError')
const morgan = require("morgan")


//this is a middleware to recognize the incoming request object as a json object
app.use(express.json())
app.use(morgan('dev'))
app.use('/items', itemsRoutes)

/** 404 handler */
app.use(function(req, res, next) {
  return new ExpressError("not Found", 404)
});


/** general error handler */

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

module.exports = app


