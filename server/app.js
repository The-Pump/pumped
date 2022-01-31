// Using express to create app functionality and routing

const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const { pumpedRouter } = require('./api/routes');
const { authRouter } = require('./api/authRouter');

const app = express();
// use api/router as the base route
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', authRouter);

app.use('/api/router', pumpedRouter);

module.exports = app;
