 myApp.controller('GalleryCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
     $scope.template = TemplateService.getHTML("content/gallery.html");
     TemplateService.title = "Gallery"; //This is the Title of the Website
     $scope.navigation = NavigationService.getNavigation();
     $scope.formSubmitted = false;
     $scope.submitForm = function (data) {
         console.log(data);
         $scope.formSubmitted = true;
     };

 })