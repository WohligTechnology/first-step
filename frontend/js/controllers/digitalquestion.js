myApp.controller('DigitalQuestionCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    $scope.template = TemplateService.getHTML("content/digital-question.html");
    TemplateService.title = "Digitalquestion"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

     $scope.digitalinside = [{
         No:1,
        Question: "सेविंग अकाउंट पर ब्याज मिलता है",
        option1: "ब्याज पर ब्याज",
        option2: "<span style='font-family:NimbusSanL-Reg;'>FD</span> जितना",
         option3: "साधारण ब्याज",
          option4:"पीएफ जितना",
    }, {
         No:2,
        Question: "ऑटोमैटिक स्वीप अकाउंट होता है",
        option1: "सेविंग अकाउंट रेकरिंग अकाउंट से लिंक",
        option2: "सेविंग अकाउंट फिक्स डिपॉजिट से लिंक",
         option3: "सेविंग अकाउंट डीमैट अकाउंट से लिंक",
          option4:"सेविंग अकाउंट ट्रेडिंग अकाउंट से लिंक",
    }, {
         No:3,
        Question: "सेविंग अकाउंट के ब्याज पर लगता है टैक्स",
        option1: "1 लाख से ज्यादा ब्याज इनकम पर",
        option2: "50 हजार से ज्यादा ब्याज इनकम पर",
         option3: "10 हजार से ज्यादा ब्याज इनकम पर",
          option4:"20 हजार से ज्यादा ब्याज इनकम पर",
    }, {
         No:4,
        Question: "सेविंग अकाउंट खोलने के लिए अनिवार्य है",
        option1: "घर के एड्रेस का प्रूफ और ईमेल एड्रेस",
        option2: "फोन नंबर",
         option3: "पैन कार्ड और आधार कार्ड",
          option4:"ऊपर लिखे सभी दस्तावेज",
    }
    ,{
         No:5,
        Question: "<span style='font-family:NimbusSanL-Reg;'>KYC</span> के लिए कौन से डॉक्यूमेंट्स पर्याप्त हैं",
        option1: "पासपोर्ट",
        option2: "पैन कार्ड",
         option3: "पैनकार्ड और आधार कार्ड",
          option4:"पैनकार्ड, आधार कार्ड या पासपोर्ट",
    }, {
         No:6,
        Question: "साधारण ब्याज किस अकाउंट पर मिलता है",
        option1: " रेकरिंग अकाउंट पर",
        option2: "सेविंग अकाउंट पर",
         option3: "फिक्स डिपॉजिट पर",
          option4:"करेंट अकाउंट पर",
    }, {
         No:7,
        Question: "क्या रेकरिंग डिपॉजिट पर टैक्स छूट मिलती है",
        option1: "पूरी छूट मिलती है",
        option2: " बिल्कुल नहीं मिलती ",
         option3: "10 हजार से ज्यादा सालाना ब्याज पर टैक्स लगता है",
          option4:"5 हजार से ज्यादा सालाना ब्याज पर टैक्स लगता है",
    }, {
         No:8,
        Question: "क्या रेकरिंग डिपॉजिट पर टैक्स छूट मिलती है",
        option1: "पूरी छूट मिलती है",
        option2: "बिल्कुल नहीं मिलती",
         option3: "10 हजार से ज्यादा सालाना ब्याज पर टैक्स लगता है",
          option4:"5 हजार से ज्यादा सालाना ब्याज पर टैक्स लगता है",
    }, {
         No:9,
        Question: "क्रेडिट कार्ड कितने दिन तक ब्याज नहीं लगता",
        option1: "45 दिन तक",
        option2: "15 दिन तक",
         option3: "20 दिन तक",
          option4:"25 दिन तक",
    }, {
         No:10,
        Question: "क्रेडिट कार्ड लिमिट कैसे तय होती है",
        option1: "आमदनी के हिसाब से",
        option2: "क्रेडिट हिस्ट्री पर",
         option3: "बैंक की मर्जी पर",
          option4:"इन सभी चीजों पर",
    }, {
         No:11,
        Question: "वर्चुअल क्रेडिट कार्ड कितनी बार इस्तेमाल कर सकते हैं ",
        option1: "4 बार",
        option2: "5 बार",
         option3: "1 बार",
          option4:"अनगिनत बार",
    }, {
         No:12,
        Question: "मल्टी करेंसी कार्ड से",
        option1: "अलग-अलग देशों में पैसा निकला जाता है",
        option2: "अलग-अलग करेंसी निकाली जा सकती है",
         option3: "मोबाइल फोन से लिंक किया जा सकता है",
          option4:"उपरोक्त सभी काम हो सकते हैं",
    }]
         $scope.digitalthanks = function () {
            console.log("clla");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/digital-thanks.html',
                scope: $scope,
                size: 'md',
            });
        };
            $scope.digitalsorry = function () {
            console.log("clla");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/digital-sorry.html',
                scope: $scope,
                size: 'md',
            });
        };
})