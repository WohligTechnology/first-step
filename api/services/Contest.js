var schema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    answer: {
        type: String,
    },
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Contest', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    saveSelectedAnswer: function (data, callback) {
        Contest.update({
            _id: mongoose.Types.ObjectId(data._id)
        }, {
            answer: data.answer
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

        var find = {
            answer: '1 लाख से ज्यादा ब्याज इनकम पर'
        };
        if (!data.page) {
            data.page = 1;
        }
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
                    callback(null, result);
                });
            } else {
                callback("noDataFound", null);
            }
        });
    }

};
module.exports = _.assign(module.exports, exports, model);