// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'ui.select',
    'angularPromiseButtons',
    'toastr',
    'duScroll'
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
        .state('thought-of-the-day', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'ThoughtCtrl'
        })
        .state('digital-course', {
            url: "/digital-course/:userId",
            templateUrl: tempateURL,
            controller: 'DigitalCtrl'
        })
        .state('digital-question', {
            url: "/digital-question/:userId",
            templateUrl: tempateURL,
            controller: 'DigitalQuestionCtrl'
        })
        .state('contest-hub', {
            url: "/1minute-tips",
            templateUrl: tempateURL,
            controller: 'ContestCtrl'
        })
        .state('photo-gallery', {
            url: "/photo-gallery",
            templateUrl: tempateURL,
            controller: 'GalleryCtrl'
        })
        .state('latest-buzz', {
            url: "/latest-buzz/:name",
            templateUrl: tempateURL,
            controller: 'LatestCtrl'
        })
        .state('links', {
            url: "/links",
            templateUrl: tempateURL,
            controller: 'LinksCtrl'
        })
        .state('homeid', {
            url: "/:id",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        });;
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});