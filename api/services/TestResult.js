var schema = new Schema({
    digitalUser: {
        type: Schema.Types.ObjectId,
        ref: 'DigitalUser',
        index: true
    },
    digitalCourse: {
        type: Schema.Types.ObjectId,
        ref: 'DigitalCourse',
        index: true
    },
    // Question: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Question',
    //     index: true
    // },
    answerProvided: [{
        answer: {
            type: String,

        },
        question: {
            type: Schema.Types.ObjectId,
            ref: 'Question',
            index: true
        },
        isCorrect: {
            type: String,
        }
    }]
});
schema.plugin(deepPopulate, {
    Populate: {
        'digitalCourse': {
            select: '_id name'
        },
        'digitalUser': {
            select: '_id name'
        },
        'question': {
            select: ''
        },
        'answer': {
            select: ''
        }
    }
});
schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('TestResult', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "digitalCourses digitalUsers answers questions", "digitalCourse digitalUser answer question"));
var model = {

    validUser: function (data, callback) {
        // console.log("data inside valid user **** api:", data)
        Contest.update({
            _id: mongoose.Types.ObjectId(data._id)
        }, {
            $set: {
                answer: data.answer,
                question: data.contest[0].question
            }
        }).exec(function (err, found) {
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback("noDataound", null);
            } else {
                callback(null, found);
            }

        });
    },

    saveDigitalUser: function (data, callback) {
        // console.log("*****data inside savedigitalUser****", data)

        //avinash function changes
        var digitalUserData={};
        digitalUserData.digitalUser=mongoose.Types.ObjectId(data.digitalUser);
        digitalUserData.digitalCourse= mongoose.Types.ObjectId(data.digitalCourse);
 var testGiven=[];
        DigitalUser.findOne({
            _id: digitalUserData.digitalUser
        }).exec(function (err, found) {
            console.log("Found: ", found);
            
                testGiven=found.testGiven;
                testGiven.push(digitalUserData.digitalCourse);
                found.testGiven=testGiven;
                console.log("found record before storing and after push",found);
                DigitalUser.saveData(found, function (err, found1) {
                //    if (err || _.isEmpty(found1)) {
                //        callback(err, []);
                //    } else {
                //        callback(null, found1);
                //    }
                console.log("after storing in digitalUser table",found1);
               });
                console.log("already present", found);
                // callback(null, found);
            

        });

        // DigitalUser.saveData(data, function (err, found1) {
        //            if (err || _.isEmpty(found1)) {
        //                callback(err, []);
        //            } else {
        //                callback(null, found1);
        //            }
        //        });

        //avinash function ends


        var data1 = this(data);
        data1.digitalUser = mongoose.Types.ObjectId(data.digitalUser);
        data1.digitalCourse = mongoose.Types.ObjectId(data.digitalCourse);
        data1.answerProvided = [];
        for (var idx = 0; idx < data.answerProvided.length; idx++) {
            data1.answerProvided.push({
                answer: data.answerProvided[idx].answer,
                question: mongoose.Types.ObjectId(data.answerProvided[idx].question),
                isCorrect: data.answerProvided[idx].isCorrect,
            });
        }
        // console.log("data inside savedigitalUser", data1)
        data1.save(function (err, found) {
            // console.log("Found: ", found);
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                TestResult.getRightUser(found, function (err, data) {
                    console.log("err, data", err, data);
                    if (err) {
                        callback(err, null);
                    } else {
                        callback(null, {
                            flag: data
                        });
                    }
                });
            }

        });
    },

    getRightUser: function (data, callback) {
        // console.log("*****inside getRight User*******", data);
        // data.answerProvided = [];
        var flag = false;
        // console.log("&&&&&&&&&&&&idx < data.answerProvided.length**", data.answerProvided.length);
        // console.log("data.answerProvided.answer", data.answerProvided[0].answer);
        // console.log("data.answerProvided.isCorrect", data.answerProvided[0].isCorrect);
        for (var idx = 0; idx < data.answerProvided.length && flag == false; idx++) {
            // console.log("%%%%%%%%%%%%%%%%%%%%Length%%%%%%%%%%%%%%%%%%%%%%%%%", data.answerProvided[idx].answer);
            if (data.answerProvided[idx].answer == data.answerProvided[idx].isCorrect) {
                // console.log("%%%%%%%%%%%%%%%%%%%%Inside for loop%%%%%%%%%%%%%%%%    if  %%%%%%%%%%%%%%%%%%%%%%%%%%")

            } else {
                // console.log("%%%%%%%%%%%%%%%%%%%%Inside for loop%%%%%%%%%%%%%%%%%%  else %%%%%%%%%%%%%%%%%%%%%%%%")
                flag = true;
                TestResult.remove({
                    _id: data._id
                }, function (err, data) {
                    if (err) {
                        // console.log(" ***************** inside err ********************** ");
                    } else if (_.isEmpty()) {
                        // console.log(" ****************** inside null ********************* ");
                    } else {
                        // console.log(" ******************* inside success ******************** ");
                    }
                });
            }

        }

        callback(null, flag);
        // if (flag == true) {
        //     console.log("inside if api");
        //     callback(null, flag);
        // } else if (flag == false) {
        //     callback(null, flag);
        // }
        // (function (err, found) {
        //     // console.log("Found: ", found);
        //     if (err) {
        //         callback(err, null);
        //     } else if (_.isEmpty(found)) {
        //         callback(null, "noDataound");
        //     } else {
        //         // console.log("found in Question", found);
        //         callback(null, found);
        //     }

        // });
    },

};
module.exports = _.assign(module.exports, exports, model);