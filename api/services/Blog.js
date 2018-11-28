var schema = new Schema({
    blogId: {
        type: String
    },
    title: String,
    content: String,
    date: Date,
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
var model = {
    saveBlog: function (data, callback) {
        delete data.createdAt;
        Blog.saveData(data, callback);
    }
};
module.exports = _.assign(module.exports, exports, model);