'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

const saltRounds = 10;

/* GET users listing. */
router.get('/signup', (req, res, next) => {
  if (req.session.currentUser) {
    res.redirect('/');
    return;
  }
  const data = {
    signupError: req.flash('signup-error')
  };

  res.render('auth/signup', data);
});

router.post('/signup', (req, res, next) => {
  if (req.session.currentUser) {
    res.redirect('/');
    return;
  }
  if (!req.body.username || !req.body.password) {
    req.flash('signup-error', 'You need to provide a username and password');
    res.redirect('/auth/signup');
    return;
  }
  User.findOne({username: req.body.username})
    .then((user) => {
      if (user) {
        req.flash('signup-error', 'Username is already taken');
        return res.redirect('/auth/signup');
      }

      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(req.body.password, salt);
      // -----Add location and objects within for google maps-----
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
        instrument: req.body.instrument
      });

      newUser.save()
        .then(() => {
          req.session.currentUser = newUser;
          res.redirect('/');
        })
        .catch(next);
    })
    .catch(next);
});

router.get('/login', (req, res, next) => {
  if (req.session.currentUser) {
    res.redirect('/');
    return;
  }
  const data = {
    loginError: req.flash('login-error')
  };
  res.render('auth/login', data);
});

router.post('/login', (req, res, next) => {
  if (req.session.currentUser) {
    res.redirect('/');
    return;
  }
  if (!req.body.username || !req.body.password) {
    req.flash('login-error', 'Please provide a username and password');
    res.redirect('/auth/login');
    return;
  }
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        req.flash('login-error', 'Username or password are incorrect');
        res.redirect('/auth/login');
        return;
      }
      if (!bcrypt.compareSync(req.body.password, user.password)) {
        req.flash('login-error', 'Username or password are incorrect');
        res.redirect('/auth/login');
        return;
      }
      req.session.currentUser = user;
      res.redirect('/');
    })
    .catch(next);
});
router.post('/logout', (req, res, next) => {
  delete req.session.currentUser;
  res.redirect('/auth/login');
});
module.exports = router;
