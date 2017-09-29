myApp.controller('DigitalInsideCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal, apiService) {
    $scope.template = TemplateService.getHTML("content/digitalinside.html");
    TemplateService.title = "Digitalinside"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.formSubmitted = false;
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

    /*******api for bringing all course******** */
    apiService.apiWithoutData("DigitalCourse/search", (result) => {
        console.log(result.data.results);
        $scope.courses = result.data.results;
    })
    /******bringing all course end****** */

    //getDigitalUserFromId
    $scope.digitalUserId = $stateParams.userId;
    var data1 = {};
    data1._id = $stateParams.userId;

    $scope.isBanking=true;
    $scope.isInsurance=true;
    $scope.isMutualFund=true;

    apiService.apiWithData("DigitalUser/getDigitalUserFromId", data1, function (data) {
        console.log("UserData:", data);
        if (data.data._id) {
            $scope.allUserData = data.data;
            $scope.testGiven = data.data.testGiven;
            _.find($scope.testGiven, function(obj) { 
                if(obj.name=="BANKING"){
                    $scope.isBanking=false;
                }else if(obj.name=="INSURANCE"){
                    $scope.isInsurance=false;
                }else if(obj.name=="MUTUAL FUNDS"){
                    $scope.isMutualFund=false;
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

        _.find($scope.testGiven, function(obj) { 
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

            $scope.mutualfunds = false;

        } else if (data == 'INSURANCE') {
            $scope.banking = false;
            $scope.insurance = true;
            $scope.mutualfunds = false;
        } else if (data == 'MUTUAL FUNDS') {
            $scope.banking = false;
            $scope.insurance = false; 
            $scope.mutualfunds = true;
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
    // $scope.digitalinside = [{
    //     No: 1,
    //     Question: "सेविंग अकाउंट पर ब्याज मिलता है?",
    //     option1: "ब्याज पर ब्याज",
    //     option2: "FD जितना",
    //     option3: "साधारण ब्याज",
    //     option4: "पीएफ जितना",
    // }, {
    //     No: 2,
    //     Question: "ऑटोमैटिक स्वीप अकाउंट होता है ?",
    //     option1: "सेविंग अकाउंट रेकरिंग अकाउंट से लिंक",
    //     option2: "सेविंग अकाउंट फिक्स डिपॉजिट से लिंक",
    //     option3: "सेविंग अकाउंट डीमैट अकाउंट से लिंक",
    //     option4: "सेविंग अकाउंट ट्रेडिंग अकाउंट से लिंक",
    // }, {
    //     No: 3,
    //     Question: "सेविंग अकाउंट के ब्याज पर लगता है टैक्स",
    //     option1: "1 लाख से ज्यादा ब्याज इनकम पर",
    //     option2: "50 हजार से ज्यादा ब्याज इनकम पर",
    //     option3: "10 हजार से ज्यादा ब्याज इनकम पर",
    //     option4: "20 हजार से ज्यादा ब्याज इनकम पर",
    // }, {
    //     No: 4,
    //     Question: "सेविंग अकाउंट खोलने के लिए अनिवार्य है",
    //     option1: "घर के एड्रेस का प्रूफ और ईमेल एड्रेस",
    //     option2: "फोन नंबर",
    //     option3: "पैन कार्ड और आधार कार्ड",
    //     option4: "ऊपर लिखे सभी दस्तावेज",
    // }]
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