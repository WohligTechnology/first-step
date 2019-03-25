var schema = new Schema({
  name: {
    type: String,
    required: true
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  image: {
    type: String
  },
  status: {
    type: String,
    default: "Disable",
    enum: ["Enable", "Disable"]
  },
  sequence: {
    type: Number
  }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model("DigitalCourse", schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));

var model = {
  // added by varun
  getCourses: (data, callback) => {
    DigitalCourse.find({})
      .lean()
      .exec(function(err, data) {
        if (err) {
          callback(err, null);
        } else if (_.isEmpty(data)) {
          callback("no data found", null);
        } else {
          callback(null, data);
        }
      });
  }
};
module.exports = _.assign(module.exports, exports, model);
