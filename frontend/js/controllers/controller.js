var mySwiper;
myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $stateParams, $document, $location, $state, apiService) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();


        $scope.changeURL = function (id) {
            console.log(id);
            $location.path("" + id);
        };
        $scope.mySlides = [
            'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
        ];
        $scope.homeSlide = [
            'img/small-season2/1.jpg',
            'img/small-season2/2.jpg',
            'img/small-season2/3.jpg',
            'img/small-season2/4.jpg',
            'img/small-season2/5.jpg',
            'img/small-season2/6.jpg',
            'img/small-season2/7.jpg',
            'img/small-season2/8.jpg',
            'img/small-season2/9.jpg',
            'img/small-season2/10.jpg',
            'img/small-season2/11.jpg',
            'img/small-season2/12.jpg',
            'img/small-season2/13.jpg',
            'img/small-season2/14.jpg',
            'img/small-season2/15.jpg',
            'img/small-season2/16.jpg',
            'img/small-season2/17.jpg',
            'img/small-season2/18.jpg',
            'img/small-season2/19.jpg',
            'img/small-season2/20.jpg',
            'img/small-season2/21.jpg',
            'img/small-season2/22.jpg',
            'img/small-season2/23.jpg',
            'img/small-season2/24.jpg',
            'img/small-season2/25.jpg',
            'img/small-season2/26.jpg',
            'img/small-season2/27.jpg',
            'img/small-season2/28.jpg',
            'img/small-season2/29.jpg',
            'img/small-season2/30.jpg',
            'img/small-season2/31.jpg',
            'img/small-season2/32.jpg',

        ];

        function makeAnimation(id) {
            if (_.isEmpty(id)) {
                id = "home";
            }
            var someElement = angular.element(document.getElementById(id));
            $document.scrollToElement(someElement, 75, 1000);
        }
        $scope.$on('$viewContentLoaded', function (event) {
            setTimeout(function () {
                makeAnimation($stateParams.id);
            }, 1000);
        });

        $scope.$on('$viewContentLoaded', function (event) {
            $timeout(function () {
                mySwiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    loop: true,
                    effect: 'coverflow',
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    coverflow: {
                        rotate: 50,
                        stretch: 0,
                        depth: 1200,
                        modifier: 1,
                        slideShadows: true,
                    }
                });
            }, 300);
        });

        var abc = _.times(100, function (n) {
            return n;
        });

        var i = 0;
        $scope.buttonClick = function () {
            i++;
            console.log("This is a button Click");
        };

        $scope.alokopen = function () {
            console.log("clla");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/alokmodal.html',
                scope: $scope,
                size: 'lg',

            });
        };

        $scope.anilopen = function () {
            console.log("clla");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/anilmodal.html',
                scope: $scope,
                size: 'lg',
            });
        };

        $scope.harshadaopen = function () {
            console.log("clla");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/harshadamodal.html',
                scope: $scope,
                size: 'lg',

            });
        };

        $scope.kavitaopen = function () {
            console.log("clla");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/kavitamodal.html',
                scope: $scope,
                size: 'lg',

            });
        };

        $scope.nehaopen = function () {
            console.log("clla");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/nehamodal.html',
                scope: $scope,
                size: 'lg',

            });
        };
        $scope.pradeepopen = function () {
            console.log("clla");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/pradeepmodal.html',
                scope: $scope,
                size: 'lg',

            });
        };
        $scope.contestopen = function () {
            console.log("clla");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/contest.html',
                scope: $scope,
                size: 'lg',

            });
        };
        $scope.digitalcourseopen = function () {
            console.log("clla");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/digitalcourse-modal.html',
                scope: $scope,
                size: 'lg',

            });
        };
        $scope.ourpartneropen = function () {
            console.log("clla");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/ourpartner.html',
                scope: $scope,
                size: 'md',

            });
        };

        //Login

        $scope.formData = {};
        $scope.submitForm = function (formData, loginDigitalform) {
            console.log($scope.formData);
            apiService.sendLogin($scope.formData, function (data) {
                console.log(data);
                if (data.value === true) {
                    $state.go('digitalinside');
                }
                  else {
                    $state.go('digitalinside');
                }
            });
        };

    })

    .controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/form.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
        $scope.submitForm = function (data) {
            console.log(data);
            $scope.formSubmitted = true;
        };
    })

    //Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });