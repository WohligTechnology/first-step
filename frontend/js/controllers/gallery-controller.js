 myApp.controller('GalleryCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
     $scope.template = TemplateService.getHTML("content/gallery.html");
     TemplateService.title = "Gallery"; //This is the Title of the Website
     $scope.navigation = NavigationService.getNavigation();
     $scope.formSubmitted = false;
     $scope.submitForm = function (data) {
         console.log(data);
         $scope.formSubmitted = true;
         $.fancybox.close(true);
     };

     $scope.changeURL = function (id) {
         console.log(id);
         $location.path("" + id);
     };

     $scope.viewLess3 = function () {
         $scope.readmore3 = true;
         $scope.season3 = [
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',


         ];
     }
     $scope.viewLess3();
     $scope.season3viewmore3 = [
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
     ]
     $scope.viewMore3 = function () {
         $scope.readmore3 = false;
         $scope.season3 = [];
         $scope.season3 = _.cloneDeep($scope.season3viewmore3);

     }


     $scope.viewLess2 = function () {
         $scope.readmore2 = true;
         $scope.season2 = [
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',


         ];
     }
     $scope.viewLess2();
     $scope.season2viewmore2 = [
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
     ]
     $scope.viewMore2 = function () {
         $scope.readmore2 = false;
         $scope.season2 = [];
         $scope.season2 = _.cloneDeep($scope.season2viewmore2);

     }


     $scope.viewLess1 = function () {
         $scope.readmore1 = true;
         $scope.season1 = [
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',
             'img/gallery/1.jpg',


         ];
     }
     $scope.viewLess1();
     $scope.season1viewmore1 = [
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
         'img/gallery/1.jpg',
     ]
     $scope.viewMore1 = function () {
         $scope.readmore1 = false;
         $scope.season1 = [];
         $scope.season1 = _.cloneDeep($scope.season1viewmore1);

     }

 })