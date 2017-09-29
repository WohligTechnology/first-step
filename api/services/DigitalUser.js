var schema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        validate: validators.isEmail(),
        unique: true

    },
    number: {
        type: String,
    },
    testGiven: [{
        type: Schema.Types.ObjectId,
        ref: 'DigitalCourse'
    }]
});

schema.plugin(deepPopulate, {
    Populate: {
        'testGiven': {
            select: '_id name'
        }
    }
});
// schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('DigitalUser', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "testGiven", "testGiven"));
var model = {

    saveValidUser: function (data, callback) {
        console.log("inside api**********", data)
        DigitalUser.findOne({
            email: data.email
        }).exec(function (err, found) {
            console.log("Found: ", found);
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                DigitalUser.saveData(data, function (err, found1) {
                    if (err || _.isEmpty(found1)) {
                        callback(err, []);
                    } else {
                        callback(null, found1);
                    }
                });
                // callback(null, "noDataound");
            } else {
                console.log("already present", found);
                callback(null, found);
            }

        });
    },

    getDigitalUserFromId: function (data, callback) {
        console.log("inside api**********", data)
        DigitalUser.findOne({
            _id: data._id
        }).deepPopulate("testGiven").exec(function (err, found) {
            console.log("Found: ", found);
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                console.log("Data To be return", found);
                callback(null, found);
            }

        });
    },
    getUser: function (data, callback) {
        // console.log("inside api**********", data)
        DigitalUser.find({
            _id: mongoose.Types.ObjectId(data._id)
        }).exec(function (err, found) {
            // console.log("Found: ", found);
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                // console.log("found in Question", found);
                callback(null, found);
            }

        });
    },

    saveMailData: function (data, callback) {
        async.waterfall([
                function (callback) {
                    Config.generatePdf(data, function (err, data) {

                        if (err) {
                            // console.log(err);
                            callback(err, null);
                        } else {
                            if (_.isEmpty(data)) {
                                callback(err, null);
                            } else {
                                callback(null, data);
                            }
                        }
                    });
                },
                function (pdfdata, cbWaterfall1) {
                    var emailData = {};
                    emailData.name = data.name;
                    emailData.from = "pehlakadam@nw18.com";
                    emailData.email = data.email;
                    emailData.filename = "mail1.ejs";
                    emailData.file = pdfdata.name;
                    emailData.subject = "Pehla Kadam:Certificate";
                    Config.email(emailData, function (err, emailRespo) {
                        if (err) {

                            cbWaterfall1(null, err);
                        } else if (emailRespo) {
                            cbWaterfall1(null, emailRespo);
                        } else {
                            cbWaterfall1(null, "Invalid data");
                        }
                    });
                },
            ],
            function (err, data2) {
                if (err) {
                    console.log(err);
                    callback(null, []);
                } else if (data2) {
                    if (_.isEmpty(data2)) {
                        callback(null, []);
                    } else {
                        callback(null, data2);
                    }
                }
            });
    },
};
module.exports = _.assign(module.exports, exports, model);