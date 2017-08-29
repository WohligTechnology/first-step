myApp.controller('DigitalQuestionCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, apiService, $stateParams) {
      $scope.template = TemplateService.getHTML("content/digital-question.html");
      TemplateService.title = "Digitalquestion"; //This is the Title of the Website
      $scope.navigation = NavigationService.getNavigation();
      $scope.DigitalCourse = {};
      $scope.tempFun = function (id) {
            // console.log("id", id);
            apiService.apiWithData("Question/getAllDigitalCourseQuestion", id, function (data) {
                  $scope.Question = data.data;
                  // console.log("getAllDigitalCourseQuestion inside controller*****", data.data);

                  // console.log("getAllDigitalCourseQuestion data", $scope.DigitalCourse);
            });
      }
      $scope.constraints = {};
      $scope.id = $stateParams.userId;
      $scope.constraints.digitalUser = $stateParams.userId;
      // console.log("State param id is:", $scope.id)
      apiService.apiWithoutData("Question/getLastAddedDigitalCourse", function (data) {
            console.log("getAllQuestion inside controller", data.data);
            $scope.DigitalCourse1 = data.data[0]._id;
            $scope.constraints.digitalCourse = data.data[0]._id;
            $scope.DigitalCourse = {
                  _id: data.data[0]._id
            };
            console.log("DigitalCourse data", $scope.DigitalCourse1);
            $scope.tempFun($scope.DigitalCourse);
      });




      $scope.digitalinside = [{
            No: 1,
            Question: "सेविंग अकाउंट पर ब्याज मिलता है",
            option1: "ब्याज पर ब्याज",
            option2: "<span style='font-family:NimbusSanL-Reg;'>FD</span> जितना",
            option3: "साधारण ब्याज",
            option4: "पीएफ जितना",
      }, {
            No: 2,
            Question: "ऑटोमैटिक स्वीप अकाउंट होता है",
            option1: "सेविंग अकाउंट रेकरिंग अकाउंट से लिंक",
            option2: "सेविंग अकाउंट फिक्स डिपॉजिट से लिंक",
            option3: "सेविंग अकाउंट डीमैट अकाउंट से लिंक",
            option4: "सेविंग अकाउंट ट्रेडिंग अकाउंट से लिंक",
      }, {
            No: 3,
            Question: "सेविंग अकाउंट के ब्याज पर लगता है टैक्स",
            option1: "1 लाख से ज्यादा ब्याज इनकम पर",
            option2: "50 हजार से ज्यादा ब्याज इनकम पर",
            option3: "10 हजार से ज्यादा ब्याज इनकम पर",
            option4: "20 हजार से ज्यादा ब्याज इनकम पर",
      }, {
            No: 4,
            Question: "सेविंग अकाउंट खोलने के लिए अनिवार्य है",
            option1: "घर के एड्रेस का प्रूफ और ईमेल एड्रेस",
            option2: "फोन नंबर",
            option3: "पैन कार्ड और आधार कार्ड",
            option4: "ऊपर लिखे सभी दस्तावेज",
      }, {
            No: 5,
            Question: "<span style='font-family:NimbusSanL-Reg;'>KYC</span> के लिए कौन से डॉक्यूमेंट्स पर्याप्त हैं",
            option1: "पासपोर्ट",
            option2: "पैन कार्ड",
            option3: "पैनकार्ड और आधार कार्ड",
            option4: "पैनकार्ड, आधार कार्ड या पासपोर्ट",
      }, {
            No: 6,
            Question: "साधारण ब्याज किस अकाउंट पर मिलता है",
            option1: " रेकरिंग अकाउंट पर",
            option2: "सेविंग अकाउंट पर",
            option3: "फिक्स डिपॉजिट पर",
            option4: "करेंट अकाउंट पर",
      }, {
            No: 7,
            Question: "क्या रेकरिंग डिपॉजिट पर टैक्स छूट मिलती है",
            option1: "पूरी छूट मिलती है",
            option2: " बिल्कुल नहीं मिलती ",
            option3: "10 हजार से ज्यादा सालाना ब्याज पर टैक्स लगता है",
            option4: "5 हजार से ज्यादा सालाना ब्याज पर टैक्स लगता है",
      }, {
            No: 8,
            Question: "क्या रेकरिंग डिपॉजिट पर टैक्स छूट मिलती है",
            option1: "पूरी छूट मिलती है",
            option2: "बिल्कुल नहीं मिलती",
            option3: "10 हजार से ज्यादा सालाना ब्याज पर टैक्स लगता है",
            option4: "5 हजार से ज्यादा सालाना ब्याज पर टैक्स लगता है",
      }, {
            No: 9,
            Question: "क्रेडिट कार्ड कितने दिन तक ब्याज नहीं लगता",
            option1: "45 दिन तक",
            option2: "15 दिन तक",
            option3: "20 दिन तक",
            option4: "25 दिन तक",
      }, {
            No: 10,
            Question: "क्रेडिट कार्ड लिमिट कैसे तय होती है",
            option1: "आमदनी के हिसाब से",
            option2: "क्रेडिट हिस्ट्री पर",
            option3: "बैंक की मर्जी पर",
            option4: "इन सभी चीजों पर",
      }, {
            No: 11,
            Question: "वर्चुअल क्रेडिट कार्ड कितनी बार इस्तेमाल कर सकते हैं ",
            option1: "4 बार",
            option2: "5 बार",
            option3: "1 बार",
            option4: "अनगिनत बार",
      }, {
            No: 12,
            Question: "मल्टी करेंसी कार्ड से",
            option1: "अलग-अलग देशों में पैसा निकला जाता है",
            option2: "अलग-अलग करेंसी निकाली जा सकती है",
            option3: "मोबाइल फोन से लिंक किया जा सकता है",
            option4: "उपरोक्त सभी काम हो सकते हैं",
      }]

      // $scope.id = {
      //       user_id: $stateParams.userId,
      //       digital_id: $scope.DigitalCourse1,


      // }
      // // console.log("$$$$$$$imp data$$$", $scope.id);
      $scope.digitalSubmit = function () {
            apiService.apiWithData("TestResult/saveDigitalUser", $scope.constraints, function (data) {
                  $scope.data = data.data;
                  console.log("$scope.data", $scope.data);
                  if ($scope.data.flag == false) {
                        console.log("Inside if")
                        $scope.digitalthanks();
                  } else {
                        console.log("inside else");
                        $scope.digitalsorry();
                  }
            });
      }


      $scope.digitalthanks = function () {
            $scope.id = $stateParams.userId;
            $scope.id = {
                  _id: $stateParams.userId,
            }
            console.log("inside thank u modal state param is is", $scope.id);
            apiService.apiWithData("DigitalUser/getUser", $scope.id, function (data) {
                  $scope.user = {
                        user: data.data
                  }
                  console.log("inside thank u modal state param is is*****", data.data);
                  apiService.apiWithData("DigitalUser/saveMailData", $scope.user, function (data) {

                  });
            });
            console.log("clla");
            $uibModal.open({
                  animation: true,
                  templateUrl: 'views/modal/digital-thanks.html',
                  scope: $scope,
                  size: 'md',
            });

      };
      $scope.digitalsorry = function () {
            console.log("clla");
            $uibModal.open({
                  animation: true,
                  templateUrl: 'views/modal/digital-sorry.html',
                  scope: $scope,
                  size: 'md',
            });
      };



      $scope.constraints.answerProvided = [];
      // $scope.tempObj = {};
      $scope.finalFuntion = function (qId, ansId) {
            var demo = _.find($scope.constraints.answerProvided, function (o) {
                  if (qId == o.question) {
                        console.log("demo****", o);
                        _.pull($scope.constraints.answerProvided, o);

                  }
            });
            // console.log("demo", demo);
            // if (demo !== undefined) {
            //       _.pull($scope.constraints.answerProvided, demo);
            // }
            console.log("######", qId, ansId);
            $scope.tempObj.answer = ansId;
            $scope.tempObj.question = qId;
            $scope.constraints.answerProvided.push($scope.tempObj);
            console.log("$scope.constraints.answerProvided", $scope.constraints.answerProvided);
      };
      $scope.answeredQstn = function (ansId, qId) {
            $scope.qId = {
                  qId: qId
            };
            apiService.apiWithData("Question/getCorrectAnswer", $scope.qId, function (data) {
                  $scope.tempObj = {};
                  $scope.correctAnswer = data.data[0].correctAnswer;
                  $scope.tempObj.isCorrect = $scope.correctAnswer;
                  $scope.tempObj.answer = ansId;
                  $scope.tempObj.question = qId;
                  // console.log("correctAnswer&&&&&&&&&&&&&&&&&&&&&&&&&&*****", $scope.tempObj.isCorrect);

                  // console.log("correctAnswer&&&&&&&&&&&&&&&&&&&&&&&&&&*****", $scope.tempObj.isCorrect);
                  console.log("ansId", ansId);
                  console.log("$scope.qId", $scope.qId);
                  console.log("$scope.tempObj", $scope.tempObj);
                  $scope.finalFuntion(qId, ansId);



                  // console.log(" $scope.correctAnswer", $scope.correctAnswer);
                  // if ($scope.constraints.answerProvided.length === 0) {
                  //       $scope.tempObj.answer = ansId;
                  //       $scope.tempObj.question = qId;
                  //       $scope.constraints.answerProvided.push($scope.tempObj);
                  // }
                  // _.each($scope.constraints.answerProvided, function (key) {
                  //       if (key.question === qId) {
                  //             key.answer = ansId;
                  //       } else {
                  //             $scope.tempObj.answer = ansId;
                  //             $scope.tempObj.question = qId;
                  //             $scope.constraints.answerProvided.push($scope.tempObj);
                  //       }
                  // });
                  // var index = _.findIndex($scope.constraints.answerProvided, {
                  //       'answer': ansId,
                  //       'question': qId
                  // });
                  // console.log(index, "index");
                  // if (index <= -1) {
                  //       console.log("insideif");
                  //       $scope.tempObj.answer = ansId;
                  //       $scope.tempObj.question = qId;
                  //       $scope.constraints.answerProvided.push($scope.tempObj);
                  //       $scope.tempObj = {};
                  // } else {
                  //       console.log("inside else")
                  //       $scope.constraints.answerProvided.splice(index, 1);
                  // }




                  // $scope.tempObj.answer = ansId;
                  // $scope.tempObj.question = qId;
                  // $scope.constraints.answerProvided.push($scope.tempObj);



                  // console.log($scope.constraints, " $scope.constraints");


            });





      }

})