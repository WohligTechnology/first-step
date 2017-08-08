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

};
module.exports = _.assign(module.exports, exports, model);