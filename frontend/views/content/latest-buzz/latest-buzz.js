myApp.controller("LatestCtrl", function(
  $scope,
  TemplateService,
  NavigationService,
  $timeout,
  toastr,
  $http,
  $state,
  $location,
  $stateParams
) {
  $scope.template = TemplateService.getHTML(
    "content/latest-buzz/latest-buzz.html"
  );
  TemplateService.title = "Latest Buzz"; //This is the Title of the Website
  NavigationService.getSeo($stateParams.name, function(seo) {
    console.log(seo);
    TemplateService.title = seo.data.title;
    TemplateService.desc = seo.data.description;
    TemplateService.abstract = seo.data.abstract;
    TemplateService.keywords = seo.data.keywords;
  });
  $scope.navigation = NavigationService.getNavigation();
  TemplateService.cssMain = "header-icons";
  $scope.myUrl = $location.absUrl();
  $scope.currentMonth = new Date().getMonth();
  // console.log("$scope.myUrl", $scope.myUrl);
  $scope.blogData = "Common-mistakes-while-filing-Income-Tax-Return-Form-India";
  // console.log("$stateParams.name..............", $stateParams.name);
  NavigationService.getBlogs(function(result) {
    $scope.blogs = result.data;
  });
  $scope.blogData = {};
  $scope.blogData.filter = {
    blogId: $stateParams.name
  };
  NavigationService.getselectedBlog($scope.blogData, function(result) {
    $scope.individualBlog = result;
  });
});
