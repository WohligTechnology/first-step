var mySwiper;
myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal, $state, apiService, $location, $document) {
    $scope.template = TemplateService.getHTML("content/home/home.html");
    // TemplateService.title = "Pehla Kadam|Pehla Kadam offers better ideas & way to manage finances"; //This is the Title of the Website
    // TemplateService.desc = "Pehla Kadam is a strategically designed platform that provides ideas and creates products for people who are looking for a better way to manage their finances. Everything in this world is related to finance and therefore it is important to learn about it.";
    // TemplateService.abstract = "Pehla Kadam is a strategically designed platform that provides ideas and creates products for people who are looking for a better way to manage their finances. Everything in this world is related to finance and therefore it is important to learn about it.";
    // TemplateService.keywords = "file Income Tax Return Form in India,common mistakes in filing income tax return,tax avoidance cases in india,punishment for tax evasion in india,difference between tax evasion and tax avoidance,how to get education loan in india,education loan in india,what is top up loan or personal loan,top up loan eligibility,how to save money from salary in india,importance of saving money for the future,Calculate the salary of a housewife,housewife salary in india,how to manage Indian family monthly budget,middle class family monthly budget in India,reasons to have a credit card,disadvantages of credit card in india,cheque dishonour reasons in india,what are cheque dishonour charges,reasons for rejection of home loan,Home loan rejection in India,what is financial goal setting,long term financial goals,best way to retire early,how to retire early calculator,Mistakes while filing ITR,income tax penalty for undisclosed income,eligibility for personal loan,personal loan rejection reasons,Short term financial goals,is tax evasion a criminal offence in india,tax evasion cases in india,file Income Tax Return Form,file Income Tax Return in India,Income Tax Return Form,mistakes in filing income tax return, tax avoidance cases,tax avoidance in India,punishment for tax evasion,tax evasion and tax avoidance,get education loan in India,get education loan in India,Top up loan or personal loan,top up loan,personal loan,save money from salary in India,saving money for the future,salary of a housewife,Indian family monthly budget,middle class family monthly budget,disadvantages of credit card,cheque dishonour reasons,cheque dishonour charges,rejection of home loan,Home loan rejection,financial goal setting,how to retire early,income tax penalty,tax evasion a criminal offence,tax evasion cases,Delhi,Mumbai,India";
    $scope.navigation = NavigationService.getNavigation();
    $scope.goToAnchor = function (id) {
        var someElement = angular.element(document.getElementById(id));
        $document.scrollToElement(someElement, 70, 1500);
        console.log(id);
        $location.path("/" + id);
    };
    $timeout(function () {
        mySwiper = new Swiper('.swiper-container', {
            initialSlide: 3,
            autoplay: {
                delay: 1700,
            },
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }, 500);

    $scope.suppliers = [{
        name: "Casey Slusse",
        supplier: "Regular Fit Cotton Top",
        invoice: "#1024587 invoice is Pending",
        img: 'img/mike.png'
    }, {
        name: " Dee Schlatter",
        supplier: "Regular Fit Cotton Top",
        invoice: "#1024588 invoice is Pending",
        img: 'img/mike.png'
    }, {
        name: " Byron Mccully",
        supplier: "Regular Fit Cotton Top",
        invoice: "#1024589 invoice is Pending",
        img: 'img/mike.png'
    }, {
        name: " Prince Stucky",
        supplier: "Regular Fit Cotton Top",
        invoice: "#1024590 invoice is Pending",
        img: 'img/mike.png'
    }];

    //about more modal
    $scope.aboutMore = function () {
        $scope.aboutModal = $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/about.html',
            scope: $scope,
            size: 'lg',
            backdrop: 'static',
        });
    };

    //modal example
    $scope.modalOpen = function () {
        $scope.loginModal = $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/login.html',
            scope: $scope,
            size: 'lg',
            backdrop: 'static',
        });
    };

    //login function
    $scope.login = function (data) {
        console.log("data", data);
        NavigationService.apiCallWithData("DigitalUser/saveValidUser", data, function (data) {
            console.log("%%%%%%%%%%%%%%%%%%%%%%%", data);
            if (data.data._id) {
                $state.go("digital-course", {
                    'userId': data.data._id
                });
                $scope.loginModal.close();
            } else {
                $scope.error = "Test already has been given from this email."
            }
        });
    }

    $scope.homeSlide = [{
            img: 'img/season4/127.jpg',
            alt: "PehlaKadam, file Income Tax Return Form in India,common mistakes in filing income tax return,tax avoidance cases in india,punishment for tax evasion in india,difference between tax evasion and tax avoidance,how to get education loan in india,education loan in india,education loan in india with lowest interest rates,what is top up loan or personal loan,top up loan eligibility,how to save money from salary in india,importance of saving money for the future,Calculate the salary of a housewife,housewife salary in india,how to manage Indian family monthly budget,middle class family monthly budget in India,reasons to have a credit card,disadvantages of credit card in india,cheque dishonour reasons in india,what are cheque dishonour charges,reasons for rejection of home loan,Home loan rejection reason,Home loan rejection in India,what is financial goal setting,long term financial goals,best way to retire early,how to retire early calculator,Mistakes while filing ITR,income tax penalty for undisclosed income,how to apply student loan,eligibility for personal loan,value of housewife services,budget for personal expense,best credit card in india for salaried person,reasons for dishonoured cheque,personal loan rejection reasons,Short term financial goals,is tax evasion a criminal offence in india,tax evasion in india statistics,tax evasion cases in India, Delhi, Mumbai, India"
        },
        {
            img: 'img/season4/126.jpg',
            alt: "PehlaKadam, file Income Tax Return Form in India,common mistakes in filing income tax return,tax avoidance cases in india,punishment for tax evasion in india,difference between tax evasion and tax avoidance,how to get education loan in india,education loan in india,education loan in india with lowest interest rates,what is top up loan or personal loan,top up loan eligibility,how to save money from salary in india,importance of saving money for the future,Calculate the salary of a housewife,housewife salary in india,how to manage Indian family monthly budget,middle class family monthly budget in India,reasons to have a credit card,disadvantages of credit card in india,cheque dishonour reasons in india,what are cheque dishonour charges,reasons for rejection of home loan,Home loan rejection reason,Home loan rejection in India,what is financial goal setting,long term financial goals,best way to retire early,how to retire early calculator,Mistakes while filing ITR,income tax penalty for undisclosed income,how to apply student loan,eligibility for personal loan,value of housewife services,budget for personal expense,best credit card in india for salaried person,reasons for dishonoured cheque,personal loan rejection reasons,Short term financial goals,is tax evasion a criminal offence in india,tax evasion in india statistics,tax evasion cases in India, Delhi, Mumbai, India"
        },
        {
            img: 'img/season4/125.jpg',
            alt: "PehlaKadam, file Income Tax Return Form in India,common mistakes in filing income tax return,tax avoidance cases in india,punishment for tax evasion in india,difference between tax evasion and tax avoidance,how to get education loan in india,education loan in india,education loan in india with lowest interest rates,what is top up loan or personal loan,top up loan eligibility,how to save money from salary in india,importance of saving money for the future,Calculate the salary of a housewife,housewife salary in india,how to manage Indian family monthly budget,middle class family monthly budget in India,reasons to have a credit card,disadvantages of credit card in india,cheque dishonour reasons in india,what are cheque dishonour charges,reasons for rejection of home loan,Home loan rejection reason,Home loan rejection in India,what is financial goal setting,long term financial goals,best way to retire early,how to retire early calculator,Mistakes while filing ITR,income tax penalty for undisclosed income,how to apply student loan,eligibility for personal loan,value of housewife services,budget for personal expense,best credit card in india for salaried person,reasons for dishonoured cheque,personal loan rejection reasons,Short term financial goals,is tax evasion a criminal offence in india,tax evasion in india statistics,tax evasion cases in India, Delhi, Mumbai, India"
        },
        {
            img: 'img/season4/124.jpg',
            alt: "PehlaKadam, file Income Tax Return Form in India,common mistakes in filing income tax return,tax avoidance cases in india,punishment for tax evasion in india,difference between tax evasion and tax avoidance,how to get education loan in india,education loan in india,education loan in india with lowest interest rates,what is top up loan or personal loan,top up loan eligibility,how to save money from salary in india,importance of saving money for the future,Calculate the salary of a housewife,housewife salary in india,how to manage Indian family monthly budget,middle class family monthly budget in India,reasons to have a credit card,disadvantages of credit card in india,cheque dishonour reasons in india,what are cheque dishonour charges,reasons for rejection of home loan,Home loan rejection reason,Home loan rejection in India,what is financial goal setting,long term financial goals,best way to retire early,how to retire early calculator,Mistakes while filing ITR,income tax penalty for undisclosed income,how to apply student loan,eligibility for personal loan,value of housewife services,budget for personal expense,best credit card in india for salaried person,reasons for dishonoured cheque,personal loan rejection reasons,Short term financial goals,is tax evasion a criminal offence in india,tax evasion in india statistics,tax evasion cases in India, Delhi, Mumbai, India"
        },
        {
            img: 'img/season4/123.jpg',
            alt: "PehlaKadam, file Income Tax Return Form in India,common mistakes in filing income tax return,tax avoidance cases in india,punishment for tax evasion in india,difference between tax evasion and tax avoidance,how to get education loan in india,education loan in india,education loan in india with lowest interest rates,what is top up loan or personal loan,top up loan eligibility,how to save money from salary in india,importance of saving money for the future,Calculate the salary of a housewife,housewife salary in india,how to manage Indian family monthly budget,middle class family monthly budget in India,reasons to have a credit card,disadvantages of credit card in india,cheque dishonour reasons in india,what are cheque dishonour charges,reasons for rejection of home loan,Home loan rejection reason,Home loan rejection in India,what is financial goal setting,long term financial goals,best way to retire early,how to retire early calculator,Mistakes while filing ITR,income tax penalty for undisclosed income,how to apply student loan,eligibility for personal loan,value of housewife services,budget for personal expense,best credit card in india for salaried person,reasons for dishonoured cheque,personal loan rejection reasons,Short term financial goals,is tax evasion a criminal offence in india,tax evasion in india statistics,tax evasion cases in India, Delhi, Mumbai, India"
        },
        {
            img: 'img/season4/122.jpg',
            alt: "PehlaKadam, file Income Tax Return Form in India,common mistakes in filing income tax return,tax avoidance cases in india,punishment for tax evasion in india,difference between tax evasion and tax avoidance,how to get education loan in india,education loan in india,education loan in india with lowest interest rates,what is top up loan or personal loan,top up loan eligibility,how to save money from salary in india,importance of saving money for the future,Calculate the salary of a housewife,housewife salary in india,how to manage Indian family monthly budget,middle class family monthly budget in India,reasons to have a credit card,disadvantages of credit card in india,cheque dishonour reasons in india,what are cheque dishonour charges,reasons for rejection of home loan,Home loan rejection reason,Home loan rejection in India,what is financial goal setting,long term financial goals,best way to retire early,how to retire early calculator,Mistakes while filing ITR,income tax penalty for undisclosed income,how to apply student loan,eligibility for personal loan,value of housewife services,budget for personal expense,best credit card in india for salaried person,reasons for dishonoured cheque,personal loan rejection reasons,Short term financial goals,is tax evasion a criminal offence in india,tax evasion in india statistics,tax evasion cases in India, Delhi, Mumbai, India"
        },
        {
            img: 'img/season4/117.jpg',
            alt: "PehlaKadam, file Income Tax Return Form in India,common mistakes in filing income tax return,tax avoidance cases in india,punishment for tax evasion in india,difference between tax evasion and tax avoidance,how to get education loan in india,education loan in india,education loan in india with lowest interest rates,what is top up loan or personal loan,top up loan eligibility,how to save money from salary in india,importance of saving money for the future,Calculate the salary of a housewife,housewife salary in india,how to manage Indian family monthly budget,middle class family monthly budget in India,reasons to have a credit card,disadvantages of credit card in india,cheque dishonour reasons in india,what are cheque dishonour charges,reasons for rejection of home loan,Home loan rejection reason,Home loan rejection in India,what is financial goal setting,long term financial goals,best way to retire early,how to retire early calculator,Mistakes while filing ITR,income tax penalty for undisclosed income,how to apply student loan,eligibility for personal loan,value of housewife services,budget for personal expense,best credit card in india for salaried person,reasons for dishonoured cheque,personal loan rejection reasons,Short term financial goals,is tax evasion a criminal offence in india,tax evasion in india statistics,tax evasion cases in India, Delhi, Mumbai, India"
        },
        {
            img: 'img/season4/120.jpg',
            alt: "PehlaKadam, file Income Tax Return Form in India,common mistakes in filing income tax return,tax avoidance cases in india,punishment for tax evasion in india,difference between tax evasion and tax avoidance,how to get education loan in india,education loan in india,education loan in india with lowest interest rates,what is top up loan or personal loan,top up loan eligibility,how to save money from salary in india,importance of saving money for the future,Calculate the salary of a housewife,housewife salary in india,how to manage Indian family monthly budget,middle class family monthly budget in India,reasons to have a credit card,disadvantages of credit card in india,cheque dishonour reasons in india,what are cheque dishonour charges,reasons for rejection of home loan,Home loan rejection reason,Home loan rejection in India,what is financial goal setting,long term financial goals,best way to retire early,how to retire early calculator,Mistakes while filing ITR,income tax penalty for undisclosed income,how to apply student loan,eligibility for personal loan,value of housewife services,budget for personal expense,best credit card in india for salaried person,reasons for dishonoured cheque,personal loan rejection reasons,Short term financial goals,is tax evasion a criminal offence in india,tax evasion in india statistics,tax evasion cases in India, Delhi, Mumbai, India"
        },
        {
            img: 'img/season4/119.jpg',
            alt: "PehlaKadam, file Income Tax Return Form in India,common mistakes in filing income tax return,tax avoidance cases in india,punishment for tax evasion in india,difference between tax evasion and tax avoidance,how to get education loan in india,education loan in india,education loan in india with lowest interest rates,what is top up loan or personal loan,top up loan eligibility,how to save money from salary in india,importance of saving money for the future,Calculate the salary of a housewife,housewife salary in india,how to manage Indian family monthly budget,middle class family monthly budget in India,reasons to have a credit card,disadvantages of credit card in india,cheque dishonour reasons in india,what are cheque dishonour charges,reasons for rejection of home loan,Home loan rejection reason,Home loan rejection in India,what is financial goal setting,long term financial goals,best way to retire early,how to retire early calculator,Mistakes while filing ITR,income tax penalty for undisclosed income,how to apply student loan,eligibility for personal loan,value of housewife services,budget for personal expense,best credit card in india for salaried person,reasons for dishonoured cheque,personal loan rejection reasons,Short term financial goals,is tax evasion a criminal offence in india,tax evasion in india statistics,tax evasion cases in India, Delhi, Mumbai, India"
        },
        {
            img: 'img/season4/118.jpg',
            alt: "PehlaKadam, file Income Tax Return Form in India,common mistakes in filing income tax return,tax avoidance cases in india,punishment for tax evasion in india,difference between tax evasion and tax avoidance,how to get education loan in india,education loan in india,education loan in india with lowest interest rates,what is top up loan or personal loan,top up loan eligibility,how to save money from salary in india,importance of saving money for the future,Calculate the salary of a housewife,housewife salary in india,how to manage Indian family monthly budget,middle class family monthly budget in India,reasons to have a credit card,disadvantages of credit card in india,cheque dishonour reasons in india,what are cheque dishonour charges,reasons for rejection of home loan,Home loan rejection reason,Home loan rejection in India,what is financial goal setting,long term financial goals,best way to retire early,how to retire early calculator,Mistakes while filing ITR,income tax penalty for undisclosed income,how to apply student loan,eligibility for personal loan,value of housewife services,budget for personal expense,best credit card in india for salaried person,reasons for dishonoured cheque,personal loan rejection reasons,Short term financial goals,is tax evasion a criminal offence in india,tax evasion in india statistics,tax evasion cases in India, Delhi, Mumbai, India"
        }
    ];
    $scope.season4 = [{
        imageUrl: "iVK1ZfHwxZ4",
        videoUrl: "iVK1ZfHwxZ4",
        title: "Episode 7"
    }, {
        imageUrl: "3m8fi0XIH2U",
        videoUrl: "3m8fi0XIH2U",
        title: "Episode 6"
    }, {
        imageUrl: "18ewrtgZwOE",
        videoUrl: "18ewrtgZwOE",
        title: "AMBALA"
    }, {
        imageUrl: "pKt6evGdEPY",
        videoUrl: "pKt6evGdEPY",
        title: "Raipur"
    }];
})