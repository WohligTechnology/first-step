global["GoogleKey"] = "AIzaSyC0dbPUpeoH3SADDU0Lmi1ONd-qFdfeEy4";
global["GoogleclientId"] = "451010882805-h42ccn1jqsohkocmv2qmmklgmfk7vm9a.apps.googleusercontent.com";
global["GoogleclientSecret"] = "cwE3oa-ie9CoI-4pLxeVmd8J";

passport.use(new GoogleStrategy({
        clientId: GoogleclientId,
        clientSecret: GoogleclientSecret,
        callbackURL: global["env"].realHost + "/api/user/loginGoogle",
        accessType: "offline"
    },
    function (accessToken, refreshToken, profile, cb) {
        profile.googleAccessToken = accessToken;
        profile.googleRefreshToken = refreshToken;
        return cb(profile);
    }
));
