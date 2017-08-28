var schema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('DigitalUser', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

    // saveValidUser: function (data, callback) {
    //     console.log("inside api**********", data)
    //     DigitalUser.find({
    //         email: mongoose.Types.ObjectId(data._id)
    //     }).exec(function (err, found) {
    //         console.log("Found: ", found);
    //         if (err) {
    //             callback(err, null);
    //         } else if (_.isEmpty(found)) {
    //             callback(null, "noDataound");
    //         } else {
    //             console.log("found in Question", found);
    //             callback(null, found);
    //         }

    //     });
    // },
    getUser: function (data, callback) {
        console.log("inside api**********", data)
        DigitalUser.find({
            _id: mongoose.Types.ObjectId(data._id)
        }).exec(function (err, found) {
            console.log("Found: ", found);
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                console.log("found in Question", found);
                callback(null, found);
            }

        });
    },

    saveMailData: function (data, callback) {
        console.log("inside saveMailData api", data.user[0].name);
        async.waterfall([
                function (callback) {
                    Config.generatePdf(data.user[0].name, function (err, data) {
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
                    console.log("data: ", data);
                    emailData.name = data.user[0].name;
                    emailData.from = "pehlakadam@nw18.com";
                    emailData.email = data.user[0].email;
                    emailData.filename = "mail1.ejs";
                    emailData.file = pdfdata.name;
                    emailData.subject = "Pehla Kadam: Answer to Query";
                    console.log("emaildata", emailData);

                    Config.email(emailData, function (err, emailRespo) {
                        if (err) {
                            console.log(err);
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