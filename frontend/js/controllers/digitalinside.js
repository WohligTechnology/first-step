myApp.controller('DigitalInsideCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    $scope.template = TemplateService.getHTML("content/digitalinside.html");
    TemplateService.title = "Digitalinside"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.formSubmitted = false;
    $scope.changeURL = function (id) {
        console.log(id);
        $location.path("" + id);
    };
    $scope.submitForm = function (data) {
        console.log(data);
        $scope.formSubmitted = true;
    };
})