var mySwiper;
myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $stateParams, $document, $location, $state, apiService) {
    $scope.template = TemplateService.getHTML("content/home.html");
    TemplateService.title = "Home"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();


    $scope.submitUser = function (formData) {

        apiService.saveUser(formData, function (data) {
            if (data.value === true) {
                $state.go('question-paper', {
                    'userId': data.data._id
                });

            } else {
                if (data.error == 'userExists' || data.error.errors.email.kind == "unique") {
                    $scope.emailexist = true;
                } else {
                    $scope.emailexist = false;
                }
            }

        });
    };
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
        'img/small-season3/120.jpg',
        'img/small-season3/72.jpg',
        'img/small-season3/73.jpg',
        'img/small-season3/74.jpg',
        'img/small-season3/75.jpg',
        'img/small-season3/76.jpg',
        'img/small-season3/77.jpg',
        'img/small-season3/78.jpg',
        'img/small-season3/80.jpg',
        'img/small-season3/81.jpg',
        'img/small-season3/82.jpg',
        'img/small-season3/83.jpg',
        'img/small-season3/84.jpg',
        'img/small-season3/85.jpg',
        'img/small-season3/86.jpg',
        'img/small-season3/87.jpg',
        'img/small-season3/88.jpg',
        'img/small-season3/89.jpg',
        'img/small-season3/90.jpg',
        'img/small-season3/1.jpg',
        'img/small-season3/5.jpg',
        'img/small-season3/7.jpg',
        'img/small-season3/8.jpg',
        'img/small-season3/15.jpg',
        'img/small-season3/17.jpg',
        'img/small-season3/18.jpg',
        'img/small-season3/19.jpg',
        'img/small-season3/21.jpg',
        'img/small-season3/24.jpg',
        'img/small-season3/25.jpg',
        'img/small-season3/26.jpg',
        'img/small-season3/27.jpg',
        'img/small-season3/28.jpg',
        'img/small-season3/29.jpg',
        'img/small-season3/30.jpg',
        'img/small-season3/31.jpg',
        'img/small-season3/32.jpg',
        'img/small-season3/33.jpg',
        'img/small-season3/34.jpg',
        'img/small-season3/35.jpg',
        'img/small-season3/36.jpg',
        'img/small-season3/38.jpg',
        'img/small-season3/39.jpg',
        'img/small-season3/40.jpg',
        'img/small-season3/41.jpg',
        'img/small-season3/42.jpg',
        'img/small-season3/44.jpg',
        'img/small-season3/45.jpg',
        'img/small-season3/46.jpg',
        'img/small-season3/47.jpg',
        'img/small-season3/49.jpg',
        'img/small-season3/53.jpg',
        'img/small-season3/54.jpg',
        'img/small-season3/57.jpg',
        'img/small-season3/58.jpg',
        'img/small-season3/59.jpg',
        'img/small-season3/61.jpg',
        'img/small-season3/62.jpg',
        'img/small-season3/63.jpg',
        'img/small-season3/64.jpg',
        'img/small-season3/65.jpg',
        'img/small-season3/66.jpg',
        'img/small-season3/67.jpg',
        'img/small-season3/68.jpg',
        'img/small-season3/69.jpg',
        'img/small-season3/70.jpg',
        'img/small-season3/91.jpg',
        'img/small-season3/92.jpg',
        'img/small-season3/93.jpg',
        'img/small-season3/94.jpg',
        'img/small-season3/95.jpg',
        'img/small-season3/96.jpg',
        'img/small-season3/97.jpg',
        'img/small-season3/98.jpg',
        'img/small-season3/99.jpg',
        'img/small-season3/100.jpg',
        // 'img/small-season3/101.jpg',
        'img/small-season3/102.jpg',
        // 'img/small-season3/103.jpg',
        // 'img/small-season3/104.jpg',
        // 'img/small-season3/105.jpg',
        'img/small-season3/106.jpg',
        // 'img/small-season3/107.jpg',
        'img/small-season3/108.jpg',
        'img/small-season3/109.jpg',
        'img/small-season3/110.jpg',
        'img/small-season3/111.jpg',
        // 'img/small-season3/112.jpg',
        'img/small-season3/113.jpg',
        'img/small-season3/114.jpg',
        'img/small-season3/115.jpg',
        // 'img/small-season3/116.jpg',
        'img/small-season3/117.jpg',
        'img/small-season3/118.jpg',
        'img/small-season3/119.jpg',
        // 'img/small-season3/120.jpg',
        'img/small-season3/121.jpg',
        'img/small-season3/122.jpg',
        'img/small-season3/123.jpg',
        'img/small-season3/124.jpg',
        // 'img/small-season3/72.jpg',
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
        $scope.submitUser1 = function (data) {
            console.log("inside controller", data);
            apiService.apiWithData("DigitalUser/save", data, function (data) {
                if (data.value == true) {
                    $scope.userId = data.data._id;
                    $state.go('digitalinside', {
                        'userId': data.data._id
                    });
                } else {
                    console.log("***");
                    if (data.error.errors.email.kind == "unique") {
                        $scope.emailexist = true;
                    } else {
                        $scope.emailexist = false;

                    }
                }
                // $scope.userId = data.data._id;
                // $state.go('digitalinside', {
                //     'userId': data.data._id
                // });
                // console.log("digital user inside controller", data.data._id);

            });
        }
        console.log("inside");
        $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/digitalcourse-modal.html',
            scope: $scope,
            size: 'lg',

        });
    };
    $scope.questionopen = function () {
        console.log("Welcome");
        $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/question-modal.html',
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

    // $scope.formData = {};
    // $scope.submitForm = function (formData, loginDigitalform) {
    //     console.log($scope.formData);
    //     apiService.sendLogin($scope.formData, function (data) {
    //         console.log(data);
    //         if (data.value === true) {
    //             $state.go('digitalinside');
    //         } else {
    //             $state.go('digitalinside');
    //         }
    //     });
    // };



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