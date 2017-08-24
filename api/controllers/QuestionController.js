module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    getCorrectAnswer: function (req, res) {
        if (req.body) {
            Question.getCorrectAnswer(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getLastAddedDigitalCourse: function (req, res) {
        if (req.body) {
            Question.getLastAddedDigitalCourse(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getAllDigitalCourseQuestion: function (req, res) {
        if (req.body) {
            Question.getAllDigitalCourseQuestion(req.body, res.callback);
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