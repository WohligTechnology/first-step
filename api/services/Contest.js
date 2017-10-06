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
    },
    month: {
        type: String,
        index: true
    },
    week: {
        type: String,
        index: true
    },
    questionId: {
        type: Schema.Types.ObjectId,
        ref: 'ContestQuestion'
    }
});

schema.plugin(deepPopulate, {
    Populate: {
        'questionId': {
            select: '_id name'
        }
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Contest', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "questionId", "questionId"));
var model = {

    saveContestByAvi: function (data, callback) {
        async.waterfall([
            function (callback) {
                // code a

                ContestQuestion.getLastContestQuestion({}, function (err, found) {
                    if (err) {
                        callback(err);
                    } else {
                        console.log("found1", found); // OUTPUT OK
                        callback(null, found);
                    }
                });
            },
            function (questionData, callback) {
                console.log("questionData", questionData);
                if (questionData) {
                    console.log("questionData", questionData);
                    Contest.findOne({
                        questionId: questionData._id,
                        email: data.email
                    }).exec(function (err, contest) {

                        if (!_.isEmpty(contest)) {
                            console.log("user already exists for the contest", contest);
                            callback("userExists", null);
                        } else {
                            console.log("saving user: ", data);
                            Contest.saveData(data, function (err, data) {
                                callback(err, data);
                            });
                        }
                    });
                } else {
                    callback("noQuestionsFound", data);
                }
            }
        ], function (err, result) {
            if (err) {
                callback(err);
            } else {
                console.log("last result", result); // OUTPUT OK
                callback(null, result);

            }
        });
    },


    saveContest: function (data, callback) {
        console.log("inside saveContest in service", data);
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
    getAllUserByMonth: function (data, callback) {
        console.log("inside getAllUserByAvi service", data);
        Contest.find({
            "month": data.month
        }).deepPopulate("questionId").skip((data.page - 1) * Config.maxRow).limit(Config.maxRow).exec(function (err, question) {
            console.log("after contest.find question", question);
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

    saveSelectedAnswer: function (data, callback) {
        console.log("inside saveSelectedAnswer service", data);
        Contest.update({
            _id: mongoose.Types.ObjectId(data._id)
        }, {
            $set: {
                answer: data.answer,
                question: data.contest[0].question,
                month: data.contest[0].month,
                week: data.contest[0].week,
                questionId: data.contest[0].questionId
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

    },
    search: function (data, callback) {
        var Model = this;
        var Const = this(data);
        var maxRow = Config.maxRow;

        var page = 1;
        if (data.page) {
            page = data.page;
        }
        var field = data.field;

        var options = {
            field: data.field,
            filters: {
                keyword: {
                    fields: ['name'],
                    term: data.keyword
                }
            },
            sort: {
                asc: 'name'
            },
            start: (page - 1) * maxRow,
            count: maxRow
        };




        var aggregatePipeline = [
            // Stage 1
            {
                $lookup: {
                    "from": "contestquestions",
                    "localField": "questionId",
                    "foreignField": "_id",
                    "as": "contestquestion"
                }
            }
        ];
        if (data.filter.month) {
            // Stage 2
            aggregatePipeline.push({
                $match: {
                    "contestquestion.month": data.filter.month
                }
            });
        }


        async.parallel({
            options: function (callback) {
                callback(null, options);
            },
            results: function (callback) {
                Model.aggregate(
                    // Pipeline
                    _.concat(aggregatePipeline, [

                        // Stage 3
                        {
                            $skip: options.start
                        },

                        // Stage 4
                        {
                            $limit: maxRow

                        },
                    ])).exec(callback);

            },
            total: function (callback) {
                Model.aggregate(
                    // Pipeline
                    _.concat(aggregatePipeline, [
                        // Stage 3
                        {
                            $group: {
                                "_id": "_id",
                                "count": {
                                    $sum: 1
                                }
                            }
                        }
                    ])).exec(function (err, data) {
                    if (err || _.isEmpty(data)) {
                        callback(err, 0);
                    } else {
                        callback(null, data[0].count);
                    }
                });
            }
        }, callback);



    }

};
module.exports = _.assign(module.exports, exports, model);