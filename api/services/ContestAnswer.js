var schema = new Schema({
    question: {
        type: String
    },
    answer: {
        type: String
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('ContestAnswer', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

    findAnswerForQuestion: function (data, cbWaterfall1) {
        console.log("data inside findAnswerForQuestion ", data);
        ContestAnswer.find({
            question: data.question
        }).exec(function (err, found) {
            if (err) {
                cbWaterfall1(err, null);
            } else if (_.isEmpty(found)) {
                cbWaterfall1("noDataound", null);
            } else {
                console.log("??????found inside findAnswerForQuestion??????????", found);
                cbWaterfall1(null, found);
            }

        });
    },
};
module.exports = _.assign(module.exports, exports, model);