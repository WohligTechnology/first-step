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
    $scope.mutualfund = false;
    $scope.commodities = false;
    $scope.insurance = false;
    $scope.realestate = false;

    /*******api for bringing all course******** */
    apiService.apiWithoutData("DigitalCourse/search", function (result) {
        console.log(result.data.results);
        $scope.courses = result.data.results;
    })
    /******bringing all course end****** */

    //getDigitalUserFromId
    $scope.digitalUserId = $stateParams.userId;
    var data1 = {};
    data1._id = $stateParams.userId;

    $scope.isBanking = true;
    $scope.isInsurance = true;
    $scope.isMutualFund = true;
    $scope.isRealEstate = true;

    apiService.apiWithData("DigitalUser/getDigitalUserFromId", data1, function (data) {
        console.log("UserData:", data);
        if (data.data._id) {
            $scope.allUserData = data.data;
            $scope.testGiven = data.data.testGiven;
            _.find($scope.testGiven, function (obj) {
                if (obj.name == "BANKING") {
                    $scope.isBanking = false;
                } else if (obj.name == "INSURANCE") {
                    $scope.isInsurance = false;
                } else if (obj.name == "MUTUAL FUNDS") {
                    $scope.isMutualFund = false;
                } else if (obj.name == "REAL ESTATE") {
                    $scope.isRealEstate = false;
                }
            });

        }
    });
    //getDigitalUserFromId Ends here

    $scope.variableName = "";
    $scope.variableNameBanking = true;
    $scope.variableNameInsurance = true;
    $scope.gettingTestGiven = function (data, id) {
        console.log("data:", data, "id", id);
        console.log("$scope.testGiven", $scope.testGiven);
        // var testGivenForBanking="";

        _.find($scope.testGiven, function (obj) {
            // $scope.
        });


        // _.forEach($scope.testGiven, function (singleObject) {

        //     console.log("singleObject", singleObject);
        //     if (singleObject._id == id) {
        //         if (singleObject.name == "BANKING") {
        //             $scope.variableNameBanking = false;
        //         } else if (singleObject.name == "INSURANCE") {
        //             $scope.variableNameInsurance = false;
        //         }
        //         // $scope.variableNameBanking = singleObject.name;
        //         // console.log("$scope.variableName in if", $scope.variableName);
        //     }
        // });

        // if(!_.find($scope.testGiven), {_id: id}) {
        // $scope.variableName=$scope.testGiven[0].name;
        // console.log("$scope.variableName",$scope.variableName);
        // }
        // if (data == 'BANKING') {
        //     $scope.banking = true;
        //     $scope.insurance = false;

        // } else if (data == 'INSURANCE') {
        //     $scope.banking = false;
        //     $scope.insurance = true;
        // }
    };


    // console.log("data:",data,"id",id);
    //         console.log("$scope.testGiven",$scope.testGiven);
    //         $scope.testGivenForBanking=false;
    //         $scope.testGivenForInsurance=false;
    //         _.forEach($scope.testGiven, function(singleObject) {

    //             console.log("singleObject",singleObject);
    //             if(singleObject._id==id){
    //                 $scope.variableName=singleObject.name;
    //                 if(singleObject.name=='BANKING'){
    //                     $scope.testGivenForBanking=true;
    //                 }else if(singleObject.name=='INSURANCE'){
    //                     $scope.testGivenForInsurance=true;
    //                 }else{
    //                     console.log("Not given a single test");
    //                 }
    //                 console.log("$scope.variableName in if",$scope.variableName);
    //             }else{
    //                 $scope.variableName="";
    //                 console.log("$scope.variableName in else",$scope.variableName);
    //             }
    //             });


    $scope.displayQuestionSection = function (data, id) {
        $.jStorage.set("courseid", id);
        $.jStorage.set("coursename", data);
        if (data == 'BANKING') {
            $scope.banking = true;
            $scope.insurance = false;
            $scope.realestate = false;
            $scope.mutualfunds = false;

        } else if (data == 'INSURANCE') {
            $scope.banking = false;
            $scope.insurance = true;
            $scope.realestate = false;
            $scope.mutualfunds = false;
        } else if (data == 'MUTUAL FUNDS') {
            $scope.banking = false;
            $scope.insurance = false;
            $scope.realestate = false;
            $scope.mutualfunds = true;
        } else if (data == 'REAL ESTATE') {
            $scope.banking = false;
            $scope.insurance = false;
            $scope.mutualfunds = false;
            $scope.realestate = true;
        }

        //     if ($scope.banking) {
        //         $scope.banking = false;
        //     } else {
        //         $scope.banking = true;
        //     }
        // } else if (data == 'equity') {
        //     $scope.equity = true;
        // } else if (data == 'mutualfund') {
        //     $scope.mutualfund = true;
        // } else if (data == 'commodities') {
        //     $scope.commodities = true;
        // } else if (data == 'insurance') {
        //     $scope.insurance = true;
        // }
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