var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var User = require('../models/user');
var config = require('../_config');
var init = require('./init');

passport.use(new FacebookStrategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    console.log("============");
    console.log(profile);
    console.log("============");
    return done(null, profile);
  }
));
// serialize user into the session
init();

module.exports = passport;
