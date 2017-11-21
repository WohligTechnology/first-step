myApp.controller('EpisodeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    $scope.template = TemplateService.getHTML("content/episode.html");
    TemplateService.title = "Episode"; //This is the Title of the Website
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

    //for season3
    $scope.season3 = [{
            imageUrl: "CW8pc1UPkwc",
            videoUrl: "CW8pc1UPkwc",
            episodeno: "Prelaunch Episode",
            searchName: "Prelaunch",
        }, {
            imageUrl: "ihHHDFjK0ic",
            videoUrl: "ihHHDFjK0ic",
            episodeno: "Launch Event Episode",
            searchName: "Launch",
        },
        {
            imageUrl: "X7ZkEQMhlek",
            videoUrl: "X7ZkEQMhlek",
            episodeno: "Episode 1",
            searchName: "Banking",
        },
        {
            imageUrl: "HC7x-i_XI2k",
            videoUrl: "HC7x-i_XI2k",
            episodeno: "Episode 2",
            searchName: "Banking",
        },
        {
            imageUrl: "wlQiBbevewo",
            videoUrl: "wlQiBbevewo",
            episodeno: "Episode 3",
            searchName: "Banking",
        }, {
            imageUrl: "6dfpIRcyEVM",
            videoUrl: "6dfpIRcyEVM",
            episodeno: "Episode 4",
            searchName: "Banking ,Insurance",
        },
        {
            imageUrl: "K5npGoW5ZSI",
            videoUrl: "K5npGoW5ZSI",
            episodeno: "Episode 5",
            searchName: "Insurance",
        },
        {
            imageUrl: "SHqB-3ZxJsM",
            videoUrl: "SHqB-3ZxJsM",
            episodeno: "Episode 6",
            searchName: "Health Insurance",
        },
        {
            imageUrl: "F1zxABRFV8g",
            videoUrl: "F1zxABRFV8g",
            episodeno: "Episode 7",
            searchName: "Mutual Funds",
        },
        {
            imageUrl: "jet7j7_haUw",
            videoUrl: "jet7j7_haUw",
            episodeno: "Episode 8",
            searchName: "Mutual Funds",
        },
        {
            imageUrl: "wLOaavEolYI",
            videoUrl: "wLOaavEolYI",
            episodeno: "Episode 9",
            searchName: "Mutual Funds,Equity, Personal Finance",
        },
        {
            imageUrl: "JQFSqwbOoA0",
            videoUrl: "JQFSqwbOoA0",
            episodeno: "Episode 10",
            searchName: "Portfolio",
        },
        {
            imageUrl: "u8rLSglEgKk",
            videoUrl: "u8rLSglEgKk",
            episodeno: "Episode 11",
            searchName: "Balanced Fund,Balance Fund",
        },
        {
            imageUrl: "oLkD_3uIxws",
            videoUrl: "oLkD_3uIxws",
            episodeno: "Episode 12",
            searchName: "Financial Planning",
        },
        {
            imageUrl: "98klaFbH1xU",
            videoUrl: "98klaFbH1xU",
            episodeno: "Episode 13",
            searchName: "Mutual Funds",
        },
        {
            imageUrl: "25mhwSZya2M",
            videoUrl: "25mhwSZya2M",
            episodeno: "Episode 14",
            searchName: "Mutual Funds",
        },
        {
            imageUrl: "mNl5_09c81k",
            videoUrl: "mNl5_09c81k",
            episodeno: "Episode 15",
            searchName: "Mutual Funds",
        }

    ];

    $scope.more3 = false;
    $scope.view3 = true;

    $scope.viewMore3 = function () {
        $scope.more3 = true;
        $scope.view3 = false;
    }
    $scope.viewLess3 = function () {
        $scope.more3 = false;
        $scope.view3 = true;
    }
    //end of season3
    //for season2
    $scope.season2 = [{
            imageUrl: "6e1SJEJJyBw",
            videoUrl: "6e1SJEJJyBw",
            episodeno: "Episode 1",
            searchName: "Launch",
        }, {
            imageUrl: "Rl0pNdNDpfo",
            videoUrl: "Rl0pNdNDpfo",
            episodeno: "Episode 2",
            searchName: "Demonitization",
        }, {
            imageUrl: "9fPdYPvYhL4",
            videoUrl: "9fPdYPvYhL4",
            episodeno: "Episode 3",
            searchName: "Digital Banking",
        }, {
            imageUrl: "WApywMO9Wl0",
            videoUrl: "WApywMO9Wl0",
            episodeno: "Episode 4",
            searchName: "E-Wallet & Cashless Banking",
        }, {
            imageUrl: "OrX0r5K8ma4",
            videoUrl: "OrX0r5K8ma4",
            episodeno: "Episode 5",
            searchName: "Safety & Security of Account & Cards",
        }, {
            imageUrl: "HYsU0cSTRDY",
            videoUrl: "HYsU0cSTRDY",
            episodeno: "Episode 6",
            searchName: "Types Of Mutual funds",
        }, {
            imageUrl: "yTCQc0cI8sg",
            videoUrl: "yTCQc0cI8sg",
            episodeno: "Episode 7",
            searchName: "Budget",
        }, {
            imageUrl: "4ToAgejb1bo",
            videoUrl: "4ToAgejb1bo",
            episodeno: "Episode 8",
            searchName: "Personal Finances & Savings",
        }, {
            imageUrl: "Eu1lLdio33s",
            videoUrl: "Eu1lLdio33s",
            episodeno: "Episode 9",
            searchName: "",
        }, {
            imageUrl: "zUITRJTKDok",
            videoUrl: "zUITRJTKDok",
            episodeno: "Episode 10",
            searchName: "Budget",
        }, {
            imageUrl: "y5X8BYujJ3s",
            videoUrl: "y5X8BYujJ3s",
            episodeno: "Episode 11",
            searchName: "Financial Planning",
        }, {
            imageUrl: "BoIy7MPxSBU",
            videoUrl: "BoIy7MPxSBU",
            episodeno: "Episode 12",
            searchName: "Mutual Funds & Debt Funds",
        }, {
            imageUrl: "Q-iBDeA4Hz0",
            videoUrl: "Q-iBDeA4Hz0",
            episodeno: "Episode 13",
            searchName: "Financial Planning & Investment in Gold",
        }, {
            imageUrl: "H4pnL0Lmlzc",
            videoUrl: "H4pnL0Lmlzc",
            episodeno: "Episode 14",
            searchName: "Budget",
        }, {
            imageUrl: "CZ-hAHp42-8",
            videoUrl: "CZ-hAHp42-8",
            episodeno: "Episode 15",
            searchName: "Budget",
        }, {
            imageUrl: "FEFEJ_HJq2o",
            videoUrl: "FEFEJ_HJq2o",
            episodeno: "Episode 16",
            searchName: "Budget",
        }, {
            imageUrl: "B034I1zal0w",
            videoUrl: "B034I1zal0w",
            episodeno: "Episode 17",
            searchName: "Tax",
        }, {
            imageUrl: "buTCKyeM-zg",
            videoUrl: "buTCKyeM-zg",
            episodeno: "Episode 18",
            searchName: "Equity",
        }, {
            imageUrl: "jf39ex_CbFU",
            videoUrl: "jf39ex_CbFU",
            episodeno: "Episode 19",
            searchName: "Invest Options and tax Savings",
        }, {
            imageUrl: "PAx-hX27hOQ",
            videoUrl: "PAx-hX27hOQ",
            episodeno: "Episode 20",
            searchName: "Equity & Mutual Funds",
        }, {
            imageUrl: "sFf-tYRRRxo",
            videoUrl: "sFf-tYRRRxo",
            episodeno: "Episode 21",
            searchName: "Insurances",
        }, {
            imageUrl: "UbQEWdETJmc",
            videoUrl: "UbQEWdETJmc",
            episodeno: "Episode 22",
            searchName: "Life Insurance",
        }, {
            imageUrl: "h8NFKbhhCPc",
            videoUrl: "h8NFKbhhCPc",
            episodeno: "Episode 23",
            searchName: "Insurance",
        }, {
            imageUrl: "-0hiPpadda8",
            videoUrl: "-0hiPpadda8",
            episodeno: "Episode 24",
            searchName: "Personal Finance",
        }, {
            imageUrl: "MYo4T_2TckQ",
            videoUrl: "MYo4T_2TckQ",
            episodeno: "Episode 25",
            searchName: "Grand Finale",
        }

    ];

    $scope.more2 = false;
    $scope.view2 = true;

    $scope.viewMore2 = function () {
        $scope.more2 = true;
        $scope.view2 = false;
    }
    $scope.viewLess2 = function () {
        $scope.more2 = false;
        $scope.view2 = true;
    }
    //end of season2

    //for season1
    $scope.season1 = [{
            imageUrl: "OqT3D60MZVk",
            videoUrl: "OqT3D60MZVk",
            episodeno: "Episode 1",
            searchName: "",
        }, {
            imageUrl: "47VM_wfNUdQ",
            videoUrl: "47VM_wfNUdQ",
            episodeno: "Episode 2",
            searchName: "Financial Budgeting",
        }, {
            imageUrl: "x4nlGY36J-s",
            videoUrl: "x4nlGY36J-s",
            episodeno: "Episode 3",
            searchName: "Financial Goals",
        }, {
            imageUrl: "nrWcU0iPTrg",
            videoUrl: "nrWcU0iPTrg",
            episodeno: "Episode 4",
            searchName: "Banking",
        }, {
            imageUrl: "yqX09Ai8bdw",
            videoUrl: "yqX09Ai8bdw",
            episodeno: "Episode 5",
            searchName: "Investments",
        }, {
            imageUrl: "vf8Z_0dk3tQ",
            videoUrl: "vf8Z_0dk3tQ",
            episodeno: "Episode 6",
            searchName: "Simple & Compound Interest",
        }, {
            imageUrl: "YnauodrRqpw",
            videoUrl: "YnauodrRqpw",
            episodeno: "Episode 7",
            searchName: "Fixed & Recurring Deposit",
        }, {
            imageUrl: "KurI8w6hteg",
            videoUrl: "KurI8w6hteg",
            episodeno: "Episode 8",
            searchName: "Online Banking",
        }, {
            imageUrl: "d2b_Kv_d3Cs",
            videoUrl: "d2b_Kv_d3Cs",
            episodeno: "Episode 9",
            searchName: "Electronic Money",
        }, {
            imageUrl: "Umnq0EDKjcE",
            videoUrl: "Umnq0EDKjcE",
            episodeno: "Episode 10",
            searchName: "Post Office Savings",
        }, {
            imageUrl: "g20d_8D-G3k",
            videoUrl: "g20d_8D-G3k",
            episodeno: "Episode 11",
            searchName: "Credit Cards",
        }, {
            imageUrl: "AkZwkJnwoBw",
            videoUrl: "AkZwkJnwoBw",
            episodeno: "Episode 12",
            searchName: "Mutual Funds",
        }, {
            imageUrl: "b0trRrnppkQ",
            videoUrl: "b0trRrnppkQ",
            episodeno: "Episode 13",
            searchName: "Mutual Funds",
        }, {
            imageUrl: "ss8EycBDSfc",
            videoUrl: "ss8EycBDSfc",
            episodeno: "Episode 14",
            searchName: "Mutual Funds",
        }, {
            imageUrl: "cq0FB8O-SXk",
            videoUrl: "cq0FB8O-SXk",
            episodeno: "Episode 15",
            searchName: "Debt Mutual Funds",
        }, {
            imageUrl: "ZqKaGWON_ZE",
            videoUrl: "ZqKaGWON_ZE",
            episodeno: "Episode 16",
            searchName: "Mutual Funds",
        }, {
            imageUrl: "HV5u_wwPj3Y",
            videoUrl: "HV5u_wwPj3Y",
            episodeno: "Episode 17",
            searchName: "How to Invest in Mutual Funds",
        }, {
            imageUrl: "66NU5Ip_jMA",
            videoUrl: "66NU5Ip_jMA",
            episodeno: "Episode 18",
            searchName: "Types of Mutual Funds",
        },
        {
            imageUrl: "NxSM8956Hfo",
            videoUrl: "NxSM8956Hfo",
            episodeno: "Episode 19",
            searchName: "Exchange Trade Funds",
        }, {
            imageUrl: "rHFbbltTOiY",
            videoUrl: "rHFbbltTOiY",
            episodeno: "Episode 20",
            searchName: "International Funds",
        }, {
            imageUrl: "BT4u-shAQew",
            videoUrl: "BT4u-shAQew",
            episodeno: "Episode 21",
            searchName: "Gold Fund & SIP",
        }, {
            imageUrl: "uyLSt9UfOxA",
            videoUrl: "uyLSt9UfOxA",
            episodeno: "Episode 22",
            searchName: "Taxes on Mutual Funds",
        }, {
            imageUrl: "tM92E1YmsI0",
            videoUrl: "tM92E1YmsI0",
            episodeno: "Episode 23",
            searchName: "Mutual Funds",
        }, {
            imageUrl: "mM7M_DVh8Z0",
            videoUrl: "mM7M_DVh8Z0",
            episodeno: "Episode 24",
            searchName: "Portfolio Valuation",
        }, {
            imageUrl: "AL18u09wUZI",
            videoUrl: "AL18u09wUZI",
            episodeno: "Episode 25",
            searchName: "Insurance",
        }, {
            imageUrl: "mM7M_DVh8Z0",
            videoUrl: "mM7M_DVh8Z0",
            episodeno: "Episode 26",
            searchName: "Insurance",
        }, {
            imageUrl: "809LBgNmgDk",
            videoUrl: "809LBgNmgDk",
            episodeno: "Episode 27",
            searchName: "Insurance Coverage",
        }, {
            imageUrl: "mUqTxh4g3_g",
            videoUrl: "mUqTxh4g3_g",
            episodeno: "Episode 28",
            searchName: "Traditional Insuracne",
        }, {
            imageUrl: "SZ8EjsGNxpM",
            videoUrl: "SZ8EjsGNxpM",
            episodeno: "Episode 29",
            searchName: "Pension Policies & Term Plans",
        }, {
            imageUrl: "GppqPhUxObc",
            videoUrl: "GppqPhUxObc",
            episodeno: "Episode 30",
            searchname: "Term Insurance",
        }, {
            imageUrl: "6HaoOD0f9vo",
            videoUrl: "6HaoOD0f9vo",
            episodeno: "Episode 31",
            searchname: "Home, travel Insurance",
        }, {
            imageUrl: "OeUN0DMDDKA",
            videoUrl: "OeUN0DMDDKA",
            episodeno: "Episode 32",
            searchname: "Commodity Market",
        }, {
            imageUrl: "Qgc1-zs03J4",
            videoUrl: "Qgc1-zs03J4",
            episodeno: "Episode 33",
            searchname: "Precious & Base Metals",
        }, {
            imageUrl: "QbKSL3dbpfw",
            videoUrl: "QbKSL3dbpfw",
            episodeno: "Episode 34",
            searchname: "Investment in Agree Commodities",
        }, {
            imageUrl: "dhDAbtv81DE",
            videoUrl: "dhDAbtv81DE",
            episodeno: "Episode 35",
            searchname: "Commodity Oil & Gas",
        }, {
            imageUrl: "1ubwYZ-kfGM",
            videoUrl: "1ubwYZ-kfGM",
            episodeno: "Episode 36",
            searchname: "Equity",
        }, {
            imageUrl: "Uu4ZcHS87BI",
            videoUrl: "Uu4ZcHS87BI",
            episodeno: "Episode 37",
            searchname: "Open Demat Account",
        }, {
            imageUrl: "1kxH_-hl1Cc",
            videoUrl: "1kxH_-hl1Cc",
            episodeno: "Episode 38",
            searchname: "Trading Account in Stock Exchange",
        }, {
            imageUrl: "zwjQJeoxDOI",
            videoUrl: "zwjQJeoxDOI",
            episodeno: "Episode 39",
            searchname: "Equity investment",
        }, {
            imageUrl: "0MDwbSFGsmQ",
            videoUrl: "0MDwbSFGsmQ",
            episodeno: "Episode 40",
            searchname: "Equity Market & Circuit Filter",
        }, {
            imageUrl: "TdTwc6gHX-c",
            videoUrl: "TdTwc6gHX-c",
            episodeno: "Episode 41",
            searchname: "Equity IPO",
        }, {
            imageUrl: "_0Wf0M5DVjg",
            videoUrl: "_0Wf0M5DVjg",
            episodeno: "Episode 42",
            searchname: "FPO",
        }, {
            imageUrl: "QDC3Zc_VUmg",
            videoUrl: "QDC3Zc_VUmg",
            episodeno: "Episode 43",
            searchname: "Equity & Secondary Market Trading",
        }, {
            imageUrl: "_bXoAl5t1_E",
            videoUrl: "_bXoAl5t1_E",
            episodeno: "Episode 44",
            searchname: "Bonus Divedends",
        }, {
            imageUrl: "hHnCc429ic0",
            videoUrl: "hHnCc429ic0",
            episodeno: "Episode 45",
            searchname: "Investment Descision",
        }, {
            imageUrl: "IzMkQkHF7Zo",
            videoUrl: "IzMkQkHF7Zo",
            episodeno: "Episode 46",
            searchname: "Buying Shares",
        }, {
            imageUrl: "i8tUlIOaL0A",
            videoUrl: "i8tUlIOaL0A",
            episodeno: "Episode 47",
            searchname: "Fundamental Analysis",
        }, {
            imageUrl: "2J2jCdchSTI",
            videoUrl: "2J2jCdchSTI",
            episodeno: "Episode 48",
            searchname: "Techinical Analysis",
        }, {
            imageUrl: "OacVRhckWpc",
            videoUrl: "OacVRhckWpc",
            episodeno: "Episode 49",
            searchname: "Techinical Analysis",
        }, {
            imageUrl: "D55jjilaqTc",
            videoUrl: "D55jjilaqTc",
            episodeno: "Episode 50",
            searchname: "Derivatives, Futures and Options",
        }, {
            imageUrl: "ZMRG8JjIsBY",
            videoUrl: "ZMRG8JjIsBY",
            episodeno: "Episode 51",
            searchname: "Gurukul School",
        }, {
            imageUrl: "DW9ElKEEamE",
            videoUrl: "DW9ElKEEamE",
            episodeno: "Episode 52",
            searchName: "Saketari",
        }, {
            imageUrl: "s14042sqIQM",
            videoUrl: "s14042sqIQM",
            episodeno: "Episode 53",
            searchName: "Bhavanipur College",
        }, {
            imageUrl: "QeOPszD1mak",
            videoUrl: "QeOPszD1mak",
            episodeno: "Episode 54",
            searchName: "Abhinav bharati School",
        }, {
            imageUrl: "W7Gz0bqfaUc",
            videoUrl: "W7Gz0bqfaUc",
            episodeno: "Episode 55",
            searchName: "",
        }, {
            imageUrl: "PUGZ3_6D1pk",
            videoUrl: "PUGZ3_6D1pk",
            episodeno: "Episode 56",
            searchName: "Mahakumbh",
        }, {
            imageUrl: "24fffiDkkVU",
            videoUrl: "24fffiDkkVU",
            episodeno: "Episode 57",
            searchName: "Mahakumbh",
        }, {
            imageUrl: "1s-ZssxHuy4",
            videoUrl: "1s-ZssxHuy4",
            episodeno: "Episode 58",
            searchName: "",
        }, {
            imageUrl: "LjUbBWXyIvU",
            videoUrl: "LjUbBWXyIvU",
            episodeno: "Episode 59",
            searchName: "Young Investors Program ",
        }, {
            imageUrl: "k41uhc9qO3A",
            videoUrl: "k41uhc9qO3A",
            episodeno: "Episode 60",
            searchName: "Young Investors Program",
        }, {
            imageUrl: "PDr3qVnXZ8s",
            videoUrl: "PDr3qVnXZ8s",
            episodeno: "Episode 61",
            searchName: "Financial Planning",
        }, {
            imageUrl: "Ymcoo0QW7hQ",
            videoUrl: "Ymcoo0QW7hQ",
            episodeno: "Episode 62",
            searchName: "On ground Classrooms",
        }, {
            imageUrl: "Yrgr1b3Ad6g",
            videoUrl: "Yrgr1b3Ad6g",
            episodeno: "Episode 63",
            searchName: "On ground Classrooms",
        }, {
            imageUrl: "sfTvseID06E",
            videoUrl: "sfTvseID06E",
            episodeno: "Episode 64",
            searchName: "Young Investors Program",
        }, {
            imageUrl: "IcDQLVZp0rg",
            videoUrl: "IcDQLVZp0rg",
            episodeno: "Episode 65",
            searchName: "Rural Financial Literacy Program",
        }, {
            imageUrl: "_kK9V9CJmVI",
            videoUrl: "_kK9V9CJmVI",
            episodeno: "Episode 66",
            searchName: "Rural Financial Literacy Program",
        }, {
            imageUrl: "DmxsgZI3BJg",
            videoUrl: "DmxsgZI3BJg",
            episodeno: "Episode 67",
            searchName: "Young Investors Program",
        }, {
            imageUrl: "SZtB0Qk_EKw",
            videoUrl: "SZtB0Qk_EKw",
            episodeno: "Episode 68",
            searchName: "Rural Financial Literacy Program",
        }, {
            imageUrl: "lAvQsdNCc_s",
            videoUrl: "lAvQsdNCc_s",
            episodeno: "Episode 69",
            searchName: "Financial Planning",
        }, {
            imageUrl: "Ra9lv36JG-U",
            videoUrl: "Ra9lv36JG-U",
            episodeno: "Episode 70",
            searchName: "Netmagic Solutions",
        }, {
            imageUrl: "qPDXLDK0aBY",
            videoUrl: "qPDXLDK0aBY",
            episodeno: "Episode 71",
            searchName: "On ground Classrooms",
        }, {
            imageUrl: "1DP9_PYWlJE",
            videoUrl: "1DP9_PYWlJE",
            episodeno: "Episode 72",
            searchName: "Rural Financial Literacy Program",
        }, {
            imageUrl: "UO-i7elCWCI",
            videoUrl: "UO-i7elCWCI",
            episodeno: "Episode 73",
            searchName: "Rural Financial Literacy Program",
        }, {
            imageUrl: "FahtReKv-u8",
            videoUrl: "FahtReKv-u8",
            episodeno: "Episode 74",
            searchName: "Young Investors Program",
        }, {
            imageUrl: "jb8Buwo3rco",
            videoUrl: "jb8Buwo3rco",
            episodeno: "Episode 75",
            searchName: "Young Investors Program",
        }, {
            imageUrl: "FGueOhY6HJg",
            videoUrl: "FGueOhY6HJg",
            episodeno: "Episode 76",
            searchName: "Young Investors Program",
        }, {
            imageUrl: "DEEmpminlBU",
            videoUrl: "DEEmpminlBU",
            episodeno: "Episode 77",
            searchName: "On ground Classrooms",
        }, {
            imageUrl: "s3ZwGWcw9xg",
            videoUrl: "s3ZwGWcw9xg",
            episodeno: "Episode 78",
            searchName: "Young Investors Program",
        }, {
            imageUrl: "1y5O7ogDOJ0",
            videoUrl: "1y5O7ogDOJ0",
            episodeno: "Episode 79",
            searchName: "Financial Planning",
        }, {
            imageUrl: "GSIH0jXVSD8",
            videoUrl: "GSIH0jXVSD8",
            episodeno: "Episode 80",
            searchName: "Financial Planning",
        }, {
            imageUrl: "-zWklRlJ_e8",
            videoUrl: "-zWklRlJ_e8",
            episodeno: "Episode 81",
            searchName: "Jabalpur",
        }, {
            imageUrl: "kHQwdznO7tE",
            videoUrl: "kHQwdznO7tE",
            episodeno: "Episode 82",
            searchName: "SEBI",
        }, {
            imageUrl: "aQz0Gsd2oBo",
            videoUrl: "aQz0Gsd2oBo",
            episodeno: "Episode 83",
            searchName: "Online Invesments",
        },
    ];

    $scope.more1 = false;
    $scope.view1 = true;

    $scope.viewMore1 = function () {
        $scope.more1 = true;
        $scope.view1 = false;
    }
    $scope.viewLess1 = function () {
        $scope.more1 = false;
        $scope.view1 = true;
    }
    //end of season1


})