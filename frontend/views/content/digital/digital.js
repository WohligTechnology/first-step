myApp.controller("DigitalCtrl", function(
  $scope,
  TemplateService,
  NavigationService,
  $timeout,
  toastr,
  $http,
  $stateParams,
  apiService
) {
  $scope.template = TemplateService.getHTML("content/digital/digital.html");
  TemplateService.title = "Digital"; //This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation();
  TemplateService.cssMain = "header-icons";
  $scope.changeURL = function(id) {
    console.log(id);
    $location.path("" + id);
  };
  $scope.submitForm = function(data) {
    console.log(data);
    $scope.formSubmitted = true;
  };
  $scope.id = $stateParams.userId;
  console.log("State param id is:", $scope.id);
  $scope.banking = false;
  $scope.equity = false;
  $scope.mutualfund1 = false;
  $scope.mutualfund2 = false;
  $scope.commodities = false;
  $scope.insurance = false;
  $scope.realestate = false;
  $scope.course4 = false;
  $scope.course5 = false;
  $scope.course6 = false;
  $scope.course7 = false;
  $scope.course8 = false;
  $scope.course9 = false;
  $scope.course10 = false;
  $scope.course11 = false;
  $scope.course12 = false;
  $scope.course13 = false;
  $scope.course14 = false;

  /*******api for bringing all course******** */
  $scope.getAllCourse = function() {
    $scope.data = {};
    apiService.apiWithData("DigitalCourse/getCourses", $scope.data, function(
      result
    ) {
      console.log("courses in backend", result.data);
      $scope.courses = result.data;
      $scope.getPageData();
    });
  };
  /******bringing all course end****** */
  $scope.getAllCourse();
  //getDigitalUserFromId
  $scope.digitalUserId = $stateParams.userId;
  var data1 = {};
  data1._id = $stateParams.userId;

  $scope.isBanking = true;
  $scope.isInsurance = true;
  $scope.isMutualFund1 = true;
  $scope.isMutualFund2 = true;
  $scope.isEquity = true;
  $scope.isRealEstate = true;
  $scope.isCourse4 = true;
  $scope.isCourse5 = true;
  $scope.isCourse6 = true;
  $scope.isCourse7 = true;
  $scope.isCourse8 = true;
  $scope.isCourse9 = true;
  $scope.isCourse10 = true;
  $scope.isCourse11 = true;
  $scope.isCourse12 = true;
  $scope.isCourse13 = true;
  $scope.isCourse14 = true;

  $scope.getPageData = function() {
    apiService.apiWithData("DigitalUser/getDigitalUserFromId", data1, function(
      data
    ) {
      console.log("UserData:", data);
      if (data.data._id) {
        $scope.allUserData = data.data;
        $scope.testGiven = data.data.testGiven;

        _.each($scope.courses, function(data, index) {
          var checkName = data.name;
          _.each($scope.testGiven, function(data) {
            if (checkName == data.name) {
              $scope.courses[index].testGiven = true;
            }
          });
        });
        console.log("$scope.courses", $scope.courses);
        _.find($scope.testGiven, function(obj) {
          if (obj.name == "BANKING") {
            $scope.isBanking = false;
          } else if (obj.name == "INSURANCE") {
            $scope.isInsurance = false;
          } else if (obj.name == "COURSE 1") {
            $scope.isMutualFund = false;
          } else if (obj.name == "COURSE 2") {
            $scope.isMutualFund = false;
          } else if (obj.name == "COURSE 3") {
            $scope.isMutualFund = false;
          } else if (obj.name == "COURSE 4") {
            $scope.isMutualFund = false;
          } else if (obj.name == "COURSE 5") {
            $scope.isMutualFund = false;
          } else if (obj.name == "COURSE 6") {
            $scope.isMutualFund = false;
          } else if (obj.name == "REAL ESTATE") {
            $scope.isRealEstate = false;
          } else if (obj.name == "COURSE 7") {
            $scope.isMutualFund = false;
          } else if (obj.name == "COURSE 8") {
            $scope.isMutualFund = false;
          } else if (obj.name == "COURSE 9") {
            $scope.isMutualFund = false;
          } else if (obj.name == "COURSE 10") {
            $scope.isMutualFund = false;
          } else if (obj.name == "COURSE 11") {
            $scope.isMutualFund = false;
          } else if (obj.name == "COURSE 12") {
            $scope.isMutualFund = false;
          } else if (obj.name == "COURSE 13") {
            $scope.isMutualFund = false;
          } else if (obj.name == "COURSE 14") {
            $scope.isMutualFund = false;
          }
        });
      }
    });
  };

  $scope.variableName = "";
  $scope.variableNameBanking = true;
  $scope.variableNameInsurance = true;

  $scope.showCourses = undefined;
  $scope.displayQuestionSection = function(data, id, testGiven) {
    // console.log("displayQuestionSection////////", data, id, testGiven);
    if (!testGiven) {
      $scope.showCourses = true;
    } else {
      $scope.showCourses = false;
    }
    $.jStorage.set("courseid", id);
    $.jStorage.set("coursename", data);
    if (data == "BANKING") {
      $scope.banking = true;
      $scope.insurance = false;
      $scope.realestate = false;
      $scope.equity = false;
      $scope.mutualfunds1 = false;
      $scope.mutualfunds2 = false;
      $scope.course4 = false;
      $scope.course5 = false;
      $scope.course6 = false;
      $scope.course7 = false;
      $scope.course8 = false;
      $scope.course9 = false;
      $scope.course10 = false;
      $scope.course11 = false;
      $scope.course12 = false;
      $scope.course13 = false;
      $scope.course14 = false;
    } else if (data == "COURSE 3") {
      $scope.banking = false;
      $scope.equity = true;
      $scope.insurance = false;
      $scope.realestate = false;
      $scope.mutualfunds2 = false;
      $scope.mutualfunds1 = false;
      $scope.course4 = false;
      $scope.course5 = false;
      $scope.course6 = false;
      $scope.course7 = false;
      $scope.course8 = false;
      $scope.course9 = false;
      $scope.course10 = false;
      $scope.course11 = false;
      $scope.course12 = false;
      $scope.course13 = false;
      $scope.course14 = false;
    } else if (data == "INSURANCE") {
      $scope.banking = false;
      $scope.insurance = true;
      $scope.realestate = false;
      $scope.equity = false;
      $scope.mutualfunds2 = false;
      $scope.mutualfunds1 = false;
      $scope.course4 = false;
      $scope.course5 = false;
      $scope.course6 = false;
      $scope.course7 = false;
      $scope.course8 = false;
      $scope.course9 = false;
      $scope.course10 = false;
      $scope.course11 = false;
      $scope.course12 = false;
      $scope.course13 = false;
      $scope.course14 = false;
    } else if (data == "COURSE 1") {
      $scope.banking = false;
      $scope.insurance = false;
      $scope.realestate = false;
      $scope.equity = false;
      $scope.mutualfunds2 = false;
      $scope.mutualfunds1 = true;
      $scope.course4 = false;
      $scope.course5 = false;
      $scope.course6 = false;
      $scope.course7 = false;
      $scope.course8 = false;
      $scope.course9 = false;
      $scope.course10 = false;
      $scope.course11 = false;
      $scope.course12 = false;
      $scope.course13 = false;
      $scope.course14 = false;
    } else if (data == "COURSE 2") {
      $scope.banking = false;
      $scope.insurance = false;
      $scope.realestate = false;
      $scope.equity = false;
      $scope.mutualfunds1 = false;
      $scope.mutualfunds2 = true;
      $scope.course4 = false;
      $scope.course5 = false;
      $scope.course6 = false;
      $scope.course7 = false;
      $scope.course8 = false;
      $scope.course9 = false;
      $scope.course10 = false;
      $scope.course11 = false;
      $scope.course12 = false;
      $scope.course13 = false;
      $scope.course14 = false;
    } else if (data == "COURSE 4") {
      $scope.banking = false;
      $scope.insurance = false;
      $scope.realestate = false;
      $scope.equity = false;
      $scope.mutualfunds1 = false;
      $scope.mutualfunds2 = false;
      $scope.course4 = true;
      $scope.course5 = false;
      $scope.course6 = false;
      $scope.course7 = false;
      $scope.course8 = false;
      $scope.course9 = false;
      $scope.course10 = false;
      $scope.course11 = false;
      $scope.course12 = false;
      $scope.course13 = false;
      $scope.course14 = false;
    } else if (data == "REAL ESTATE") {
      $scope.banking = false;
      $scope.insurance = false;
      $scope.equity = false;
      $scope.mutualfunds2 = false;
      $scope.mutualfunds1 = false;
      $scope.realestate = true;
      $scope.course4 = false;
      $scope.course5 = false;
      $scope.course6 = false;
      $scope.course7 = false;
      $scope.course8 = false;
      $scope.course9 = false;
      $scope.course10 = false;
      $scope.course11 = false;
      $scope.course12 = false;
      $scope.course13 = false;
      $scope.course14 = false;
    } else if (data == "COURSE 5") {
      $scope.banking = false;
      $scope.insurance = false;
      $scope.realestate = false;
      $scope.equity = false;
      $scope.mutualfunds1 = false;
      $scope.mutualfunds2 = false;
      $scope.course4 = false;
      $scope.course5 = true;
      $scope.course6 = false;
      $scope.course7 = false;
      $scope.course8 = false;
      $scope.course9 = false;
      $scope.course10 = false;
      $scope.course11 = false;
      $scope.course12 = false;
      $scope.course13 = false;
      $scope.course14 = false;
    } else if (data == "COURSE 6") {
      $scope.banking = false;
      $scope.insurance = false;
      $scope.realestate = false;
      $scope.equity = false;
      $scope.mutualfunds1 = false;
      $scope.mutualfunds2 = false;
      $scope.course4 = false;
      $scope.course5 = false;
      $scope.course6 = true;
      $scope.course7 = false;
      $scope.course8 = false;
      $scope.course9 = false;
      $scope.course10 = false;
      $scope.course11 = false;
      $scope.course12 = false;
      $scope.course13 = false;
      $scope.course14 = false;
    } else if (data == "COURSE 7") {
      $scope.banking = false;
      $scope.insurance = false;
      $scope.realestate = false;
      $scope.equity = false;
      $scope.mutualfunds1 = false;
      $scope.mutualfunds2 = false;
      $scope.course4 = false;
      $scope.course5 = false;
      $scope.course6 = false;
      $scope.course7 = true;
      $scope.course8 = false;
      $scope.course9 = false;
      $scope.course10 = false;
      $scope.course11 = false;
      $scope.course12 = false;
      $scope.course13 = false;
      $scope.course14 = false;
    } else if (data == "COURSE 8") {
      $scope.banking = false;
      $scope.insurance = false;
      $scope.realestate = false;
      $scope.equity = false;
      $scope.mutualfunds1 = false;
      $scope.mutualfunds2 = false;
      $scope.course4 = false;
      $scope.course5 = false;
      $scope.course6 = false;
      $scope.course7 = false;
      $scope.course8 = true;
      $scope.course9 = false;
      $scope.course10 = false;
      $scope.course11 = false;
      $scope.course12 = false;
      $scope.course13 = false;
      $scope.course14 = false;
    } else if (data == "COURSE 9") {
      $scope.banking = false;
      $scope.insurance = false;
      $scope.realestate = false;
      $scope.equity = false;
      $scope.mutualfunds1 = false;
      $scope.mutualfunds2 = false;
      $scope.course4 = false;
      $scope.course5 = false;
      $scope.course6 = false;
      $scope.course7 = false;
      $scope.course8 = false;
      $scope.course9 = true;
      $scope.course10 = false;
      $scope.course11 = false;
      $scope.course12 = false;
      $scope.course13 = false;
      $scope.course14 = false;
    } else if (data == "COURSE 10") {
      $scope.banking = false;
      $scope.insurance = false;
      $scope.realestate = false;
      $scope.equity = false;
      $scope.mutualfunds1 = false;
      $scope.mutualfunds2 = false;
      $scope.course4 = false;
      $scope.course5 = false;
      $scope.course6 = false;
      $scope.course7 = false;
      $scope.course8 = false;
      $scope.course9 = false;
      $scope.course10 = true;
      $scope.course11 = false;
      $scope.course12 = false;
      $scope.course13 = false;
      $scope.course14 = false;
    } else if (data == "COURSE 11") {
      $scope.banking = false;
      $scope.insurance = false;
      $scope.realestate = false;
      $scope.equity = false;
      $scope.mutualfunds1 = false;
      $scope.mutualfunds2 = false;
      $scope.course4 = false;
      $scope.course5 = false;
      $scope.course6 = false;
      $scope.course7 = false;
      $scope.course8 = false;
      $scope.course9 = false;
      $scope.course10 = false;
      $scope.course11 = true;
      $scope.course12 = false;
      $scope.course13 = false;
      $scope.course14 = false;
    } else if (data == "COURSE 12") {
      $scope.banking = false;
      $scope.insurance = false;
      $scope.realestate = false;
      $scope.equity = false;
      $scope.mutualfunds1 = false;
      $scope.mutualfunds2 = false;
      $scope.course4 = false;
      $scope.course5 = false;
      $scope.course6 = false;
      $scope.course7 = false;
      $scope.course8 = false;
      $scope.course9 = false;
      $scope.course10 = false;
      $scope.course11 = false;
      $scope.course12 = true;
      $scope.course13 = false;
      $scope.course14 = false;
    } else if (data == "COURSE 13") {
      $scope.banking = false;
      $scope.insurance = false;
      $scope.realestate = false;
      $scope.equity = false;
      $scope.mutualfunds1 = false;
      $scope.mutualfunds2 = false;
      $scope.course4 = false;
      $scope.course5 = false;
      $scope.course6 = false;
      $scope.course7 = false;
      $scope.course8 = false;
      $scope.course9 = false;
      $scope.course10 = false;
      $scope.course11 = false;
      $scope.course12 = false;
      $scope.course13 = true;
      $scope.course14 = false;
    } else if (data == "COURSE 14") {
      $scope.banking = false;
      $scope.insurance = false;
      $scope.realestate = false;
      $scope.equity = false;
      $scope.mutualfunds1 = false;
      $scope.mutualfunds2 = false;
      $scope.course4 = false;
      $scope.course5 = false;
      $scope.course6 = false;
      $scope.course7 = false;
      $scope.course8 = false;
      $scope.course9 = false;
      $scope.course10 = false;
      $scope.course11 = false;
      $scope.course12 = false;
      $scope.course13 = false;
      $scope.course14 = true;
    }
    $scope.coursedata = [
      {
        id: "equity",
        video: "xB6yOcIOhMs"
      },
      {
        id: "mutualfunds1",
        video: "Rj7SHz4xB4Q"
      },
      {
        id: "mutualfunds2",
        video: "pKt6evGdEPY"
      },
      {
        id: "course4",
        video: "Oae5WPsIHqk"
      },
      {
        id: "course5",
        video: "Y7vF7TIozmY&t=215s"
      },
      {
        id: "course6",
        video: "iVK1ZfHwxZ4"
      },
      {
        id: "course7",
        video: "numlG7SjK2c"
      },
      {
        id: "course8",
        video: "IgFLu-bS_90"
      },
      {
        id: "course9",
        video: "Q5v25Xbrmzg"
      },
      {
        id: "course10",
        video: "qZekb2T1vFk"
      },
      {
        id: "course11",
        video: "3RrllsPsYEI"
      },
      {
        id: "course12",
        video: "WPH0axg-XlE"
      },
      {
        id: "course13",
        video: "ZbDPfy7Kej8"
      },
      {
        id: "course13",
        video: "BwtInI5iWT8"
      }
    ];
  };
  $scope.digitalMutualfund = [
    {
      img: "F1zxABRFV8g",
      url: "F1zxABRFV8g"
    },
    {
      img: "jet7j7_haUw",
      url: "jet7j7_haUw"
    },
    {
      img: "JQFSqwbOoA0",
      url: "JQFSqwbOoA0"
    },
    {
      img: "u8rLSglEgKk",
      url: "u8rLSglEgKk"
    },
    {
      img: "98klaFbH1xU",
      url: "98klaFbH1xU"
    },
    {
      img: "2THf7pPNkIo",
      url: "2THf7pPNkIo"
    }
  ];
  $scope.thankyou = function() {
    console.log("clla");
    $uibModal.open({
      animation: true,
      templateUrl: "views/modal/thanks.html",
      scope: $scope,
      size: "lg"
    });
  };
});
