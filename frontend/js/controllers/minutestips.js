 myApp.controller('MinutestipsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
     $scope.template = TemplateService.getHTML("content/minutestips.html");
     TemplateService.title = "Minutestips"; //This is the Title of the Website
     $scope.navigation = NavigationService.getNavigation();
     $scope.formSubmitted = false;
     $scope.submitForm = function (data) {
         console.log(data);
         $scope.formSubmitted = true;
     };
 })