module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {


    saveValidUser: function (req, res) {
        if (req.body) {
            DigitalUser.saveValidUser(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getDigitalUserFromId: function (req, res) {
        // console.log("api controller getDigitalUserFromId",req.body);
        if (req.body) {
            DigitalUser.getDigitalUserFromId(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getUser: function (req, res) {
        if (req.body) {
            DigitalUser.getUser(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    saveMailData: function (req, res) {
        if (req.body) {
            DigitalUser.saveMailData(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: "User Not logged in"
            });
        }

    }
};
module.exports = _.assign(module.exports, controller);