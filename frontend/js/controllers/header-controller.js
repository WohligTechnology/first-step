myApp.controller('headerCtrl', function ($scope, TemplateService,$timeout) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $(".img-width-change").css("width", '7%');
            $(".navbar-color-change").css("background", 'rgba(0, 0, 0, 0.8)');

        } else {
            $(".img-width-change").css("width", '13%');
            $(".navbar-color-change").css("background", 'transparent');
        }
    });
});