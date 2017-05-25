myApp.controller('headerCtrl', function ($scope, TemplateService, $uibModal) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
    $scope.contactopen = function () {
        console.log("clla");
        $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/contact-modal.html',
            scope: $scope,
            size: 'lg',

        });
    };
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $(".header-border").css("opacity", '0');
        } else {
            $(".header-border").css("opacity", '1');
        }
    });
});