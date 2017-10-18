var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var FACEBOOK_APP_ID = '1965720260353467',
    FACEBOOK_APP_SECRET = '169dd5efd1d5885816cc861b4e9804bf';

//passport configuration here
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields : ['id', 'displayName', 'photos', 'email', 'first_name' ]
  },
  function(accessToken, refreshToken, profile, done){
    console.log("This is profile: " , profile);
    return done(null, profile)
  }));

module.exports = passport;
