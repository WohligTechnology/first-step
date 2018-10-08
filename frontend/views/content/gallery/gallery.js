myApp.controller('GalleryCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/gallery/gallery.html");
    TemplateService.title = "Gallery"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.cssMain = "header-icons";
    $scope.season4 = [{
        img1: 'img/season4/1.jpg',
        alt: "long term financial goals"
    }, {
        img1: 'img/season4/2.jpg',
        alt: "best way to retire early"
    }, {
        img1: 'img/season4/3.jpg',
        alt: "Mistakes while filing ITR"
    }, {
        img1: 'img/season4/4.jpg',
        alt: "eligibility for personal loan"
    }, {
        img1: 'img/season4/5.jpg',
        alt: "personal loan rejection reasons"
    }, {
        img1: 'img/season4/6.jpg',
        alt: "Short term financial goals"
    }, {
        img1: 'img/season4/7.jpg',
        alt: "is tax evasion a criminal offence in india"
    }, {
        img1: 'img/season4/8.jpg',
        alt: "tax evasion cases in india"
    }, {
        img1: 'img/season4/9.jpg',
        alt: "tax avoidance cases"
    }, {
        img1: 'img/season4/10.jpg',
        alt: "tax evasion and tax avoidance"
    }, {
        img1: 'img/season4/11.jpg',
        alt: "get education loan in India"
    }, {
        img1: 'img/season4/12.jpg',
        alt: "Top up loan or personal loan"
    }, {
        img1: 'img/season4/13.jpg',
        alt: "save money from salary in India"
    }, {
        img1: 'img/season4/14.jpg',
        alt: "saving money for the future"
    }, {
        img1: 'img/season4/15.jpg',
        alt: "Indian family monthly budget"
    }, {
        img1: 'img/season4/16.jpg',
        alt: "disadvantages of credit card"
    }, {
        img1: 'img/season4/17.jpg',
        alt: "cheque dishonour reasons"
    }, {
        img1: 'img/season4/18.jpg',
        alt: "cheque dishonour charges"
    }, {
        img1: 'img/season4/19.jpg',
        alt: "rejection of home loan"
    }, {
        img1: 'img/season4/20.jpg',
        alt: "how to retire early"
    }, {
        img1: 'img/season4/21.jpg',
        alt: "tax evasion a criminal offence"
    }, {
        img1: 'img/season4/22.jpg',
        alt: "investment guide"
    }, {
        img1: 'img/season4/23.jpg',
        alt: "buying and selling of stocks"
    }, {
        img1: 'img/season4/24.jpg',
        alt: "What does the budget mean for the middle class?"
    }, {
        img1: 'img/season4/25.jpg',
        alt: "health insurance policy"
    }, {
        img1: 'img/season4/26.jpg',
        alt: "Financial planning"
    }, {
        img1: 'img/season4/27.jpg',
        alt: "retirement fund"
    }, {
        img1: 'img/season4/28.jpg',
        alt: "payment of taxes."
    }, {
        img1: 'img/season4/29.jpg',
        alt: "Business after retirement "
    }, {
        img1: 'img/season4/30.jpg',
        alt: "Tax deadline"
    }, {
        img1: 'img/season4/31.jpg',
        alt: "tax laws India"
    }, {
        img1: 'img/season4/32.jpg',
        alt: "education loan"
    }]
    $scope.season3 = [{
            img1: 'img/season3/235.jpg',
            img2: 'img/small-season3/235.jpg',
            alt: "loan repayment"
        }, {
            img1: 'img/season3/236.jpg',
            img2: 'img/small-season3/236.jpg',
            alt: "tax benefits "
        }, {
            img1: 'img/season3/237.jpg',
            img2: 'img/small-season3/237.jpg',
            alt: "repayment history"
        }, {
            img1: 'img/season3/238.jpg',
            img2: 'img/small-season3/238.jpg',
            alt: "existing home loan"
        }, {
            img1: 'img/season3/239.jpg',
            img2: 'img/small-season3/239.jpg',
            alt: "bank statement"
        }, {
            img1: 'img/season3/240.jpg',
            img2: 'img/small-season3/240.jpg',
            alt: "education expense"
        }, {
            img1: 'img/season3/241.jpg',
            img2: 'img/small-season3/241.jpg',
            alt: "marriage expense"
        }, {
            img1: 'img/season3/242.jpg',
            img2: 'img/small-season3/242.jpg',
            alt: "reasons for saving"
        }, {
            img1: 'img/season3/243.jpg',
            img2: 'img/small-season3/243.jpg',
            alt: " regular income"
        }, {
            img1: 'img/season3/244.jpg',
            img2: 'img/small-season3/244.jpg',
            alt: "source of income"
        }, {
            img1: 'img/season3/245.jpg',
            img2: 'img/small-season3/245.jpg',
            alt: "economic downturn"
        }, {
            img1: 'img/season3/246.jpg',
            img2: 'img/small-season3/246.jpg',
            alt: "inflation"
        }, {
            img1: 'img/season3/247.jpg',
            img2: 'img/small-season3/247.jpg',
            alt: "saving habit"
        }, {
            img1: 'img/season3/248.jpg',
            img2: 'img/small-season3/248.jpg',
            alt: "long term financial goals"
        }, {
            img1: 'img/season3/249.jpg',
            img2: 'img/small-season3/249.jpg',
            alt: "best way to retire early"
        }, {
            img1: 'img/season3/250.jpg',
            img2: 'img/small-season3/250.jpg',
            alt: "Mistakes while filing ITR"
        }, {
            img1: 'img/season3/251.jpg',
            img2: 'img/small-season3/251.jpg',
            alt: "eligibility for personal loan"
        }, {
            img1: 'img/season3/252.jpg',
            img2: 'img/small-season3/252.jpg',
            alt: "personal loan rejection reasons"
        }, {
            img1: 'img/season3/253.jpg',
            img2: 'img/small-season3/253.jpg',
            alt: "Short term financial goals"
        }, {
            img1: 'img/season3/254.jpg',
            img2: 'img/small-season3/254.jpg',
            alt: "is tax evasion a criminal offence in india"
        }, {
            img1: 'img/season3/255.jpg',
            img2: 'img/small-season3/255.jpg',
            alt: "tax evasion cases in india"
        }, {
            img1: 'img/season3/256.jpg',
            img2: 'img/small-season3/256.jpg',
            alt: "tax avoidance cases"
        }, {
            img1: 'img/season3/257.jpg',
            img2: 'img/small-season3/257.jpg',
            alt: "tax evasion and tax avoidance"
        }, {
            img1: 'img/season3/258.jpg',
            img2: 'img/small-season3/258.jpg',
            alt: "get education loan in India"
        }, {
            img1: 'img/season3/259.jpg',
            img2: 'img/small-season3/259.jpg',
            alt: "Top up loan or personal loan"
        }, {
            img1: 'img/season3/261.jpg',
            img2: 'img/small-season3/261.jpg',
            alt: "save money from salary in India"
        }, {
            img1: 'img/season3/262.jpg',
            img2: 'img/small-season3/262.jpg',
            alt: "saving money for the future"
        }, {
            img1: 'img/season3/263.jpg',
            img2: 'img/small-season3/263.jpg',
            alt: "Indian family monthly budget"
        }, {
            img1: 'img/season3/264.jpg',
            img2: 'img/small-season3/264.jpg',
            alt: "disadvantages of credit card"
        }, {
            img1: 'img/season3/265.jpg',
            img2: 'img/small-season3/265.jpg',
            alt: "cheque dishonour reasons"
        }, {
            img1: 'img/season3/266.jpg',
            img2: 'img/small-season3/266.jpg',
            alt: "cheque dishonour charges"
        }, {
            img1: 'img/season3/269.jpg',
            img2: 'img/small-season3/269.jpg',
            alt: "rejection of home loan"
        }, {
            img1: 'img/season3/270.jpg',
            img2: 'img/small-season3/270.jpg',
            alt: "how to retire early"
        }, {
            img1: 'img/season3/271.jpg',
            img2: 'img/small-season3/271.jpg',
            alt: "tax evasion a criminal offence"
        }, {
            img1: 'img/season3/272.jpg',
            img2: 'img/small-season3/272.jpg',
            alt: "investment guide"
        }, {
            img1: 'img/season3/276.jpg',
            img2: 'img/small-season3/276.jpg',
            alt: "buying and selling of stocks"
        }, {
            img1: 'img/season3/277.jpg',
            img2: 'img/small-season3/277.jpg',
            alt: "What does the budget mean for the middle class?"
        }, {
            img1: 'img/season3/281.jpg',
            img2: 'img/small-season3/281.jpg',
            alt: "health insurance policy"
        }, {
            img1: 'img/season3/282.jpg',
            img2: 'img/small-season3/282.jpg',
            alt: "Financial planning"
        }, {
            img1: 'img/season3/283.jpg',
            img2: 'img/small-season3/283.jpg',
            alt: "retirement fund"
        }, {
            img1: 'img/season3/284.jpg',
            img2: 'img/small-season3/284.jpg',
            alt: "payment of taxes."
        }, {
            img1: 'img/season3/287.jpg',
            img2: 'img/small-season3/287.jpg',
            alt: "Business after retirement"
        }, {
            img1: 'img/season3/288.jpg',
            img2: 'img/small-season3/288.jpg',
            alt: "Tax deadline"
        }, {
            img1: 'img/season3/289.jpg',
            img2: 'img/small-season3/289.jpg',
            alt: "tax laws India"
        }, {
            img1: 'img/season3/290.jpg',
            img2: 'img/small-season3/290.jpg',
            alt: "education loan"
        }, {
            img1: 'img/season3/291.jpg',
            img2: 'img/small-season3/291.jpg',
            alt: "loan repayment"
        }, {
            img1: 'img/season3/297.jpg',
            img2: 'img/small-season3/297.jpg',
            alt: "tax benefits"
        }, {
            img1: 'img/season3/298.jpg',
            img2: 'img/small-season3/298.jpg',
            alt: "repayment history"
        }, {
            img1: 'img/season3/299.jpg',
            img2: 'img/small-season3/299.jpg',
            alt: "existing home loan"
        }, {
            img1: 'img/season3/300.jpg',
            img2: 'img/small-season3/300.jpg',
            alt: "bank statement"
        }, {
            img1: 'img/season3/301.jpg',
            img2: 'img/small-season3/301.jpg',
            alt: "education expense"
        }, {
            img1: 'img/season3/302.jpg',
            img2: 'img/small-season3/302.jpg',
            alt: "marriage expense"
        }, {
            img1: 'img/season3/303.jpg',
            img2: 'img/small-season3/303.jpg',
            alt: "reasons for saving"
        }, {
            img1: 'img/season3/304.jpg',
            img2: 'img/small-season3/304.jpg',
            alt: "regular income"
        }, {
            img1: 'img/season3/234.jpg',
            img2: 'img/small-season3/234.jpg',
            alt: "source of income"
        },
        {
            img1: 'img/season3/233.jpg',
            img2: 'img/small-season3/233.jpg',
            alt: "economic downturn"
        }, {
            img1: 'img/season3/221.jpg',
            img2: 'img/small-season3/221.jpg',
            alt: "inflation"
        }, {
            img1: 'img/season3/220.jpg',
            img2: 'img/small-season3/220.jpg',
            alt: "saving habit"
        }, {
            img1: 'img/season3/216.jpg',
            img2: 'img/small-season3/216.jpg',
            alt: "monthly spend"
        }, {
            img1: 'img/season3/211.jpg',
            img2: 'img/small-season3/211.jpg',
            alt: "track budget."
        }, {
            img1: 'img/season3/210.jpg',
            img2: 'img/small-season3/210.jpg',
            alt: "best way to retire early"
        }, {
            img1: 'img/season3/209.jpg',
            img2: 'img/small-season3/209.jpg',
            alt: "Mistakes while filing ITR"
        }, {
            img1: 'img/season3/208.jpg',
            img2: 'img/small-season3/208.jpg',
            alt: "eligibility for personal loan"
        }, {
            img1: 'img/season3/207.jpg',
            img2: 'img/small-season3/207.jpg',
            alt: "personal loan rejection reasons"
        }, {
            img1: 'img/season3/206.jpg',
            img2: 'img/small-season3/206.jpg',
            alt: "Short term financial goals"
        }, {
            img1: 'img/season3/205.jpg',
            img2: 'img/small-season3/205.jpg',
            alt: "is tax evasion a criminal offence in india"
        }, {
            img1: 'img/season3/204.jpg',
            img2: 'img/small-season3/204.jpg',
            alt: "tax evasion cases in india"
        }, {
            img1: 'img/season3/202.jpg',
            img2: 'img/small-season3/202.jpg',
            alt: "tax avoidance cases"
        }, {
            img1: 'img/season3/201.jpg',
            img2: 'img/small-season3/201.jpg',
            alt: "tax evasion and tax avoidance"
        }, {
            img1: 'img/season3/200.jpg',
            img2: 'img/small-season3/200.jpg',
            alt: "get education loan in India"
        }, {
            img1: 'img/season3/199.jpg',
            img2: 'img/small-season3/199.jpg',
            alt: "Top up loan or personal loan"
        }, {
            img1: 'img/season3/198.jpg',
            img2: 'img/small-season3/198.jpg',
            alt: "save money from salary in India"
        }, {
            img1: 'img/season3/197.jpg',
            img2: 'img/small-season3/197.jpg',
            alt: "saving money for the future"
        }, {
            img1: 'img/season3/196.jpg',
            img2: 'img/small-season3/196.jpg',
            alt: "Indian family monthly budget"
        }, {
            img1: 'img/season3/195.jpg',
            img2: 'img/small-season3/195.jpg',
            alt: "disadvantages of credit card"
        }, {
            img1: 'img/season3/194.jpg',
            img2: 'img/small-season3/194.jpg',
            alt: "cheque dishonour reasons"
        }, {
            img1: 'img/season3/193.jpg',
            img2: 'img/small-season3/193.jpg',
            alt: "cheque dishonour charges"
        }, {
            img1: 'img/season3/192.jpg',
            img2: 'img/small-season3/192.jpg',
            alt: "rejection of home loan"
        }, {
            img1: 'img/season3/191.jpg',
            img2: 'img/small-season3/191.jpg',
            alt: "how to retire early"
        }, {
            img1: 'img/season3/190.jpg',
            img2: 'img/small-season3/190.jpg',
            alt: "tax evasion a criminal offence"
        }, {
            img1: 'img/season3/189.jpg',
            img2: 'img/small-season3/189.jpg',
            alt: "investment guide"
        }, {
            img1: 'img/season3/188.jpg',
            img2: 'img/small-season3/188.jpg',
            alt: "buying and selling of stocks"
        }, {
            img1: 'img/season3/187.jpg',
            img2: 'img/small-season3/187.jpg',
            alt: "What does the budget mean for the middle class?"
        }, {
            img1: 'img/season3/186.jpg',
            img2: 'img/small-season3/186.jpg',
            alt: "health insurance policy"
        }, {
            img1: 'img/season3/185.jpg',
            img2: 'img/small-season3/185.jpg',
            alt: "Financial planning"
        }, {
            img1: 'img/season3/184.jpg',
            img2: 'img/small-season3/184.jpg',
            alt: "retirement fund"
        }, {
            img1: 'img/season3/183.jpg',
            img2: 'img/small-season3/183.jpg',
            alt: "payment of taxes."
        }, {
            img1: 'img/season3/182.jpg',
            img2: 'img/small-season3/182.jpg',
            alt: "Business after retirement "
        }, {
            img1: 'img/season3/203.jpg',
            img2: 'img/small-season3/203.jpg',
            alt: "Tax deadline"
        }, {
            img1: 'img/season3/181.jpg',
            img2: 'img/small-season3/203.jpg',
            alt: "tax laws India"
        }, {
            img1: 'img/season3/178.jpg',
            img2: 'img/small-season3/178.jpg',
            alt: "education loan"
        }, {
            img1: 'img/season3/177.jpg',
            img2: 'img/small-season3/177.jpg',
            alt: "loan repayment"
        }, {
            img1: 'img/season3/176.jpg',
            img2: 'img/small-season3/176.jpg',
            alt: "tax benefits ."
        }, {
            img1: 'img/season3/175.jpg',
            img2: 'img/small-season3/175.jpg',
            alt: "repayment history"
        }, {
            img1: 'img/season3/174.jpg',
            img2: 'img/small-season3/174.jpg',
            alt: "existing home loan"
        }, {
            img1: 'img/season3/173.jpg',
            img2: 'img/small-season3/173.jpg',
            alt: "bank statement"
        }, {
            img1: 'img/season3/170.jpg',
            img2: 'img/small-season3/170.jpg',
            alt: "education expense"
        }, {
            img1: 'img/season3/169.jpg',
            img2: 'img/small-season3/169.jpg',
            alt: "marriage expense"
        }, {
            img1: 'img/season3/168.jpg',
            img2: 'img/small-season3/168.jpg',
            alt: "reasons for saving"
        }, {
            img1: 'img/season3/166.jpg',
            img2: 'img/small-season3/166.jpg',
            alt: "long term financial goals"
        }, {
            img1: 'img/season3/165.jpg',
            img2: 'img/small-season3/165.jpg',
            alt: "regular income"
        }, {
            img1: 'img/season3/164.jpg',
            img2: 'img/small-season3/164.jpg',
            alt: "source of income"
        }, {
            img1: 'img/season3/163.jpg',
            img2: 'img/small-season3/163.jpg',
            alt: "economic downturn"
        }, {
            img1: 'img/season3/162.jpg',
            img2: 'img/small-season3/162.jpg',
            alt: "inflation"
        }, {
            img1: 'img/season3/161.jpg',
            img2: 'img/small-season3/161.jpg',
            alt: "saving habit"
        }, {
            img1: 'img/season3/160.jpg',
            img2: 'img/small-season3/160.jpg',
            alt: "monthly spend"
        }, {
            img1: 'img/season3/159.jpg',
            img2: 'img/small-season3/159.jpg',
            alt: "track budget."
        }, {
            img1: 'img/season3/158.jpg',
            img2: 'img/small-season3/158.jpg',
            alt: "long term financial goals"
        }, {
            img1: 'img/season3/157.jpg',
            img2: 'img/small-season3/157.jpg',
            alt: "best way to retire early"
        }, {
            img1: 'img/season3/156.jpg',
            img2: 'img/small-season3/156.jpg',
            alt: "Mistakes while filing ITR"
        }, {
            img1: 'img/season3/155.jpg',
            img2: 'img/small-season3/155.jpg',
            alt: "eligibility for personal loan"
        }, {
            img1: 'img/season3/152.jpg',
            img2: 'img/small-season3/152.jpg',
            alt: "personal loan rejection reasons"
        }, {
            img1: 'img/season3/149.jpg',
            img2: 'img/small-season3/149.jpg',
            alt: "Short term financial goals"
        }, {
            img1: 'img/season3/148.jpg',
            img2: 'img/small-season3/148.jpg',
            alt: "is tax evasion a criminal offence in india"
        }, {
            img1: 'img/season3/147.jpg',
            img2: 'img/small-season3/147.jpg',
            alt: "tax evasion cases in india"
        }, {
            img1: 'img/season3/146.jpg',
            img2: 'img/small-season3/146.jpg',
            alt: "tax avoidance cases"
        }, {
            img1: 'img/season3/145.jpg',
            img2: 'img/small-season3/145.jpg',
            alt: "tax evasion and tax avoidance"
        }, {
            img1: 'img/season3/144.jpg',
            img2: 'img/small-season3/144.jpg',
            alt: "get education loan in India"
        }, {
            img1: 'img/season3/143.jpg',
            img2: 'img/small-season3/143.jpg',
            alt: "Top up loan or personal loan"
        }, {
            img1: 'img/season3/142.jpg',
            img2: 'img/small-season3/142.jpg',
            alt: "save money from salary in India"
        }, {
            img1: 'img/season3/141.jpg',
            img2: 'img/small-season3/141.jpg',
            alt: "saving money for the future"
        }, {
            img1: 'img/season3/140.jpg',
            img2: 'img/small-season3/140.jpg',
            alt: "Indian family monthly budget"
        }, {
            img1: 'img/season3/139.jpg',
            img2: 'img/small-season3/139.jpg',
            alt: "disadvantages of credit card"
        }, {
            img1: 'img/season3/138.jpg',
            img2: 'img/small-season3/138.jpg',
            alt: "cheque dishonour reasons"
        }, {
            img1: 'img/season3/137.jpg',
            img2: 'img/small-season3/137.jpg',
            alt: "cheque dishonour charges"
        }, {
            img1: 'img/season3/136.jpg',
            img2: 'img/small-season3/136.jpg',
            alt: "rejection of home loan"
        }, {
            img1: 'img/season3/135.jpg',
            img2: 'img/small-season3/135.jpg',
            alt: "how to retire early"
        }, {
            img1: 'img/season3/134.jpg',
            img2: 'img/small-season3/134.jpg',
            alt: "tax evasion a criminal offence"
        }, {
            img1: 'img/season3/133.jpg',
            img2: 'img/small-season3/133.jpg',
            alt: "investment guide"
        }, {
            img1: 'img/season3/132.jpg',
            img2: 'img/small-season3/132.jpg',
            alt: "buying and selling of stocks"
        }, {
            img1: 'img/season3/131.jpg',
            img2: 'img/small-season3/131.jpg',
            alt: "What does the budget mean for the middle class?"
        }, {
            img1: 'img/season3/130.jpg',
            img2: 'img/small-season3/130.jpg',
            alt: "health insurance policy"
        }, {
            img1: 'img/season3/128.jpg',
            img2: 'img/small-season3/128.jpg',
            alt: "Financial planning"
        }, {
            img1: 'img/season3/125.jpg',
            img2: 'img/small-season3/125.jpg',
            alt: "retirement fund"
        }, {
            img1: 'img/season3/123.jpg',
            img2: 'img/small-season3/123.jpg',
            alt: "payment of taxes."
        }, {
            img1: 'img/season3/122.jpg',
            img2: 'img/small-season3/122.jpg',
            alt: "Business after retirement "
        }, {
            img1: 'img/season3/119.jpg',
            img2: 'img/small-season3/119.jpg',
            alt: "Tax deadline"
        }, {
            img1: 'img/season3/117.jpg',
            img2: 'img/small-season3/117.jpg',
            alt: "tax laws India"
        }, {
            img1: 'img/season3/116.jpg',
            img2: 'img/small-season3/116.jpg',
            alt: "education loan loan repayment"
        }, {
            img1: 'img/season3/114.jpg',
            img2: 'img/small-season3/114.jpg',
            alt: "loan repayment"
        }, {
            img1: 'img/season3/113.jpg',
            img2: 'img/small-season3/113.jpg',
            alt: "tax benefits ."
        }, {
            img1: 'img/season3/112.jpg',
            img2: 'img/small-season3/112.jpg',
            alt: "repayment history"
        }, {
            img1: 'img/season3/111.jpg',
            img2: 'img/small-season3/111.jpg',
            alt: "xisting home loan"
        }, {
            img1: 'img/season3/110.jpg',
            img2: 'img/small-season3/110.jpg',
            alt: "bank statement"
        }, {
            img1: 'img/season3/109.jpg',
            img2: 'img/small-season3/109.jpg',
            alt: "education expense"
        }, {
            img1: 'img/season3/106.jpg',
            img2: 'img/small-season3/106.jpg',
            alt: "marriage expense"
        }, {
            img1: 'img/season3/105.jpg',
            img2: 'img/small-season3/105.jpg',
            alt: "reasons for saving regular income"
        }, {
            img1: 'img/season3/104.jpg',
            img2: 'img/small-season3/104.jpg',
            alt: "regular income"
        }, {
            img1: 'img/season3/103.jpg',
            img2: 'img/small-season3/103.jpg',
            alt: "source of income"
        }, {
            img1: 'img/season3/101.jpg',
            img2: 'img/small-season3/101.jpg',
            alt: "economic downturn"
        }, {
            img1: 'img/season3/100.jpg',
            img2: 'img/small-season3/100.jpg',
            alt: "inflation"
        }, {
            img1: 'img/season3/96.jpg',
            img2: 'img/small-season3/96.jpg',
            alt: "saving habit"
        }, {
            img1: 'img/season3/95.jpg',
            img2: 'img/small-season3/95.jpg',
            alt: "monthly spend"
        }, {
            img1: 'img/season3/92.jpg',
            img2: 'img/small-season3/92.jpg',
            alt: "track budget."
        }, {
            img1: 'img/season3/91.jpg',
            img2: 'img/small-season3/91.jpg',
            alt: "track budget credit card scams"
        }, {
            img1: 'img/season3/72.jpg',
            img2: 'img/small-season3/72.jpg',
            alt: "bankruptcy"
        }, {
            img1: 'img/season3/73.jpg',
            img2: 'img/small-season3/73.jpg',
            alt: "cheque deposit"
        }, {
            img1: 'img/season3/74.jpg',
            img2: 'img/small-season3/74.jpg',
            alt: "bank balance"
        }, {
            img1: 'img/season3/75.jpg',
            img2: 'img/small-season3/75.jpg',
            alt: "stop payment"
        }, {
            img1: 'img/season3/76.jpg',
            img2: 'img/small-season3/76.jpg',
            alt: "dormant account"
        }, {
            img1: 'img/season3/77.jpg',
            img2: 'img/small-season3/77.jpg',
            alt: "lending institution"
        }, {
            img1: 'img/season3/78.jpg',
            img2: 'img/small-season3/78.jpg',
            alt: "reject home loan"
        }, {
            img1: 'img/season3/79.jpg',
            img2: 'img/small-season3/79.jpg',
            alt: "financial expenditure"
        }, {
            img1: 'img/season3/80.jpg',
            img2: 'img/small-season3/80.jpg',
            alt: "financial goal"
        }, {
            img1: 'img/season3/81.jpg',
            img2: 'img/small-season3/81.jpg',
            alt: "buying a house"
        }, {
            img1: 'img/season3/82.jpg',
            img2: 'img/small-season3/82.jpg',
            alt: "liabilities"
        }, {
            img1: 'img/season3/83.jpg',
            img2: 'img/small-season3/83.jpg',
            alt: "long term financial goals"
        }, {
            img1: 'img/season3/84.jpg',
            img2: 'img/small-season3/84.jpg',
            alt: "best way to retire early"
        }, {
            img1: 'img/season3/85.jpg',
            img2: 'img/small-season3/85.jpg',
            alt: "Mistakes while filing ITR"
        }, {
            img1: 'img/season3/86.jpg',
            img2: 'img/small-season3/86.jpg',
            alt: "eligibility for personal loan"
        }, {
            img1: 'img/season3/87.jpg',
            img2: 'img/small-season3/87.jpg',
            alt: "personal loan rejection reasons"
        }, {
            img1: 'img/season3/88.jpg',
            img2: 'img/small-season3/88.jpg',
            alt: "Short term financial goals"
        }, {
            img1: 'img/season3/89.jpg',
            img2: 'img/small-season3/89.jpg',
            alt: "is tax evasion a criminal offence in india"
        }, {
            img1: 'img/season3/90.jpg',
            img2: 'img/small-season3/90.jpg',
            alt: "tax evasion cases in india"
        }, {
            img1: 'img/season3/1.jpg',
            img2: 'img/small-season3/1.jpg',
            alt: "tax avoidance cases"
        }, {
            img1: 'img/season3/7.jpg',
            img2: 'img/small-season3/7.jpg',
            alt: "tax evasion and tax avoidance"
        }, {
            img1: 'img/season3/8.jpg',
            img2: 'img/small-season3/8.jpg',
            alt: "get education loan in India"
        }, {
            img1: 'img/season3/20.jpg',
            img2: 'img/small-season3/20.jpg',
            alt: "long term financial goals Top up loan or personal loan"
        }, {
            img1: 'img/season3/21.jpg',
            img2: 'img/small-season3/21.jpg',
            alt: "Top up loan or personal loan"
        }, {
            img1: 'img/season3/27.jpg',
            img2: 'img/small-season3/27.jpg',
            alt: "save money from salary in India"
        }, {
            img1: 'img/season3/28.jpg',
            img2: 'img/small-season3/28.jpg',
            alt: "saving money for the future"
        }, {
            img1: 'img/season3/30.jpg',
            img2: 'img/small-season3/30.jpg',
            alt: "Indian family monthly budget"
        }, {
            img1: 'img/season3/34.jpg',
            img2: 'img/small-season3/34.jpg',
            alt: "disadvantages of credit card"
        }, {
            img1: 'img/season3/35.jpg',
            img2: 'img/small-season3/35.jpg',
            alt: "cheque dishonour reasons"
        }, {
            img1: 'img/season3/36.jpg',
            img2: 'img/small-season3/36.jpg',
            alt: "cheque dishonour charges"
        }, {
            img1: 'img/season3/37.jpg',
            img2: 'img/small-season3/37.jpg',
            alt: "rejection of home loan"
        }, {
            img1: 'img/season3/38.jpg',
            img2: 'img/small-season3/38.jpg',
            alt: "tax evasion a criminal offence"
        }, {
            img1: 'img/season3/41.jpg',
            img2: 'img/small-season3/41.jpg',
            alt: "how to retire early"
        }, {
            img1: 'img/season3/42.jpg',
            img2: 'img/small-season3/42.jpg',
            alt: "buying and selling of stocks"
        }, {
            img1: 'img/season3/43.jpg',
            img2: 'img/small-season3/43.jpg',
            alt: "What does the budget mean for the middle class?"
        }, {
            img1: 'img/season3/47.jpg',
            img2: 'img/small-season3/47.jpg',
            alt: "health insurance policy"
        }, {
            img1: 'img/season3/48.jpg',
            img2: 'img/small-season3/48.jpg',
            alt: "Financial planning"
        }, {
            img1: 'img/season3/53.jpg',
            img2: 'img/small-season3/53.jpg',
            alt: "retirement fund"
        }, {
            img1: 'img/season3/54.jpg',
            img2: 'img/small-season3/54.jpg',
            alt: "payment of taxes."
        }, {
            img1: 'img/season3/57.jpg',
            img2: 'img/small-season3/57.jpg',
            alt: "Business after retirement"
        }, {
            img1: 'img/season3/58.jpg',
            img2: 'img/small-season3/58.jpg',
            alt: "Tax deadline"
        }, {
            img1: 'img/season3/61.jpg',
            img2: 'img/small-season3/61.jpg',
            alt: "tax laws India"
        }, {
            img1: 'img/season3/62.jpg',
            img2: 'img/small-season3/62.jpg',
            alt: "education loan"
        }, {
            img1: 'img/season3/63.jpg',
            img2: 'img/small-season3/63.jpg',
            alt: "loan repayment"
        }, {
            img1: 'img/season3/64.jpg',
            img2: 'img/small-season3/64.jpg',
            alt: "tax benefits "
        }, {
            img1: 'img/season3/65.jpg',
            img2: 'img/small-season3/65.jpg',
            alt: "repayment history"
        }, {
            img1: 'img/season3/66.jpg',
            img2: 'img/small-season3/66.jpg',
            alt: "existing home loan"
        }, {
            img1: 'img/season3/67.jpg',
            img2: 'img/small-season3/67.jpg',
            alt: "bank statement"
        }, {
            img1: 'img/season3/68.jpg',
            img2: 'img/small-season3/68.jpg',
            alt: "education expense"
        }, {
            img1: 'img/season3/69.jpg',
            img2: 'img/small-season3/69.jpg',
            alt: "marriage expense"
        }, {
            img1: 'img/season3/70.jpg',
            img2: 'img/small-season3/70.jpg',
            alt: "reasons for saving"
        }
    ];
    //for season2
    $scope.season2 = [{
        img1: 'img/season2/1.jpg',
        img2: 'img/small-season2/1.jpg',
        alt: " regular income"
    }, {
        img1: 'img/season2/2.jpg',
        img2: 'img/small-season2/2.jpg',
        alt: "source of income"
    }, {
        img1: 'img/season2/4.jpg',
        img2: 'img/small-season2/4.jpg',
        alt: "economic downturn"
    }, {
        img1: 'img/season2/7.jpg',
        img2: 'img/small-season2/7.jpg',
        alt: "inflation"
    }, {
        img1: 'img/season2/11.jpg',
        img2: 'img/small-season2/11.jpg',
        alt: "saving habit"
    }, {
        img1: 'img/season2/12.jpg',
        img2: 'img/small-season2/12.jpg',
        alt: "monthly spend"
    }, {
        img1: 'img/season2/13.jpg',
        img2: 'img/small-season2/13.jpg',
        alt: "credit card scams"
    }, {
        img1: 'img/season2/14.jpg',
        img2: 'img/small-season2/14.jpg',
        alt: "lonbankruptcy"
    }, {
        img1: 'img/season2/15.jpg',
        img2: 'img/small-season2/15.jpg',
        alt: "cheque deposit"
    }, {
        img1: 'img/season2/18.jpg',
        img2: 'img/small-season2/18.jpg',
        alt: "bank balance"
    }, {
        img1: 'img/season2/19.jpg',
        img2: 'img/small-season2/19.jpg',
        alt: "stop payment"
    }, {
        img1: 'img/season2/20.jpg',
        img2: 'img/small-season2/20.jpg',
        alt: "dormant account"
    }, {
        img1: 'img/season2/21.jpg',
        img2: 'img/small-season2/21.jpg',
        alt: "lending institution"
    }, {
        img1: 'img/season2/22.jpg',
        img2: 'img/small-season2/22.jpg',
        alt: "reject home loan"
    }, {
        img1: 'img/season2/23.jpg',
        img2: 'img/small-season2/23.jpg',
        alt: "financial expenditure"
    }, {
        img1: 'img/season2/24.jpg',
        img2: 'img/small-season2/24.jpg',
        alt: "long term financial goals"
    }, {
        img1: 'img/season2/25.jpg',
        img2: 'img/small-season2/25.jpg',
        alt: "financial goal"
    }, {
        img1: 'img/season2/26.jpg',
        img2: 'img/small-season2/26.jpg',
        alt: "buying a house"
    }, {
        img1: 'img/season2/27.jpg',
        img2: 'img/small-season2/27.jpg',
        alt: "liabilities"
    }, {
        img1: 'img/season2/28.jpg',
        img2: 'img/small-season2/28.jpg',
        alt: "repayment history"
    }, {
        img1: 'img/season2/29.jpg',
        img2: 'img/small-season2/29.jpg',
        alt: "existing home loan"
    }, {
        img1: 'img/season2/30.jpg',
        img2: 'img/small-season2/30.jpg',
        alt: "bank statement"
    }, {
        img1: 'img/season2/31.jpg',
        img2: 'img/small-season2/31.jpg',
        alt: "education expense"
    }];
    //for season1
    $scope.season1 = [{
        img1: 'img/season1/1.jpg',
        img2: 'img/small-season1/1.jpg',
        alt: "source of income"
    }, {
        img1: 'img/season1/2.jpg',
        img2: 'img/small-season1/2.jpg',
        alt: "long term financial goals"
    }, {
        img1: 'img/season1/3.jpg',
        img2: 'img/small-season1/3.jpg',
        alt: "economic downturn"
    }, {
        img1: 'img/season1/4.jpg',
        img2: 'img/small-season1/4.jpg',
        alt: "inflation "
    }, {
        img1: 'img/season1/5.jpg',
        img2: 'img/small-season1/5.jpg',
        alt: "saving habit"
    }, {
        img1: 'img/season1/7.jpg',
        img2: 'img/small-season1/7.jpg',
        alt: "monthly spend"
    }, {
        img1: 'img/season1/8.jpg',
        img2: 'img/small-season1/8.jpg',
        alt: "get education loan in India"
    }, {
        img1: 'img/season1/9.jpg',
        img2: 'img/small-season1/9.jpg',
        alt: "Top up loan or personal loan"
    }, {
        img1: 'img/season1/10.jpg',
        img2: 'img/small-season1/10.jpg',
        alt: "save money from salary in India"
    }, {
        img1: 'img/season1/11.jpg',
        img2: 'img/small-season1/11.jpg',
        alt: "saving money for the future"
    }, {
        img1: 'img/season1/12.jpg',
        img2: 'img/small-season1/12.jpg',
        alt: "Indian family monthly budget"
    }, {
        img1: 'img/season1/13.jpg',
        img2: 'img/small-season1/13.jpg',
        alt: "disadvantages of credit card"
    }, {
        img1: 'img/season1/14.jpg',
        img2: 'img/small-season1/14.jpg',
        alt: "cheque dishonour reasons"
    }, {
        img1: 'img/season1/15.jpg',
        img2: 'img/small-season1/15.jpg',
        alt: "cheque dishonour charges"
    }, {
        img1: 'img/season1/16.jpg',
        img2: 'img/small-season1/16.jpg',
        alt: "rejection of home loan"
    }, {
        img1: 'img/season1/17.jpg',
        img2: 'img/small-season1/17.jpg',
        alt: "how to retire early"
    }, {
        img1: 'img/season1/18.jpg',
        img2: 'img/small-season1/18.jpg',
        alt: "tax evasion a criminal offence"
    }, {
        img1: 'img/season1/19.jpg',
        img2: 'img/small-season1/19.jpg',
        alt: "investment guide"
    }, {
        img1: 'img/season1/22.jpg',
        img2: 'img/small-season1/22.jpg',
        alt: "buying and selling of stocks"
    }, {
        img1: 'img/season1/23.jpg',
        img2: 'img/small-season1/23.jpg',
        alt: "What does the budget mean for the middle class?"
    }, {
        img1: 'img/season1/24.jpg',
        img2: 'img/small-season1/24.jpg',
        alt: "health insurance policy"
    }, {
        img1: 'img/season1/25.jpg',
        img2: 'img/small-season1/25.jpg',
        alt: "Financial planning"
    }, {
        img1: 'img/season1/26.jpg',
        img2: 'img/small-season1/26.jpg',
        alt: "retirement fund"
    }, {
        img1: 'img/season1/27.jpg',
        img2: 'img/small-season1/27.jpg',
        alt: "payment of taxes"
    }, {
        img1: 'img/season1/29.jpg',
        img2: 'img/small-season1/29.jpg',
        alt: "Business after retirement "
    }, {
        img1: 'img/season1/32.jpg',
        img2: 'img/small-season1/32.jpg',
        alt: "Tax deadline"
    }, {
        img1: 'img/season1/33.jpg',
        img2: 'img/small-season1/33.jpg',
        alt: "tax laws India"
    }, {
        img1: 'img/season1/35.jpg',
        img2: 'img/small-season1/35.jpg',
        alt: "education loan"
    }, {
        img1: 'img/season1/36.jpg',
        img2: 'img/small-season1/36.jpg',
        alt: "loan repayment"
    }, {
        img1: 'img/season1/37.jpg',
        img2: 'img/small-season1/37.jpg',
        alt: "tax benefits"
    }, {
        img1: 'img/season1/38.jpg',
        img2: 'img/small-season1/38.jpg',
        alt: "repayment history"
    }, {
        img1: 'img/season1/40.jpg',
        img2: 'img/small-season1/40.jpg',
        alt: "existing home loan"
    }, {
        img1: 'img/season1/41.jpg',
        img2: 'img/small-season1/41.jpg',
        alt: "bank statement"
    }, {
        img1: 'img/season1/42.jpg',
        img2: 'img/small-season1/42.jpg',
        alt: "education expense"
    }, {
        img1: 'img/season1/43.jpg',
        img2: 'img/small-season1/43.jpg',
        alt: "marriage expense"
    }, {
        img1: 'img/season1/44.jpg',
        img2: 'img/small-season1/44.jpg',
        alt: "long term financial goals"
    }];
})