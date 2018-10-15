myApp.controller('DigitalCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $stateParams, apiService) {
    $scope.template = TemplateService.getHTML("content/digital/digital.html");
    TemplateService.title = "Digital"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.cssMain = "header-icons";
    $scope.changeURL = function (id) {
        console.log(id);
        $location.path("" + id);
    };
    $scope.submitForm = function (data) {
        console.log(data);
        $scope.formSubmitted = true;
    };
    $scope.id = $stateParams.userId;
    console.log("State param id is:", $scope.id)
    $scope.banking = false;
    $scope.equity = false;
    $scope.mutualfund1 = false;
    $scope.mutualfund2 = false;
    $scope.commodities = false;
    $scope.insurance = false;
    $scope.realestate = false;
    $scope.course4 = false;

    /*******api for bringing all course******** */
    $scope.getAllCourse = function () {
        apiService.apiWithoutData("DigitalCourse/search", function (result) {
            console.log("courses in backend", result.data.results);
            $scope.courses = result.data.results;
            $scope.getPageData();
        })
    }
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

    $scope.getPageData = function () {
        apiService.apiWithData("DigitalUser/getDigitalUserFromId", data1, function (data) {
            console.log("UserData:", data);
            if (data.data._id) {
                $scope.allUserData = data.data;
                $scope.testGiven = data.data.testGiven;

                _.each($scope.courses, function (data, index) {
                    var checkName = data.name;
                    _.each($scope.testGiven, function (data) {
                        if (checkName == data.name) {
                            $scope.courses[index].testGiven = true;
                        }
                    });
                });
                console.log("$scope.courses", $scope.courses);
                _.find($scope.testGiven, function (obj) {
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
                    } else if (obj.name == "REAL ESTATE") {
                        $scope.isRealEstate = false;
                    }
                });

            }
        });
    };

    $scope.variableName = "";
    $scope.variableNameBanking = true;
    $scope.variableNameInsurance = true;

    $scope.showCourses = undefined;
    $scope.displayQuestionSection = function (data, id, testGiven) {
        if (!testGiven) {
            $scope.showCourses = true;
        } else {
            $scope.showCourses = false;
        }
        $.jStorage.set("courseid", id);
        $.jStorage.set("coursename", data);
        if (data == 'BANKING') {
            $scope.banking = true;
            $scope.insurance = false;
            $scope.realestate = false;
            $scope.equity = false;
            $scope.mutualfunds1 = false;
            $scope.mutualfunds2 = false;
            $scope.course4 = false;
        } else if (data == 'COURSE 3') {
            $scope.banking = false;
            $scope.equity = true;
            $scope.insurance = false;
            $scope.realestate = false;
            $scope.mutualfunds2 = false;
            $scope.mutualfunds1 = false;
            $scope.course4 = false;
        } else if (data == 'INSURANCE') {
            $scope.banking = false;
            $scope.insurance = true;
            $scope.realestate = false;
            $scope.equity = false;
            $scope.mutualfunds2 = false;
            $scope.mutualfunds1 = false;
            $scope.course4 = false;
        } else if (data == 'COURSE 1') {
            $scope.banking = false;
            $scope.insurance = false;
            $scope.realestate = false;
            $scope.equity = false;
            $scope.mutualfunds2 = false;
            $scope.mutualfunds1 = true;
            $scope.course4 = false;
        } else if (data == 'COURSE 2') {
            $scope.banking = false;
            $scope.insurance = false;
            $scope.realestate = false;
            $scope.equity = false;
            $scope.mutualfunds1 = false;
            $scope.mutualfunds2 = true;
            $scope.course4 = false;
        } else if (data == 'COURSE 4') {
            $scope.banking = false;
            $scope.insurance = false;
            $scope.realestate = false;
            $scope.equity = false;
            $scope.mutualfunds1 = false;
            $scope.mutualfunds2 = false;
            $scope.course4 = true;
        } else if (data == 'REAL ESTATE') {
            $scope.banking = false;
            $scope.insurance = false;
            $scope.equity = false;
            $scope.mutualfunds2 = false;
            $scope.mutualfunds1 = false;
            $scope.realestate = true;
            $scope.course4 = false;
        }
        $scope.coursedata = [{
            id: "equity",
            video: "xB6yOcIOhMs"
        }, {
            id: "mutualfunds1",
            video: "Rj7SHz4xB4Q"
        }, {
            id: "mutualfunds2",
            video: "pKt6evGdEPY"
        }, {
            id: "course4",
            video: "Oae5WPsIHqk"
        }];
    };
    $scope.digitalMutualfund = [{
        img: "F1zxABRFV8g",
        url: "F1zxABRFV8g"
    }, {
        img: "jet7j7_haUw",
        url: "jet7j7_haUw"
    }, {
        img: "JQFSqwbOoA0",
        url: "JQFSqwbOoA0"
    }, {
        img: "u8rLSglEgKk",
        url: "u8rLSglEgKk"
    }, {
        img: "98klaFbH1xU",
        url: "98klaFbH1xU"
    }, {
        img: "2THf7pPNkIo",
        url: "2THf7pPNkIo"
    }]
    $scope.thankyou = function () {
        console.log("clla");
        $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/thanks.html',
            scope: $scope,
            size: 'lg',
        });
    };
})