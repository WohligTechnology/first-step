module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    saveContest: function (req, res) {
        console.log("inside contest controller")
        if (req.body) {
            Contest.saveContest(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getAllUser: function (req, res) {
        console.log("inside contest controller")
        if (req.body) {
            Contest.getAllUser(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getAllQuestion: function (req, res) {
        if (req.body) {
            Contest.getAllQuestion(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    saveSelectedAnswer: function (req, res) {
        if (req.body) {
            Contest.saveSelectedAnswer(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getDateviseUser: function (req, res) {
        if (req.body) {
            Contest.getDateviseUser(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getRightAnswers: function (req, res) {
        if (req.body) {
            Contest.getRightAnswers(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            });
        }
    }
};
module.exports = _.assign(module.exports, controller);