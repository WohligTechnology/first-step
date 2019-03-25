module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
  getCourses: function(req, res) {
    DigitalCourse.getCourses(req.body, res.callback);
  }
};
module.exports = _.assign(module.exports, controller);
