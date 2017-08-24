module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    saveDigitalUser: function (req, res) {
        if (req.body) {
            TestResult.saveDigitalUser(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getRightUser: function (req, res) {
        if (req.body) {
            TestResult.getRightUser(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
};
module.exports = _.assign(module.exports, controller);