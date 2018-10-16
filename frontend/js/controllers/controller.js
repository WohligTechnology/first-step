myApp.controller('LinksCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/links.html");
        TemplateService.title = "Links"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })

    //controller for thought of the day
    // .controller('ThoughtCtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout, $state) {
    //     $scope.template = TemplateService.getHTML("content/thought.html");
    //     TemplateService.title = "Thought Of The Day"; // This is the Title of the Website
    //     $scope.navigation = NavigationService.getNavigation();
    //     TemplateService.header = "";
    //     TemplateService.footer = "";

    //     $scope.showQuotes = $.jStorage.get("showQuotes");

    //     $scope.closeOverlay = function () {
    //         $.jStorage.set("showQuotes", true);
    //         console.log("**********************");
    //         $("#overlay").hide();
    //         $state.go("home");
    //     }
    //     $timeout(function () {
    //         $("#overlay").hide();
    //         $state.go("home");
    //     }, 10000);
    // })

    // Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    })

    //Footer Controller
    .controller('FooterCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $state, $uibModal, $document, $location) {
        console.log("inside footer ctrl");
        $scope.goToAnchor = function (id) {
            var current = $state.current;
            if ($state.current.name == "homeid") {
                var someElement = angular.element(document.getElementById(id));
                $document.scrollToElement(someElement, 70, 1500);
            } else {
                if (id == "home") {
                    $state.go("home");
                } else {
                    $state.go("home");
                    $timeout(function () {
                        var someElement = angular.element(document.getElementById(id));
                        $document.scrollToElement(someElement, 70, 1500);
                        console.log(id);
                        $location.path("/" + id);
                    }, 800);
                }
            }
        };
        //modal example
        $scope.modalOpen = function () {
            $scope.loginModal = $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/login.html',
                scope: $scope,
                size: 'lg',
            });
        };
    });