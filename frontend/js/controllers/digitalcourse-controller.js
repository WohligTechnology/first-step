 myApp.controller('DigitalCourseCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $location) {
     $scope.template = TemplateService.getHTML("content/digitalcourse.html");
     TemplateService.title = "Digitalcourse"; //This is the Title of the Website
     $scope.navigation = NavigationService.getNavigation();
     $scope.formSubmitted = false;
     $scope.changeURL = function (id) {
         console.log(id);
         $location.path("" + id);
     };
     $scope.openFacebook = function () {
         console.log("clla");
         $uibModal.open({
             animation: true,
             templateUrl: 'views/modal/fb-login.html',
             scope: $scope,
             size: 'md',
         });
     };
     $scope.openGoogle = function () {
         console.log("clla");
         $uibModal.open({
             animation: true,
             templateUrl: 'views/modal/google-login.html',
             scope: $scope,
             size: 'md',
         });
     };

 })