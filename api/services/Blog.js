var schema = new Schema({
    blogId: {
        type: String
    },
    title: String,
    content: String,
    date: Date,
    displayHome: Boolean,
    shortName: String,
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
    },
    getBlogs: function (data, callback) {
        Blog.aggregate(
            [{
                    "$group": {
                        "_id": {
                            "month": {
                                "$month": "$date"
                            },
                            "year": {
                                "$year": "$date"
                            }
                        },
                        "blogs": {
                            "$push": {
                                "date": "$date",
                                "_id": "$_id",
                                "id": "$blogId",
                                "title": "$title",
                                "content": "$content"
                            }
                        }
                    }
                },
                {
                    "$sort": {
                        "_id.year": -1.0,
                        "_id.month": -1.0
                    }
                }
            ]).exec(callback);
    }
};
module.exports = _.assign(module.exports, exports, model);