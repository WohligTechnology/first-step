var schema = new Schema({
    name: {
        type: String,
        required: true
    },
    nameexpert: {
        type: String,
        required: true
    },
    email: {
        type: String,
        excel: "User Email"
    },
    question: {
        type: String,
        required: true,
        excel: "Question"
    },
    answer: {
        type: String,
        excel: "Answer"
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Expert', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);