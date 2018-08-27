myApp.controller('DigitalQuestionCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, apiService, $stateParams) {
    $scope.template = TemplateService.getHTML("content/digital-question/digital-question.html");
    TemplateService.title = "Digitalquestion"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.DigitalCourse = {};
    var id = {};
    id._id = $.jStorage.get("courseid");
    $scope.courseName = $.jStorage.get("coursename")
    apiService.apiWithData("Question/getAllDigitalCourseQuestion", id, function (data) {
          $scope.Question = data.data;

    });
console.log("!!!!!!!!",$stateParams)
    $scope.constraints = {};
    $scope.id = $stateParams.userId;
    $scope.constraints.digitalUser = $stateParams.userId;

    $scope.digitalSubmit = function () {
          $scope.constraints.digitalCourse = $.jStorage.get("courseid");
          apiService.apiWithData("TestResult/saveDigitalUser", $scope.constraints, function (data) {
                $scope.data = data.data;
                if ($scope.data.flag == false) {
                      $scope.digitalthanks();
                } else {
                      $scope.digitalsorry();
                }
          });
    }
    $scope.digitalthanks = function () {
          $scope.id = $stateParams.userId;
          $scope.id = {
                _id: $stateParams.userId,
          }
          apiService.apiWithData("DigitalUser/getOne", $scope.id, function (data) {
                console.log("data is", data.data);
                $scope.user = {}
                $scope.user = data.data;
                $scope.user.courseName = $.jStorage.get("coursename");
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
                windowClass: 'app-modal-window'
          });
    };
    $scope.constraints.answerProvided = [];
    $scope.finalFuntion = function (qId, ansId) {
          var demo = _.find($scope.constraints.answerProvided, function (o) {
                if (qId == o.question) {
                      _.pull($scope.constraints.answerProvided, o);

                }
          });

          $scope.tempObj.answer = ansId;
          $scope.tempObj.question = qId;
          $scope.constraints.answerProvided.push($scope.tempObj);
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

                if ($scope.constraints.answerProvided.length === 0) {
                      $scope.tempObj.answer = ansId;
                      $scope.tempObj.question = qId;
                      $scope.constraints.answerProvided.push($scope.tempObj);
                }
                _.each($scope.constraints.answerProvided, function (key) {
                      if (key.question === qId) {
                            key.answer = ansId;
                      } else {
                            $scope.tempObj.answer = ansId;
                            $scope.tempObj.question = qId;
                            $scope.constraints.answerProvided.push($scope.tempObj);
                      }
                });
                $scope.constraints.answerProvided = _.uniqBy($scope.constraints.answerProvided, 'question');
          });
    }

})