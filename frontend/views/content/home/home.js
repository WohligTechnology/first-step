var mySwiper;
myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal, $state, apiService,$location,$document) {
    $scope.template = TemplateService.getHTML("content/home/home.html");
    TemplateService.title = "Home"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    $scope.goToAnchor = function (id) {
        var someElement = angular.element(document.getElementById(id));
        $document.scrollToElement(someElement, 70, 2500);
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
    }, 100);

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
    $scope.aboutModal= $uibModal.open({
        animation: true,
        templateUrl: 'views/modal/about.html',
        scope: $scope,
        size: 'lg',
        backdrop:'static',
    });
};

    //modal example
    $scope.modalOpen = function () {
        $scope.loginModal= $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/login.html',
            scope: $scope,
            size: 'lg',
            backdrop:'static',
        });
    };

    //login function
    $scope.login = function (data) {
        console.log("data", data);
        NavigationService.apiCallWithData("DigitalUser/saveValidUser", data, function (data) {
            console.log("%%%%%%%%%%%%%%%%%%%%%%%", data)
            if (data.data._id) {
                $state.go("digital-course", {
                    'userId': data.data._id
                });
                $scope.loginModal.close();
            } else {
                console.log("invalid Email");
            }
        });
    }

    $scope.homeSlide = [
        'img/season4/1.jpg',
        'img/season4/2.jpg',
        'img/season4/3.jpg',
        'img/season4/4.jpg',
        'img/season4/5.jpg',
        'img/season4/6.jpg',
        'img/season4/7.jpg',
        'img/season4/8.jpg',
        'img/season4/9.jpg',
        'img/season4/10.jpg',
        'img/season4/11.jpg',
        'img/season4/12.jpg',
        'img/season4/13.jpg',
        'img/season4/14.jpg',
        'img/season4/15.jpg',
        'img/season4/16.jpg',
        'img/season4/17.jpg',
        'img/season4/18.jpg',
        'img/season4/19.jpg',
        'img/season4/20.jpg',
        'img/season4/21.jpg',
        'img/season4/22.jpg',
        'img/season4/23.jpg'
    ];
})