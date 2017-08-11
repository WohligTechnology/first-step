myApp.controller('DigitalInsideCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
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
    $scope.banking = false;
    $scope.equity = false;
    $scope.mutualfund = false;
    $scope.commodities = false;
    $scope.insurance = false;

    $scope.displayQuestionSection = function (data) {
        $scope.banking = false;
        $scope.equity = false;
        $scope.mutualfund = false;
        $scope.commodities = false;
        $scope.insurance = false;

        if (data == 'banking') {
            $scope.banking = true;
        } else if (data == 'equity') {
            $scope.equity = true;
        } else if (data == 'mutualfund') {
            $scope.mutualfund = true;
        } else if (data == 'commodities') {
            $scope.commodities = true;
        }
        else if (data == 'insurance') {
            $scope.insurance = true;
        }
    };
     $scope.digitalinside = [{
         No:1,
        Question: "सेविंग अकाउंट के ब्याज पर लगता है टैक्स",
        option1: "1 लाख से ज्यादा ब्याज इनकम पर",
        option2: "50 हजार से ज्यादा ब्याज इनकम प",
         option3: "10 हजार से ज्यादा ब्याज इनकम पर",
          option4:"20 हजार से ज्यादा ब्याज इनकम पर",
    }, {
         No:2,
        Question: "सेविंग अकाउंट के ब्याज पर लगता है टैक्स",
        option1: "सेविंग अकाउंट के ब्याज पर लगता है टैक्स",
        option2: "50 हजार से ज्यादा ब्याज इनकम प",
         option3: "10 हजार से ज्यादा ब्याज इनकम पर",
          option4:"20 हजार से ज्यादा ब्याज इनकम पर",
    }, {
         No:3,
        Question: "सेविंग अकाउंट के ब्याज पर लगता है टैक्स",
        option1: "50 हजार से ज्यादा ब्याज इनकम प",
        option2: "20 हजार से ज्यादा ब्याज इनकम पर",
         option3: "10 हजार से ज्यादा ब्याज इनकम पर",
          option4:"20 हजार से ज्यादा ब्याज इनकम पर",
    }, {
         No:4,
        Question: "सेविंग अकाउंट के ब्याज पर लगता है टैक्स",
        option1: "50 हजार से ज्यादा ब्याज इनकम प",
        option2: "20 हजार से ज्यादा ब्याज इनकम पर",
         option3: "10 हजार से ज्यादा ब्याज इनकम पर",
          option4:"20 हजार से ज्यादा ब्याज इनकम पर",
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