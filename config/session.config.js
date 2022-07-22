const { User } = require('../models');
const expressSession = require('express-session');
const MongoStore = require("connect-mongo")
const mongoose = require('mongoose')

const session = expressSession({
  secret: process.env.SESSION_SECRET || 'super secret',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: mongoose.connection._connectionString,
    ttl: 24 * 3660 *1000,
  }),
  cookie: {
    secure: process.env.SESSION_SECURE === 'true',
    //maxAge: 100 * 60 * 60 * 24 * 7, //Tiempo de duracion de la cookie, no obligatorio, ESTA SERIA UNA SEMANA
    httpOnly: true
  }
});

//Se encarga de leer la cookie de sesion
const loadUser = (req, res, next) => {
  const { userId } = req.session //cojo el userid de la cookie de sesion
  if (userId) {
    User.findById(userId)
      .then(user => {
        req.user = user
        res.locals.currentUser = user //sEA CUAL SEA LA VISTA SE PUEDE PINTAR LOS DATOS DEL usuario
        next()
      })
      .catch(error => next(error))
  } else {
    next()
  }
} 

module.exports = {
  session,
  loadUser
}