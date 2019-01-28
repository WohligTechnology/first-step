myApp.controller("GalatFehmiCtrl", function(
  $scope,
  TemplateService,
  NavigationService,
  $timeout,
  toastr,
  $http
) {
  $scope.template = TemplateService.getHTML(
    "content/galat-fehmi/galat-fehmi.html"
  );
  TemplateService.title = "Galat Fehmi"; //This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation();
  TemplateService.cssMain = "header-icons";
  $scope.galatFaimi = [
    {
      imageUrl: "gb96iNnGpz8",
      videoUrl: "gb96iNnGpz8",
      episodeno: "",
      searchName: "Term Insurance"
    },
    {
      imageUrl: "GdWoOusHnzY",
      videoUrl: "GdWoOusHnzY",
      episodeno: "",
      searchName: "TAX ON"
    },
    {
      imageUrl: "h79k2IuIpAs",
      videoUrl: "h79k2IuIpAs",
      episodeno: "",
      searchName: "EXIT LOAD"
    },
    {
      imageUrl: "dAG4W3Md8Bw",
      videoUrl: "dAG4W3Md8Bw",
      episodeno: "",
      searchName: "GIFT TAX"
    },
    {
      imageUrl: "LnO0Mo0VkEQ",
      videoUrl: "LnO0Mo0VkEQ",
      episodeno: "",
      searchName: "BANK LOAN"
    },
    {
      imageUrl: "heLytqg1d3A",
      videoUrl: "heLytqg1d3A",
      episodeno: "",
      searchName: "DEBT INVESTMENT"
    },
    {
      imageUrl: "ko1TRVxogeo",
      videoUrl: "ko1TRVxogeo",
      episodeno: "",
      searchName: "DIVERSIFIED PORTFOLIO"
    },
    {
      imageUrl: "FMOHBrGTVK0",
      videoUrl: "FMOHBrGTVK0",
      episodeno: "",
      searchName: "HEALTH INSURANCE"
    },
    {
      imageUrl: "DchS8ISjWrs",
      videoUrl: "DchS8ISjWrs",
      episodeno: "",
      searchName: "INVEST NOW"
    },
    {
      imageUrl: "IPR8olSS_4I",
      videoUrl: "IPR8olSS_4I",
      episodeno: "",
      searchName: "SMALL INVESTMENT"
    }
  ];
});
