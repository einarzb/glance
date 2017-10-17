var express = require('express');
var router = express.Router();
var passport = require('../models/passport');

router.get('/facebook', passport.authenticate('facebook' , { scope: ['user_friends', 'email', 'manage_pages'] }));

router.get('/facebook/callback',
  passport.authenticate('facebook', { session: false, failureRedirect: "/" }),
  function(req, res) {
    console.log('*************************************');
    console.log(req.user.photos[0].value);
    console.log('*************************************');
    res.redirect('/authorization?id=' + req.user.id + "&name=" + req.user.displayName);
  }
);

module.exports = router;
