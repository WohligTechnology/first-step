module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    saveBlog: function (req, res) {
        Blog.saveBlog(req.body, res.callback);
    }
};
module.exports = _.assign(module.exports, controller);