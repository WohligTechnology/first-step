var schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true,
        excel: {
            name: "Name"
        }
    },
    title: String,
    description: String,
    abstract: String,
    keywords: String,
    page: String
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('SeoBackend', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    saveSEO: function (data, callback) {
        delete data.createdAt;
        SeoBackend.saveData(data, callback);
    },
    getOneSEO: function (data, callback) {
        SeoBackend.findOne(data).exec(callback)
    }
};
module.exports = _.assign(module.exports, exports, model);