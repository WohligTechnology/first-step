var schema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        index: true
    },
    number: {
        type: String,
        index: true
    },
    answer: {
        type: String,
        index: true
    },
    question: {
        type: String,
        index: true
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Contest', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    saveContest: function (data, callback) {
        ContestAnswer.find().sort({
            createdAt: -1
        }).exec(function (err, contestQuestions) {
            if (!_.isEmpty(contestQuestions)) {
                console.log("last question: ", contestQuestions[0]);
                Contest.findOne({
                    createdAt: {
                        $gte: contestQuestions[0].createdAt
                    },
                    email: data.email
                }).exec(function (err, contest) {
                    if (!_.isEmpty(contest)) {
                        console.log("user already exists for the contest");
                        callback("userExists", null);
                    } else {
                        console.log("saving user: ", data);
                        Contest.saveData(data, function (err, data) {
                            callback(err, data);
                        });
                    }
                });
            } else {
                callback("noQuestionsFound", null);
            }
        });
    },

    getAllUser: function (data, callback) {
        console.log("inside getAll User", data);
        Contest.find({
            question: data.question
        }).skip((data.page - 1) * Config.maxRow).limit(Config.maxRow).exec(function (err, question) {

            var result = {};
            if (!_.isEmpty(question)) {
                result.user = question;
                Contest.count({
                    question: data.question
                }).exec(function (err, count) {
                    console.log("count: ", err, count);
                    if (count) {
                        result.total = count;
                        console.log("count1: ", count);
                        result.maxRow = Config.maxRow;
                    } else {
                        result.total = answers.length;
                        result.maxRow = Config.maxRow;
                    }
                    console.log("result: ", result);
                    callback(null, result);
                });
            } else {
                callback("noDataFound", null);
            }
        });
    },
    getAllQuestion: function (data, callback) {
        console.log("inside getquestion api", data)
        Contest.find({
            question: {
                $exists: true,
                $ne: null
            }
        }).distinct('question').exec(function (err, found) {
            // console.log("Found: ", found);
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                // console.log("found in contest", found);
                callback(null, found);
            }

        });
    },

    getDateviseUser: function (data, callback) {
        var find = {
            createdAt: {
                $gte: new Date(data.date).setHours(00, 00, 00, 000),
                $lte: new Date(data.date).setHours(23, 59, 59, 999)
            }
        };
        console.log("********", data);
        Contest.find(find).skip((data.page - 1) * Config.maxRow).limit(Config.maxRow).exec(function (err, answers) {
            console.log("Answers: ", err, answers);
            var result = {};
            if (!_.isEmpty(answers)) {
                result.results = answers;
                Contest.count(find).exec(function (err, count) {
                    console.log("count: ", err, count);
                    if (count) {
                        result.total = count;
                        console.log("count1: ", count);
                        result.maxRow = Config.maxRow;
                    } else {
                        result.total = answers.length;
                        result.maxRow = Config.maxRow;
                    }
                    console.log("result: ", result);
                    callback(null, result);
                });
            } else {
                callback("noDataFound", null);
            }
        });
    },

    saveSelectedAnswer: function (data, callback) {
        Contest.update({
            _id: mongoose.Types.ObjectId(data._id)
        }, {
            $set: {
                answer: data.answer,
                question: data.contest[0].question
            }
        }).exec(function (err, found) {
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback("noDataound", null);
            } else {
                callback(null, found);
            }

        });
    },

    getRightAnswers: function (data, callback) {
        console.log("data inside getRightAnswer", data);
        async.waterfall([
            function getAnswerForQuestion(cbWaterfall1) {
                var input = {};
                input = data.question;
                console.log("*********input is******", input)
                ContestAnswer.findAnswerForQuestion(input, cbWaterfall1);
                // cbWaterfall1(null, rightAnswer);
            },
            function getRightUsers(rightAnswer, cbWaterfall2) {
                console.log("in getRightUsers: ", rightAnswer);
                var find = {
                    answer: rightAnswer[0].answer,
                    question: {
                        $exists: true,
                        $ne: null
                    }
                };

                if (data.date) {
                    find.createdAt = {
                        $gte: new Date(data.date).setHours(00, 00, 00, 000),
                        $lte: new Date(data.date).setHours(23, 59, 59, 999)
                    };
                }

                if (!data.page) {
                    data.page = 1;
                }

                console.log("Find: ", find);

                Contest.find(find).sort({
                    'createdAt': -1
                }).skip((data.page - 1) * Config.maxRow).limit(Config.maxRow).exec(function (err, answers) {
                    console.log("Answers: ", err, answers);
                    var result = {};
                    if (!_.isEmpty(answers)) {
                        result.answers = answers;
                        Contest.count(find).exec(function (err, count) {
                            console.log("count: ", err, count);
                            if (count) {
                                result.total = count;
                                console.log("count1: ", count);
                                result.maxRow = Config.maxRow;
                            } else {
                                result.total = answers.length;
                                result.maxRow = Config.maxRow;
                            }
                            console.log("result: ", result);
                            cbWaterfall2(null, result);
                        });
                    } else {
                        cbWaterfall2("noDataFound", null);
                    }
                });
            }
        ], function (err, data) {
            callback(err, data);
        })

    }

};
module.exports = _.assign(module.exports, exports, model);