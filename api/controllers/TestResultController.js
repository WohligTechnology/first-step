module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    validUser: function (req, res) {
        if (req.body) {
            TestResult.validUser(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
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
    migrateTestResult: function (req, res) {
        // this function update contest with questionId if matched contest.question=contestquestion.question and add questionId in contest with contestquestion._id for mapping, if not matched condition insert default id in questionId as "59d6336b466418777a0a3d03"

        console.log("inside contest controller migrateTestResult")
        if (req.body) {
            TestResult.migrateTestResult(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    }
};
module.exports = _.assign(module.exports, controller);