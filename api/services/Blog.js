var schema = new Schema({
    id: {
        type: String
    },
    title: String,
    content: String,
    seo: [{
        title: String,
        description: String,
        abstract: String,
        keywords: String,
        page: String
    }]

});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Blog', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);