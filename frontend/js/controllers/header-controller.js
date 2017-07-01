myApp.controller('headerCtrl', function ($scope, TemplateService, $uibModal, $location,apiService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
    $scope.openAbout = function () {
        $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/about-modal.html',
            scope: $scope,
            size: 'lg',
        });
    };
    $scope.openExpertMain = function () {
        $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/ask-expert-main.html',
            scope: $scope,
            size: 'md',
        });
    };
    $scope.askexpertopen = function () {
        console.log("clla");
        $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/ask-expert.html',
            scope: $scope,
            windowClass: 'ask-modal'

        });
    };
    $scope.openContact = function () {
        console.log("clla");
        $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/contact-modal.html',
            scope: $scope,
            size: 'sm',
        });
    };
    $scope.changeURL = function (id) {
        console.log(id);
        $location.path("" + id);
    };
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $(".header-border").css("opacity", '0');
            $(".img-width-change").css("width", '10%');
            $(".navbar-color-change").css("background", 'rgba(0, 0, 0, 0.54)');

        } else {
            $(".header-border").css("opacity", '1');
            $(".navbar-color-change").css("background", 'transparent');
            $(".img-width-change").css("width", '25%');
        }
    });


    //Expert Questioner
        $scope.submitForm = function (formData) {
            formData.nameexpert="MR.ANIL SINGHVI";
            console.log(formData);
            apiService.sendEnquiry(formData, function (data) {
            });
        };

});