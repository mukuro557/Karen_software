const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const key = require("./key");
passport.use(
    new GoogleStrategy(
        {   clientID: key.google.client,
            clientSecret: key.google.secret,
            callbackURL: "/auth/google/redirect"},
        (accessToken, refreshToken, profile, done) => {
            console.log(profile.displayName);
            console.log(profile.emails[0].value);
            console.log(profile.photos[0].value);
        }
        )
);

