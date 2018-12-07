module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    saveSEO: function (req, res) {
        SeoBackend.saveSEO(req.body, res.callback);
    },
    getOneSEO: function (req, res) {
        SeoBackend.getOneSEO(req.body, res.callback);
    }
};
module.exports = _.assign(module.exports, controller);