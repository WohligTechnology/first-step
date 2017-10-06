myApp.controller('QuestionPaperCtrl', function ($scope, apiService, $stateParams, TemplateService, NavigationService, $timeout, $uibModal) {
    $scope.template = TemplateService.getHTML("content/question-paper.html");
    TemplateService.title = "Minutestips"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.formSubmitted = false;
    $scope.changeURL = function (id) {
        console.log(id);
        $location.path("" + id);
    };
    data={};
    apiService.apiWithData("ContestQuestion/getLastContestQuestion", data, function (data) {
            console.log("*****$scope.getLastContestQuestion", data.data);
            $scope.contestQuestion=data.data;
            $scope.data1=data.data;

        });

    $scope.thanksopen = function (data) {
        console.log("**************", data);
        if (data) {
            data.questionId=data._id;
            data._id = $stateParams.userId;
        }
        data.contest = [];
        data.contest.push({
            questionId:data.questionId,
            question: data.question,
            answer: data.answer,
            month: data.month,
            week: data.week,
            user:$stateParams.userId
        });
        // console.log("data is..", data.question);
        console.log("data is..", data.answer);

        console.log("contest is..", data.contest);
        apiService.saveSelectedAnswer('Contest/saveSelectedAnswer', data, function (data) {
            console.log(data);
            if (data.value) {
                $uibModal.open({
                    animation: true,
                    templateUrl: 'views/modal/thanks.html',
                    scope: $scope,
                    size: 'md',
                });
            }
        });

    };


})