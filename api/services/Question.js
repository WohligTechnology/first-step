var schema = new Schema({
    DigitalCourse: {
        type: Schema.Types.ObjectId,
        ref: 'DigitalCourse',
        index: true
    },
    question: {
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
    Populate: {
        'DigitalCourse': {
            select: '_id name'
        }
    }
});
schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Question', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "DigitalCourse", "DigitalCourse"));
var model = {

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