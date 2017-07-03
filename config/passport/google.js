global["GoogleKey"] = "AIzaSyBxB_DBCMtQwonw0r5a9an1b2nMg_T2jG0";
global["GoogleclientId"] = "451010882805-pie8h5cnsue0p1qooibueomvcpj8nu34.apps.googleusercontent.com";
global["GoogleclientSecret"] = "0pWugpSEGX0DnR822CR6UvwN";

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
