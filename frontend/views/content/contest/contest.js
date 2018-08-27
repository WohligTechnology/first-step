
myApp.controller('ContestCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/contest/contest.html");
    TemplateService.title = "Contest"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.cssMain = "header-icons";
    $scope.season4 = [{
        imageUrl: "QHkTqmexZjg",
        videoUrl: "QHkTqmexZjg",
        episodeno: "Tip No. 1",
        searchName: "Debts Assets",
    }, {
        imageUrl: "ZOkWJZgERNE",
        videoUrl: "ZOkWJZgERNE",
        episodeno: "Tip No. 2",
        searchName: "Tips Equity",
    },
    {
        imageUrl: "vUbwfD_G9Jg",
        videoUrl: "vUbwfD_G9Jg",
        episodeno: "Tip No. 3",
        searchName: "Tips Real States",
    }];
})