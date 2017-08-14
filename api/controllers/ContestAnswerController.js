module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    findAnswerForQuestion: function (req, res) {
        console.log("inside contest controller")
        if (req.body) {
            ContestAnswer.findAnswerForQuestion(req.body, res.callback);
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