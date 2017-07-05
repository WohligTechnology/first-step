var schema = new Schema({
    name: {
        type: String,
        required: true
    },
    nameexpert: {
        type: String,
        required: true
    },
    email: {
        type: String,
        excel: "User Email"
    },
    question: {
        type: String,
        required: true,
        excel: "Question"
    },
    answer: {
        type: String,
        excel: "Answer"
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Expert', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {


    saveMailData: function (data, callback) {
        async.waterfall([
                function (cbWaterfall) {
                    Expert.saveData(data, function (err, complete) {
                        if (err) {
                            cbWaterfall(err, null);
                        } else {
                            if (_.isEmpty(complete)) {
                                cbWaterfall(null, []);
                            } else {
                                console.log("complete", complete);
                                cbWaterfall(null, complete);
                            }
                        }
                    });
                },
                function (complete, cbWaterfall1) {
                    var emailData = {};
                    console.log("data: ", data);
                    emailData.name = data.name;
                    emailData.question = data.question;
                    emailData.answer = data.answer;
                    emailData.from = "pehlakadam@nw18.com";
                    emailData.email = data.email;
                    emailData.filename = "mail.ejs";
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