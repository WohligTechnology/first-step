module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    saveContest: function (req, res) {
        console.log("inside contest controller",req.body);
        if (req.body) {
            Contest.saveContestByAvi(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    saveContestold: function (req, res) {
        console.log("inside contest controller")
        if (req.body) {
            Contest.saveContest(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getAllUser: function (req, res) {
        console.log("inside contest controller")
        if (req.body) {
            Contest.getAllUser(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getAllUserByMonth: function (req, res) {
        console.log("inside contest controller getAllUserByMonth")
        if (req.body) {
            Contest.getAllUserByMonth(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    migrateContest: function (req, res) {
        // this function update contest with questionId if matched contest.question=contestquestion.question and add questionId in contest with contestquestion._id for mapping, if not matched condition insert default id in questionId as "59d6336b466418777a0a3d03"

        console.log("inside contest controller migrateContest")
        if (req.body) {
            Contest.migrateContest(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    deleteNullAfterMigrateContest: function (req, res) {
        //this function is for deleting null questions in contest and those contests who are not having given contest i.e deleting default questionId field which we are inserting in migrateContest
 
//   find({
//   _id: {
//     $nin:[]
//   }
//   },{
//   _id:1
//   }).exec()
        console.log("inside contest controller deleteNullAfterMigrateContest")
        if (req.body) {
            Contest.deleteNullAfterMigrateContest(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getAllQuestion: function (req, res) {
        if (req.body) {
            Contest.getAllQuestion(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    saveSelectedAnswer: function (req, res) {
        if (req.body) {
            console.log("insode saveSelectedAnswer controller",req.body);
            Contest.saveSelectedAnswer(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    saveSelectedAnswerold: function (req, res) {
        if (req.body) {
            Contest.saveSelectedAnswer(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getDateviseUser: function (req, res) {
        if (req.body) {
            Contest.getDateviseUser(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getRightAnswers: function (req, res) {
        if (req.body) {
            Contest.getRightAnswers(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            });
        }
    },
    getByMonth: function (req, res) {
        console.log("inside contest controller getByMonth",req.body);
        if (req.body) {
            Contest.getByMonth(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    deleteNullContests(req,res){
        console.log("in contest controller deleteNullContests ");
        if (req.body) {
            Contest.deleteNullContests(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    }
    // deleteNullContestsNoUse: function (req, res) {
    //     if (req.body) {
    //         if (mongoose.Types.ObjectId.isValid(req.body._id)) {
    //             req.model.deleteData(req.body, res.callback);
    //         } else {
    //             res.json({
    //                 value: false,
    //                 data: "ObjectId Invalid"
    //             });
    //         }
    //     } else {
    //         res.json({
    //             value: false,
    //             data: "Invalid Request"
    //         });
    //     }

    // }
};
module.exports = _.assign(module.exports, controller);