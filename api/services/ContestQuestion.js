var schema = new Schema({
    question: {
        type: String,
    },
    month: {
        type: String,
    },
    week: {
        type: String,
    },
    createOptions: [{
        option: {
            type: String,

        }
    }],
    correctAnswer: {
        type: String,
    }
});
schema.plugin(deepPopulate, {
    
});
schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('ContestQuestion', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

    getLastContestQuestion: function (data, callback) {
        ContestQuestion.findOne().sort({"createdAt": -1}).exec(function (err, found) {

            if (err) {

                callback(err, null);
            } else {

                if (found) {
                    console.log("Found", found);
                    callback(null, found);
                } else {
                    callback(null, {
                        message: "No Data Found"
                    });
                }
            }
        })
    },

    getCorrectAnswer: function (data, callback) {
        // console.log("inside api**********", data)
        Question.find({
            _id: mongoose.Types.ObjectId(data.qId)
        }).exec(function (err, found) {
            // console.log("Found: ", found);
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                // console.log("found in Question", found);
                callback(null, found);
            }

        });
    },

    getLastAddedDigitalCourse: function (data, callback) {
        DigitalCourse.find({}).sort({
            createdAt: -1
        }).limit(1).exec(function (err, found) {
            console.log("Found: ", found);
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                // console.log("found in Question", found);
                callback(null, found);
            }

        });
    },

    getAllDigitalCourseQuestion: function (data, callback) {
        // console.log("inside api", data)
        Question.find({
            DigitalCourse: mongoose.Types.ObjectId(data._id)
        }).exec(function (err, found) {
            // console.log("Found: ", found);
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                // console.log("found in Question", found);
                callback(null, found);
            }

        });
    },

};
module.exports = _.assign(module.exports, exports, model);