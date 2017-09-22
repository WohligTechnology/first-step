myApp.controller('DigitalInsideCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal) {
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

    $scope.displayQuestionSection = function (data) {
        if (data == 'banking') {
            $scope.banking = true;
            $scope.insurance = false;
        } else if (data == 'insurance') {
            $scope.banking = false;
            $scope.insurance = true;
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
    $scope.digitalinside = [{
        No: 1,
        Question: "सेविंग अकाउंट पर ब्याज मिलता है?",
        option1: "ब्याज पर ब्याज",
        option2: "FD जितना",
        option3: "साधारण ब्याज",
        option4: "पीएफ जितना",
    }, {
        No: 2,
        Question: "ऑटोमैटिक स्वीप अकाउंट होता है ?",
        option1: "सेविंग अकाउंट रेकरिंग अकाउंट से लिंक",
        option2: "सेविंग अकाउंट फिक्स डिपॉजिट से लिंक",
        option3: "सेविंग अकाउंट डीमैट अकाउंट से लिंक",
        option4: "सेविंग अकाउंट ट्रेडिंग अकाउंट से लिंक",
    }, {
        No: 3,
        Question: "सेविंग अकाउंट के ब्याज पर लगता है टैक्स",
        option1: "1 लाख से ज्यादा ब्याज इनकम पर",
        option2: "50 हजार से ज्यादा ब्याज इनकम पर",
        option3: "10 हजार से ज्यादा ब्याज इनकम पर",
        option4: "20 हजार से ज्यादा ब्याज इनकम पर",
    }, {
        No: 4,
        Question: "सेविंग अकाउंट खोलने के लिए अनिवार्य है",
        option1: "घर के एड्रेस का प्रूफ और ईमेल एड्रेस",
        option2: "फोन नंबर",
        option3: "पैन कार्ड और आधार कार्ड",
        option4: "ऊपर लिखे सभी दस्तावेज",
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