var express = require('express');
var router = express.Router();
var passport = require('../models/passport');

router.get('/facebook', passport.authenticate('facebook' , { scope: ['user_friends', 'email', 'manage_pages'] }));

router.get('/facebook/callback',
  passport.authenticate('facebook', { session: false, failureRedirect: "/" }),
  function(req, res) {
    console.log("fuck yesah");
    console.log(req.user);
    console.log("this is req.use", req.user);
    res.redirect('/authorization?token=' + req.user.token + "&name=" + req.user.name);
  }
);

module.exports = router;
