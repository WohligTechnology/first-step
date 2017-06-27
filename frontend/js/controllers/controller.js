var mySwiper;
myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $stateParams, $document, $location, $state) {
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
            'img/gallery/1.jpg',
            'img/gallery/1.jpg',
            'img/gallery/1.jpg',
            'img/gallery/1.jpg',
            'img/gallery/1.jpg',
            'img/gallery/1.jpg',
            'img/gallery/1.jpg',
            'img/gallery/1.jpg',
            'img/gallery/1.jpg',
            // 'img/gallery/1.jpg',
            // 'img/gallery/1.jpg',
            // 'img/gallery/1.jpg',
            // 'img/gallery/1.jpg',
            // 'img/gallery/1.jpg',
            // 'img/gallery/1.jpg',
            // 'img/gallery/1.jpg',
            // 'img/gallery/1.jpg',
            // 'img/gallery/1.jpg',

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
                $(".loaders-made .element-one").typed({
                    strings: ["Ldwy pysa D;k <span>?</span>"],
                    startDelay: 0,
                    typeSpeed: 30,
                    showCursor: true,
                    loop: false
                });
                $(".loaders-made .element-two").typed({
                    strings: ["rjDdh dh vksj", ],
                    startDelay: 5600,
                    typeSpeed: 30,
                    showCursor: true,
                    loop: false
                });
                $(".loaders-made .element-two-one").typed({
                    strings: ["igyk dne", ],
                    startDelay: 6600,
                    typeSpeed: 30,
                    showCursor: true,
                    loop: false
                });
                $(".loaders-made .element-three").typed({
                    strings: ["Qkbusal dh", ],
                    startDelay: 12000,
                    typeSpeed: 30,
                    showCursor: true,
                    loop: false
                });
                $(".loaders-made .element-three-one").typed({
                    strings: ["<span> A B C D </span>", ],
                    startDelay: 13000,
                    typeSpeed: 30,
                    showCursor: true,
                    loop: false
                });
                $(".loaders-made .element-four").typed({
                    strings: ["iMksxs]fy[kksxs]", ],
                    startDelay: 19000,
                    typeSpeed: 30,
                    showCursor: true,
                    loop: false
                });
                $(".loaders-made .element-four-one").typed({
                    strings: ["cuksxs uokc", ],
                    startDelay: 21500,
                    typeSpeed: 30,
                    showCursor: true,
                    loop: false
                });
            }, 2000);
        });
        $scope.$on('$viewContentLoaded', function (event) {
            setTimeout(function () {
                makeAnimation($stateParams.id);
            }, 1000);
        });


        $scope.changeURL = function (id) {
            $scope.menutitle = NavigationService.getNavigation(id);
            $state.transitionTo('homeid', {
                id: id
            }, {
                notify: false
            });
            makeAnimation(id);
            $location.replace();
        };

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