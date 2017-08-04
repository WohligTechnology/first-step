// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    // 'ngAnimate',
    // 'ngSanitize',
    'angular-flexslider',
    'duScroll'
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })

        .state('minutestips', {
            url: "/minutestips",
            templateUrl: tempateURL,
            controller: 'MinutestipsCtrl'
        })
        .state('gallery', {
            url: "/gallery",
            templateUrl: tempateURL,
            controller: 'GalleryCtrl'
        })
        .state('episode', {
            url: "/episode",
            templateUrl: tempateURL,
            controller: 'EpisodeCtrl'
        })
        .state('digitalcourse', {
            url: "/digitalcourse",
            templateUrl: tempateURL,
            controller: 'DigitalCourseCtrl'
        })
        .state('digitalinside', {
            url: "/digitalinside",
            templateUrl: tempateURL,
            controller: 'DigitalInsideCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: tempateURL,
            controller: 'FormCtrl'
        })
        .state('partnerspage', {
            url: "/partnerspage",
            templateUrl: tempateURL,
            controller: 'PartnersCtrl'
        })
         .state('question-paper', {
            url: "/question-paper",
            templateUrl: tempateURL,
            controller: 'QuestionPaperCtrl'
        })

        .state('homeid', {
            url: "/:id",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});