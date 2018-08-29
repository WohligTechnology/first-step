var mySwiper;
myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal, $state, apiService, $location, $document) {
    $scope.template = TemplateService.getHTML("content/home/home.html");
    TemplateService.title = "Home"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    $scope.goToAnchor = function (id) {
        var someElement = angular.element(document.getElementById(id));
        $document.scrollToElement(someElement, 70, 1500);
        console.log(id);
        $location.path("/" + id);
    };
    $timeout(function () {
        mySwiper = new Swiper('.swiper-container', {
            initialSlide: 3,
            autoplay: {
                delay: 1700,
            },
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }, 500);

    $scope.suppliers = [{
        name: "Casey Slusse",
        supplier: "Regular Fit Cotton Top",
        invoice: "#1024587 invoice is Pending",
        img: 'img/mike.png'
    }, {
        name: " Dee Schlatter",
        supplier: "Regular Fit Cotton Top",
        invoice: "#1024588 invoice is Pending",
        img: 'img/mike.png'
    }, {
        name: " Byron Mccully",
        supplier: "Regular Fit Cotton Top",
        invoice: "#1024589 invoice is Pending",
        img: 'img/mike.png'
    }, {
        name: " Prince Stucky",
        supplier: "Regular Fit Cotton Top",
        invoice: "#1024590 invoice is Pending",
        img: 'img/mike.png'
    }];

    //about more modal
    $scope.aboutMore = function () {
        $scope.aboutModal = $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/about.html',
            scope: $scope,
            size: 'lg',
            backdrop: 'static',
        });
    };

    //modal example
    $scope.modalOpen = function () {
        $scope.loginModal = $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/login.html',
            scope: $scope,
            size: 'lg',
            backdrop: 'static',
        });
    };

    //login function
    $scope.login = function (data) {
        console.log("data", data);
        NavigationService.apiCallWithData("DigitalUser/saveValidUser", data, function (data) {
            console.log("%%%%%%%%%%%%%%%%%%%%%%%", data);
            if (data.data._id && (data.data.testGiven.length < 1)) {
                $state.go("digital-course", {
                    'userId': data.data._id
                });
                $scope.loginModal.close();
            } else {
                $scope.error = "Test already has been given from this email."
            }
        });
    }

    $scope.homeSlide = [
        'img/season4/24.jpg',
        'img/season4/25.jpg',
        'img/season4/26.jpg',
        'img/season4/27.jpg',
        'img/season4/28.jpg',
        'img/season4/29.jpg',
        'img/season4/30.jpg',
        'img/season4/31.jpg',
        'img/season4/32.jpg'
    ];
})