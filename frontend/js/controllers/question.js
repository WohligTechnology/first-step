myApp.controller('QuestionPaperCtrl', function ($scope, apiService, $stateParams, TemplateService, NavigationService, $timeout, $uibModal) {
    $scope.template = TemplateService.getHTML("content/question-paper.html");
    TemplateService.title = "Minutestips"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.formSubmitted = false;
    $scope.changeURL = function (id) {
        console.log(id);
        $location.path("" + id);
    };

    $scope.thanksopen = function (data) {
        data._id = $stateParams.userId;
        data.contest = [];
        data.contest.push({
            question: "सबसे ज्यादा ब्याज किस कार्ड पर लगता है",
            answer: data.answer
        });
        // console.log("data is..", data.question);
        console.log("data is..", data.answer);
        apiService.saveSelectedAnswer(data, function (data) {
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