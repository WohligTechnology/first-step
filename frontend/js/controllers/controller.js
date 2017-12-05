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
        'img/small-season3/212.jpg',
        'img/small-season3/234.jpg',
        'img/small-season3/233.jpg',
        'img/small-season3/232.jpg',
        'img/small-season3/231.jpg',
        'img/small-season3/230.jpg',
        // 'img/small-season3/229.jpg',
        // 'img/small-season3/228.jpg',
        'img/small-season3/227.jpg',
        // 'img/small-season3/226.jpg',
        // 'img/small-season3/225.jpg',
        // 'img/small-season3/224.jpg',
        'img/small-season3/223.jpg',
        // 'img/small-season3/222.jpg',
        'img/small-season3/221.jpg',
        'img/small-season3/220.jpg',
        'img/small-season3/219.jpg',
        'img/small-season3/218.jpg',
        'img/small-season3/217.jpg',
        'img/small-season3/216.jpg',
        'img/small-season3/215.jpg',
        'img/small-season3/214.jpg',
        'img/small-season3/213.jpg',
      

        'img/small-season3/211.jpg',
        'img/small-season3/181.jpg',
        'img/small-season3/182.jpg',
        'img/small-season3/183.jpg',
        'img/small-season3/184.jpg',
        'img/small-season3/185.jpg',
        'img/small-season3/186.jpg',
        'img/small-season3/187.jpg',
        'img/small-season3/188.jpg',
        'img/small-season3/189.jpg',
        'img/small-season3/190.jpg',
        'img/small-season3/191.jpg',
        'img/small-season3/192.jpg',
        'img/small-season3/193.jpg',
        'img/small-season3/194.jpg',
        'img/small-season3/195.jpg',
        'img/small-season3/196.jpg',
        'img/small-season3/197.jpg',
        'img/small-season3/198.jpg',
        'img/small-season3/199.jpg',
        'img/small-season3/200.jpg',
        'img/small-season3/201.jpg',
        'img/small-season3/202.jpg',
        'img/small-season3/203.jpg',
        'img/small-season3/204.jpg',
        'img/small-season3/205.jpg',
        'img/small-season3/206.jpg',
        'img/small-season3/207.jpg',
        'img/small-season3/208.jpg',
        'img/small-season3/209.jpg',
        'img/small-season3/210.jpg',
        'img/small-season3/179.jpg',
        'img/small-season3/161.jpg',
        'img/small-season3/162.jpg',
        'img/small-season3/163.jpg',
        'img/small-season3/164.jpg',
        'img/small-season3/165.jpg',
        'img/small-season3/166.jpg',
        'img/small-season3/167.jpg',
        'img/small-season3/168.jpg',
        'img/small-season3/169.jpg',
        'img/small-season3/170.jpg',
        'img/small-season3/171.jpg',
        'img/small-season3/172.jpg',
        'img/small-season3/173.jpg',
        'img/small-season3/174.jpg',
        'img/small-season3/175.jpg',
        'img/small-season3/176.jpg',
        'img/small-season3/177.jpg',
        'img/small-season3/178.jpg',
        'img/small-season3/180.jpg',
        'img/small-season3/148.jpg',
        'img/small-season3/143.jpg',
        'img/small-season3/144.jpg',
        'img/small-season3/145.jpg',
        'img/small-season3/146.jpg',
        'img/small-season3/147.jpg',
        'img/small-season3/149.jpg',
        'img/small-season3/150.jpg',
        'img/small-season3/151.jpg',
        'img/small-season3/152.jpg',
        'img/small-season3/153.jpg',
        'img/small-season3/154.jpg',
        'img/small-season3/155.jpg',
        'img/small-season3/156.jpg',
        'img/small-season3/157.jpg',
        'img/small-season3/158.jpg',
        'img/small-season3/159.jpg',
        'img/small-season3/160.jpg',
        'img/small-season3/127.jpg',
        'img/small-season3/141.jpg',
        'img/small-season3/140.jpg',
        'img/small-season3/139.jpg',
        'img/small-season3/138.jpg',
        'img/small-season3/137.jpg',
        'img/small-season3/136.jpg',
        'img/small-season3/135.jpg',
        'img/small-season3/134.jpg',
        'img/small-season3/133.jpg',
        'img/small-season3/132.jpg',
        'img/small-season3/131.jpg',
        'img/small-season3/130.jpg',
        'img/small-season3/129.jpg',
        'img/small-season3/128.jpg',
        'img/small-season3/126.jpg',
        'img/small-season3/125.jpg',
        'img/small-season3/120.jpg',
        'img/small-season3/124.jpg',
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
        'img/small-season3/102.jpg',
        'img/small-season3/106.jpg',
        'img/small-season3/108.jpg',
        'img/small-season3/109.jpg',
        'img/small-season3/110.jpg',
        'img/small-season3/111.jpg',
        'img/small-season3/113.jpg',
        'img/small-season3/114.jpg',
        'img/small-season3/115.jpg',
        'img/small-season3/117.jpg',
        'img/small-season3/118.jpg',
        'img/small-season3/119.jpg',
        'img/small-season3/121.jpg',
        'img/small-season3/122.jpg',
        'img/small-season3/123.jpg',
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
            apiService.apiWithData("DigitalUser/saveValidUser", data, function (data) {


                // if (data.value == true) {
                if (data.data._id) {
                    console.log("$scope.userId", data.data._id);
                    $scope.userId = data.data._id;
                    $state.go('digitalinside', {
                        'userId': data.data._id
                    });
                } else {
                    $scope.errorDigitalCourseLogin = "Something Went Wrong!!!";
                }

                // } else {
                //     console.log("***");
                //     if (data.error.errors.email.kind == "unique") {
                //         $scope.emailexist = true;
                //     } else {
                //         $scope.emailexist = false;

                //     }
                // }
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