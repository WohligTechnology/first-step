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


    //for season2
    $scope.season2 = [{
        imageUrl: "6e1SJEJJyBw",
        videoUrl: "6e1SJEJJyBw",
        episodeno: "Episode 1",
    }, {
        imageUrl: "Rl0pNdNDpfo",
        videoUrl: "Rl0pNdNDpfo",
        episodeno: "Episode 2",
    }, {
        imageUrl: "9fPdYPvYhL4",
        videoUrl: "9fPdYPvYhL4",
        episodeno: "Episode 3",
    }, {
        imageUrl: "WApywMO9Wl0",
        videoUrl: "WApywMO9Wl0",
        episodeno: "Episode 4",
    }, {
        imageUrl: "OrX0r5K8ma4",
        videoUrl: "OrX0r5K8ma4",
        episodeno: "Episode 5",
    }, {
        imageUrl: "HYsU0cSTRDY",
        videoUrl: "HYsU0cSTRDY",
        episodeno: "Episode 6",
    }, {
        imageUrl: "yTCQc0cI8sg",
        videoUrl: "yTCQc0cI8sg",
        episodeno: "Episode 7",
    }, {
        imageUrl: "4ToAgejb1bo",
        videoUrl: "4ToAgejb1bo",
        episodeno: "Episode 8",
    }, {
        imageUrl: "Eu1lLdio33s",
        videoUrl: "Eu1lLdio33s",
        episodeno: "Episode 9",
    }, {
        imageUrl: "zUITRJTKDok",
        videoUrl: "zUITRJTKDok",
        episodeno: "Episode 10",
    }, {
        imageUrl: "y5X8BYujJ3s",
        videoUrl: "y5X8BYujJ3s",
        episodeno: "Episode 11",
    }, {
        imageUrl: "BoIy7MPxSBU",
        videoUrl: "BoIy7MPxSBU",
        episodeno: "Episode 12",
    }, {
        imageUrl: "Q-iBDeA4Hz0",
        videoUrl: "Q-iBDeA4Hz0",
        episodeno: "Episode 13",
    }, {
        imageUrl: "H4pnL0Lmlzc",
        videoUrl: "H4pnL0Lmlzc",
        episodeno: "Episode 14",
    }, {
        imageUrl: "CZ-hAHp42-8",
        videoUrl: "CZ-hAHp42-8",
        episodeno: "Episode 15",
    }, {
        imageUrl: "FEFEJ_HJq2o",
        videoUrl: "FEFEJ_HJq2o",
        episodeno: "Episode 16",
    }, {
        imageUrl: "B034I1zal0w",
        videoUrl: "B034I1zal0w",
        episodeno: "Episode 17",
    }, {
        imageUrl: "buTCKyeM-zg",
        videoUrl: "buTCKyeM-zg",
        episodeno: "Episode 18",
    }, {
        imageUrl: "jf39ex_CbFU",
        videoUrl: "jf39ex_CbFU",
        episodeno: "Episode 19",
    }, {
        imageUrl: "PAx-hX27hOQ",
        videoUrl: "PAx-hX27hOQ",
        episodeno: "Episode 20",
    }, {
        imageUrl: "sFf-tYRRRxo",
        videoUrl: "sFf-tYRRRxo",
        episodeno: "Episode 21",
    }, {
        imageUrl: "UbQEWdETJmc",
        videoUrl: "UbQEWdETJmc",
        episodeno: "Episode 22",
    }, {
        imageUrl: "h8NFKbhhCPc",
        videoUrl: "h8NFKbhhCPc",
        episodeno: "Episode 23",
    }, {
        imageUrl: "-0hiPpadda8",
        videoUrl: "-0hiPpadda8",
        episodeno: "Episode 24",
    }, {
        imageUrl: "MYo4T_2TckQ",
        videoUrl: "MYo4T_2TckQ",
        episodeno: "Episode 25",
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
    }, {
        imageUrl: "47VM_wfNUdQ",
        videoUrl: "47VM_wfNUdQ",
        episodeno: "Episode 2",
    }, {
        imageUrl: "x4nlGY36J-s",
        videoUrl: "x4nlGY36J-s",
        episodeno: "Episode 3",
    }, {
        imageUrl: "nrWcU0iPTrg",
        videoUrl: "nrWcU0iPTrg",
        episodeno: "Episode 4",
    }, {
        imageUrl: "yqX09Ai8bdw",
        videoUrl: "yqX09Ai8bdw",
        episodeno: "Episode 5",
    }, {
        imageUrl: "vf8Z_0dk3tQ",
        videoUrl: "vf8Z_0dk3tQ",
        episodeno: "Episode 6",
    }, {
        imageUrl: "YnauodrRqpw",
        videoUrl: "YnauodrRqpw",
        episodeno: "Episode 7",
    }, {
        imageUrl: "KurI8w6hteg",
        videoUrl: "KurI8w6hteg",
        episodeno: "Episode 8",
    }, {
        imageUrl: "d2b_Kv_d3Cs",
        videoUrl: "d2b_Kv_d3Cs",
        episodeno: "Episode 9",
    }, {
        imageUrl: "Umnq0EDKjcE",
        videoUrl: "Umnq0EDKjcE",
        episodeno: "Episode 10",
    }, {
        imageUrl: "g20d_8D-G3k",
        videoUrl: "g20d_8D-G3k",
        episodeno: "Episode 11",
    }, {
        imageUrl: "AkZwkJnwoBw",
        videoUrl: "AkZwkJnwoBw",
        episodeno: "Episode 12",
    }, {
        imageUrl: "b0trRrnppkQ",
        videoUrl: "b0trRrnppkQ",
        episodeno: "Episode 13",
    }, {
        imageUrl: "ss8EycBDSfc",
        videoUrl: "ss8EycBDSfc",
        episodeno: "Episode 14",
    }, {
        imageUrl: "cq0FB8O-SXk",
        videoUrl: "cq0FB8O-SXk",
        episodeno: "Episode 15",
    }, {
        imageUrl: "ZqKaGWON_ZE",
        videoUrl: "ZqKaGWON_ZE",
        episodeno: "Episode 16",
    }, {
        imageUrl: "HV5u_wwPj3Y",
        videoUrl: "HV5u_wwPj3Y",
        episodeno: "Episode 17",
    }, {
        imageUrl: "66NU5Ip_jMA",
        videoUrl: "66NU5Ip_jMA",
        episodeno: "Episode 18",
    },
    {
        imageUrl: "NxSM8956Hfo",
        videoUrl: "NxSM8956Hfo",
        episodeno: "Episode 19",
    }, {
        imageUrl: "rHFbbltTOiY",
        videoUrl: "rHFbbltTOiY",
        episodeno: "Episode 20",
    }, {
        imageUrl: "BT4u-shAQew",
        videoUrl: "BT4u-shAQew",
        episodeno: "Episode 21",
    }, {
        imageUrl: "uyLSt9UfOxA",
        videoUrl: "uyLSt9UfOxA",
        episodeno: "Episode 22",
    }, {
        imageUrl: "tM92E1YmsI0",
        videoUrl: "tM92E1YmsI0",
        episodeno: "Episode 23",
    }, {
        imageUrl: "mM7M_DVh8Z0",
        videoUrl: "mM7M_DVh8Z0",
        episodeno: "Episode 24",
    }, {
        imageUrl: "AL18u09wUZI",
        videoUrl: "AL18u09wUZI",
        episodeno: "Episode 25",
    }, {
        imageUrl: "mM7M_DVh8Z0",
        videoUrl: "mM7M_DVh8Z0",
        episodeno: "Episode 26",
    }, {
        imageUrl: "809LBgNmgDk",
        videoUrl: "809LBgNmgDk",
        episodeno: "Episode 27",
    }, {
        imageUrl: "mUqTxh4g3_g",
        videoUrl: "mUqTxh4g3_g",
        episodeno: "Episode 28",
    }, {
        imageUrl: "SZ8EjsGNxpM",
        videoUrl: "SZ8EjsGNxpM",
        episodeno: "Episode 29",
    }, {
        imageUrl: "GppqPhUxObc",
        videoUrl: "GppqPhUxObc",
        episodeno: "Episode 30",
    }, {
        imageUrl: "6HaoOD0f9vo",
        videoUrl: "6HaoOD0f9vo",
        episodeno: "Episode 31",
    }, {
        imageUrl: "OeUN0DMDDKA",
        videoUrl: "OeUN0DMDDKA",
        episodeno: "Episode 32",
    }, {
        imageUrl: "Qgc1-zs03J4",
        videoUrl: "Qgc1-zs03J4",
        episodeno: "Episode 33",
    }, {
        imageUrl: "QbKSL3dbpfw",
        videoUrl: "QbKSL3dbpfw",
        episodeno: "Episode 34",
    }, {
        imageUrl: "dhDAbtv81DE",
        videoUrl: "dhDAbtv81DE",
        episodeno: "Episode 35",
    }, {
        imageUrl: "1ubwYZ-kfGM",
        videoUrl: "1ubwYZ-kfGM",
        episodeno: "Episode 36",
    }, {
        imageUrl: "Uu4ZcHS87BI",
        videoUrl: "Uu4ZcHS87BI",
        episodeno: "Episode 37",
    }, {
        imageUrl: "1kxH_-hl1Cc",
        videoUrl: "1kxH_-hl1Cc",
        episodeno: "Episode 38",
    }, {
        imageUrl: "zwjQJeoxDOI",
        videoUrl: "zwjQJeoxDOI",
        episodeno: "Episode 39",
    }, {
        imageUrl: "0MDwbSFGsmQ",
        videoUrl: "0MDwbSFGsmQ",
        episodeno: "Episode 40",
    }, {
        imageUrl: "TdTwc6gHX-c",
        videoUrl: "TdTwc6gHX-c",
        episodeno: "Episode 41",
    }, {
        imageUrl: "_0Wf0M5DVjg",
        videoUrl: "_0Wf0M5DVjg",
        episodeno: "Episode 42",
    }, {
        imageUrl: "QDC3Zc_VUmg",
        videoUrl: "QDC3Zc_VUmg",
        episodeno: "Episode 43",
    }, {
        imageUrl: "_bXoAl5t1_E",
        videoUrl: "_bXoAl5t1_E",
        episodeno: "Episode 44",
    }, {
        imageUrl: "hHnCc429ic0",
        videoUrl: "hHnCc429ic0",
        episodeno: "Episode 45",
    }, {
        imageUrl: "IzMkQkHF7Zo",
        videoUrl: "IzMkQkHF7Zo",
        episodeno: "Episode 46",
    }, {
        imageUrl: "i8tUlIOaL0A",
        videoUrl: "i8tUlIOaL0A",
        episodeno: "Episode 47",
    }, {
        imageUrl: "2J2jCdchSTI",
        videoUrl: "2J2jCdchSTI",
        episodeno: "Episode 48",
    }, {
        imageUrl: "OacVRhckWpc",
        videoUrl: "OacVRhckWpc",
        episodeno: "Episode 49",
    }, {
        imageUrl: "D55jjilaqTc",
        videoUrl: "D55jjilaqTc",
        episodeno: "Episode 50",
    }, {
        imageUrl: "ZMRG8JjIsBY",
        videoUrl: "ZMRG8JjIsBY",
        episodeno: "Episode 51",
    }, {
        imageUrl: "DW9ElKEEamE",
        videoUrl: "DW9ElKEEamE",
        episodeno: "Episode 52",
    }, {
        imageUrl: "s14042sqIQM",
        videoUrl: "s14042sqIQM",
        episodeno: "Episode 53",
    }, {
        imageUrl: "QeOPszD1mak",
        videoUrl: "QeOPszD1mak",
        episodeno: "Episode 54",
    }, {
        imageUrl: "W7Gz0bqfaUc",
        videoUrl: "W7Gz0bqfaUc",
        episodeno: "Episode 55",
    }, {
        imageUrl: "PUGZ3_6D1pk",
        videoUrl: "PUGZ3_6D1pk",
        episodeno: "Episode 56",
    }, {
        imageUrl: "24fffiDkkVU",
        videoUrl: "24fffiDkkVU",
        episodeno: "Episode 57",
    }, {
        imageUrl: "1s-ZssxHuy4",
        videoUrl: "1s-ZssxHuy4",
        episodeno: "Episode 58",
    }, {
        imageUrl: "LjUbBWXyIvU",
        videoUrl: "LjUbBWXyIvU",
        episodeno: "Episode 59",
    }, {
        imageUrl: "k41uhc9qO3A",
        videoUrl: "k41uhc9qO3A",
        episodeno: "Episode 60",
    }, {
        imageUrl: "PDr3qVnXZ8s",
        videoUrl: "PDr3qVnXZ8s",
        episodeno: "Episode 61",
    }, {
        imageUrl: "Ymcoo0QW7hQ",
        videoUrl: "Ymcoo0QW7hQ",
        episodeno: "Episode 62",
    }, {
        imageUrl: "Yrgr1b3Ad6g",
        videoUrl: "Yrgr1b3Ad6g",
        episodeno: "Episode 63",
    }, {
        imageUrl: "sfTvseID06E",
        videoUrl: "sfTvseID06E",
        episodeno: "Episode 64",
    }, {
        imageUrl: "IcDQLVZp0rg",
        videoUrl: "IcDQLVZp0rg",
        episodeno: "Episode 65",
    }, {
        imageUrl: "_kK9V9CJmVI",
        videoUrl: "_kK9V9CJmVI",
        episodeno: "Episode 66",
    }, {
        imageUrl: "DmxsgZI3BJg",
        videoUrl: "DmxsgZI3BJg",
        episodeno: "Episode 67",
    }, {
        imageUrl: "SZtB0Qk_EKw",
        videoUrl: "SZtB0Qk_EKw",
        episodeno: "Episode 68",
    }, {
        imageUrl: "lAvQsdNCc_s",
        videoUrl: "lAvQsdNCc_s",
        episodeno: "Episode 69",
    }, {
        imageUrl: "Ra9lv36JG-U",
        videoUrl: "Ra9lv36JG-U",
        episodeno: "Episode 70",
    }, {
        imageUrl: "qPDXLDK0aBY",
        videoUrl: "qPDXLDK0aBY",
        episodeno: "Episode 71",
    }, {
        imageUrl: "1DP9_PYWlJE",
        videoUrl: "1DP9_PYWlJE",
        episodeno: "Episode 72",
    }, {
        imageUrl: "UO-i7elCWCI",
        videoUrl: "UO-i7elCWCI",
        episodeno: "Episode 73",
    }, {
        imageUrl: "FahtReKv-u8",
        videoUrl: "FahtReKv-u8",
        episodeno: "Episode 74",
    }, {
        imageUrl: "jb8Buwo3rco",
        videoUrl: "jb8Buwo3rco",
        episodeno: "Episode 75",
    }, {
        imageUrl: "FGueOhY6HJg",
        videoUrl: "FGueOhY6HJg",
        episodeno: "Episode 76",
    }, {
        imageUrl: "DEEmpminlBU",
        videoUrl: "DEEmpminlBU",
        episodeno: "Episode 77",
    }, {
        imageUrl: "s3ZwGWcw9xg",
        videoUrl: "s3ZwGWcw9xg",
        episodeno: "Episode 78",
    }, {
        imageUrl: "1y5O7ogDOJ0",
        videoUrl: "1y5O7ogDOJ0",
        episodeno: "Episode 79",
    }, {
        imageUrl: "GSIH0jXVSD8",
        videoUrl: "GSIH0jXVSD8",
        episodeno: "Episode 80",
    }, {
        imageUrl: "-zWklRlJ_e8",
        videoUrl: "-zWklRlJ_e8",
        episodeno: "Episode 81",
    }, {
        imageUrl: "kHQwdznO7tE",
        videoUrl: "kHQwdznO7tE",
        episodeno: "Episode 82",
    }, {
        imageUrl: "aQz0Gsd2oBo",
        videoUrl: "aQz0Gsd2oBo",
        episodeno: "Episode 83",
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
    // $scope.viewLess1 = function () {
    //     $scope.readmore1 = true;
    //     $scope.season1 = [{
    //         imageUrl: "OqT3D60MZVk",
    //         videoUrl: "OqT3D60MZVk",
    //         episodeno: "Episode 1",
    //     }, {
    //         imageUrl: "47VM_wfNUdQ",
    //         videoUrl: "47VM_wfNUdQ",
    //         episodeno: "Episode 2",
    //     }, {
    //         imageUrl: "x4nlGY36J-s",
    //         videoUrl: "x4nlGY36J-s",
    //         episodeno: "Episode 3",
    //     }, {
    //         imageUrl: "nrWcU0iPTrg",
    //         videoUrl: "nrWcU0iPTrg",
    //         episodeno: "Episode 4",
    //     }, {
    //         imageUrl: "yqX09Ai8bdw",
    //         videoUrl: "yqX09Ai8bdw",
    //         episodeno: "Episode 5",
    //     }, {
    //         imageUrl: "vf8Z_0dk3tQ",
    //         videoUrl: "vf8Z_0dk3tQ",
    //         episodeno: "Episode 6",
    //     }, {
    //         imageUrl: "YnauodrRqpw",
    //         videoUrl: "YnauodrRqpw",
    //         episodeno: "Episode 7",
    //     }, {
    //         imageUrl: "KurI8w6hteg",
    //         videoUrl: "KurI8w6hteg",
    //         episodeno: "Episode 8",
    //     }, {
    //         imageUrl: "d2b_Kv_d3Cs",
    //         videoUrl: "d2b_Kv_d3Cs",
    //         episodeno: "Episode 9",
    //     }, {
    //         imageUrl: "Umnq0EDKjcE",
    //         videoUrl: "Umnq0EDKjcE",
    //         episodeno: "Episode 10",
    //     }, {
    //         imageUrl: "g20d_8D-G3k",
    //         videoUrl: "g20d_8D-G3k",
    //         episodeno: "Episode 11",
    //     }, {
    //         imageUrl: "AkZwkJnwoBw",
    //         videoUrl: "AkZwkJnwoBw",
    //         episodeno: "Episode 12",
    //     }, {
    //         imageUrl: "b0trRrnppkQ",
    //         videoUrl: "b0trRrnppkQ",
    //         episodeno: "Episode 13",
    //     }, {
    //         imageUrl: "ss8EycBDSfc",
    //         videoUrl: "ss8EycBDSfc",
    //         episodeno: "Episode 14",
    //     }, {
    //         imageUrl: "cq0FB8O-SXk",
    //         videoUrl: "cq0FB8O-SXk",
    //         episodeno: "Episode 15",
    //     }, {
    //         imageUrl: "ZqKaGWON_ZE",
    //         videoUrl: "ZqKaGWON_ZE",
    //         episodeno: "Episode 16",
    //     }, {
    //         imageUrl: "HV5u_wwPj3Y",
    //         videoUrl: "HV5u_wwPj3Y",
    //         episodeno: "Episode 17",
    //     }, {
    //         imageUrl: "66NU5Ip_jMA",
    //         videoUrl: "66NU5Ip_jMA",
    //         episodeno: "Episode 18",
    //     },

    //     ];
    // }
    // $scope.viewLess1();
    // $scope.season1viewmore1 = [{
    //     imageUrl: "NxSM8956Hfo",
    //     videoUrl: "NxSM8956Hfo",
    //     episodeno: "Episode 19",
    // }, {
    //     imageUrl: "rHFbbltTOiY",
    //     videoUrl: "rHFbbltTOiY",
    //     episodeno: "Episode 20",
    // }, {
    //     imageUrl: "BT4u-shAQew",
    //     videoUrl: "BT4u-shAQew",
    //     episodeno: "Episode 21",
    // }, {
    //     imageUrl: "uyLSt9UfOxA",
    //     videoUrl: "uyLSt9UfOxA",
    //     episodeno: "Episode 22",
    // }, {
    //     imageUrl: "tM92E1YmsI0",
    //     videoUrl: "tM92E1YmsI0",
    //     episodeno: "Episode 23",
    // }, {
    //     imageUrl: "mM7M_DVh8Z0",
    //     videoUrl: "mM7M_DVh8Z0",
    //     episodeno: "Episode 24",
    // }, {
    //     imageUrl: "AL18u09wUZI",
    //     videoUrl: "AL18u09wUZI",
    //     episodeno: "Episode 25",
    // }, {
    //     imageUrl: "mM7M_DVh8Z0",
    //     videoUrl: "mM7M_DVh8Z0",
    //     episodeno: "Episode 26",
    // }, {
    //     imageUrl: "809LBgNmgDk",
    //     videoUrl: "809LBgNmgDk",
    //     episodeno: "Episode 27",
    // }, {
    //     imageUrl: "mUqTxh4g3_g",
    //     videoUrl: "mUqTxh4g3_g",
    //     episodeno: "Episode 28",
    // }, {
    //     imageUrl: "SZ8EjsGNxpM",
    //     videoUrl: "SZ8EjsGNxpM",
    //     episodeno: "Episode 29",
    // }, {
    //     imageUrl: "GppqPhUxObc",
    //     videoUrl: "GppqPhUxObc",
    //     episodeno: "Episode 30",
    // }, {
    //     imageUrl: "6HaoOD0f9vo",
    //     videoUrl: "6HaoOD0f9vo",
    //     episodeno: "Episode 31",
    // }, {
    //     imageUrl: "OeUN0DMDDKA",
    //     videoUrl: "OeUN0DMDDKA",
    //     episodeno: "Episode 32",
    // }, {
    //     imageUrl: "Qgc1-zs03J4",
    //     videoUrl: "Qgc1-zs03J4",
    //     episodeno: "Episode 33",
    // }, {
    //     imageUrl: "QbKSL3dbpfw",
    //     videoUrl: "QbKSL3dbpfw",
    //     episodeno: "Episode 34",
    // }, {
    //     imageUrl: "dhDAbtv81DE",
    //     videoUrl: "dhDAbtv81DE",
    //     episodeno: "Episode 35",
    // }, {
    //     imageUrl: "1ubwYZ-kfGM",
    //     videoUrl: "1ubwYZ-kfGM",
    //     episodeno: "Episode 36",
    // }, {
    //     imageUrl: "Uu4ZcHS87BI",
    //     videoUrl: "Uu4ZcHS87BI",
    //     episodeno: "Episode 37",
    // }, {
    //     imageUrl: "1kxH_-hl1Cc",
    //     videoUrl: "1kxH_-hl1Cc",
    //     episodeno: "Episode 38",
    // }, {
    //     imageUrl: "zwjQJeoxDOI",
    //     videoUrl: "zwjQJeoxDOI",
    //     episodeno: "Episode 39",
    // }, {
    //     imageUrl: "0MDwbSFGsmQ",
    //     videoUrl: "0MDwbSFGsmQ",
    //     episodeno: "Episode 40",
    // }, {
    //     imageUrl: "TdTwc6gHX-c",
    //     videoUrl: "TdTwc6gHX-c",
    //     episodeno: "Episode 41",
    // }, {
    //     imageUrl: "_0Wf0M5DVjg",
    //     videoUrl: "_0Wf0M5DVjg",
    //     episodeno: "Episode 42",
    // }, {
    //     imageUrl: "QDC3Zc_VUmg",
    //     videoUrl: "QDC3Zc_VUmg",
    //     episodeno: "Episode 43",
    // }, {
    //     imageUrl: "_bXoAl5t1_E",
    //     videoUrl: "_bXoAl5t1_E",
    //     episodeno: "Episode 44",
    // }, {
    //     imageUrl: "hHnCc429ic0",
    //     videoUrl: "hHnCc429ic0",
    //     episodeno: "Episode 45",
    // }, {
    //     imageUrl: "IzMkQkHF7Zo",
    //     videoUrl: "IzMkQkHF7Zo",
    //     episodeno: "Episode 46",
    // }, {
    //     imageUrl: "i8tUlIOaL0A",
    //     videoUrl: "i8tUlIOaL0A",
    //     episodeno: "Episode 47",
    // }, {
    //     imageUrl: "2J2jCdchSTI",
    //     videoUrl: "2J2jCdchSTI",
    //     episodeno: "Episode 48",
    // }, {
    //     imageUrl: "OacVRhckWpc",
    //     videoUrl: "OacVRhckWpc",
    //     episodeno: "Episode 49",
    // }, {
    //     imageUrl: "D55jjilaqTc",
    //     videoUrl: "D55jjilaqTc",
    //     episodeno: "Episode 50",
    // }, {
    //     imageUrl: "ZMRG8JjIsBY",
    //     videoUrl: "ZMRG8JjIsBY",
    //     episodeno: "Episode 51",
    // }, {
    //     imageUrl: "DW9ElKEEamE",
    //     videoUrl: "DW9ElKEEamE",
    //     episodeno: "Episode 52",
    // }, {
    //     imageUrl: "s14042sqIQM",
    //     videoUrl: "s14042sqIQM",
    //     episodeno: "Episode 53",
    // }, {
    //     imageUrl: "QeOPszD1mak",
    //     videoUrl: "QeOPszD1mak",
    //     episodeno: "Episode 54",
    // }, {
    //     imageUrl: "W7Gz0bqfaUc",
    //     videoUrl: "W7Gz0bqfaUc",
    //     episodeno: "Episode 55",
    // }, {
    //     imageUrl: "PUGZ3_6D1pk",
    //     videoUrl: "PUGZ3_6D1pk",
    //     episodeno: "Episode 56",
    // }, {
    //     imageUrl: "24fffiDkkVU",
    //     videoUrl: "24fffiDkkVU",
    //     episodeno: "Episode 57",
    // }, {
    //     imageUrl: "1s-ZssxHuy4",
    //     videoUrl: "1s-ZssxHuy4",
    //     episodeno: "Episode 58",
    // }, {
    //     imageUrl: "LjUbBWXyIvU",
    //     videoUrl: "LjUbBWXyIvU",
    //     episodeno: "Episode 59",
    // }, {
    //     imageUrl: "k41uhc9qO3A",
    //     videoUrl: "k41uhc9qO3A",
    //     episodeno: "Episode 60",
    // }, {
    //     imageUrl: "PDr3qVnXZ8s",
    //     videoUrl: "PDr3qVnXZ8s",
    //     episodeno: "Episode 61",
    // }, {
    //     imageUrl: "Ymcoo0QW7hQ",
    //     videoUrl: "Ymcoo0QW7hQ",
    //     episodeno: "Episode 62",
    // }, {
    //     imageUrl: "Yrgr1b3Ad6g",
    //     videoUrl: "Yrgr1b3Ad6g",
    //     episodeno: "Episode 63",
    // }, {
    //     imageUrl: "sfTvseID06E",
    //     videoUrl: "sfTvseID06E",
    //     episodeno: "Episode 64",
    // }, {
    //     imageUrl: "IcDQLVZp0rg",
    //     videoUrl: "IcDQLVZp0rg",
    //     episodeno: "Episode 65",
    // }, {
    //     imageUrl: "_kK9V9CJmVI",
    //     videoUrl: "_kK9V9CJmVI",
    //     episodeno: "Episode 66",
    // }, {
    //     imageUrl: "DmxsgZI3BJg",
    //     videoUrl: "DmxsgZI3BJg",
    //     episodeno: "Episode 67",
    // }, {
    //     imageUrl: "SZtB0Qk_EKw",
    //     videoUrl: "SZtB0Qk_EKw",
    //     episodeno: "Episode 68",
    // }, {
    //     imageUrl: "lAvQsdNCc_s",
    //     videoUrl: "lAvQsdNCc_s",
    //     episodeno: "Episode 69",
    // }, {
    //     imageUrl: "Ra9lv36JG-U",
    //     videoUrl: "Ra9lv36JG-U",
    //     episodeno: "Episode 70",
    // }, {
    //     imageUrl: "qPDXLDK0aBY",
    //     videoUrl: "qPDXLDK0aBY",
    //     episodeno: "Episode 71",
    // }, {
    //     imageUrl: "1DP9_PYWlJE",
    //     videoUrl: "1DP9_PYWlJE",
    //     episodeno: "Episode 72",
    // }, {
    //     imageUrl: "UO-i7elCWCI",
    //     videoUrl: "UO-i7elCWCI",
    //     episodeno: "Episode 73",
    // }, {
    //     imageUrl: "FahtReKv-u8",
    //     videoUrl: "FahtReKv-u8",
    //     episodeno: "Episode 74",
    // }, {
    //     imageUrl: "jb8Buwo3rco",
    //     videoUrl: "jb8Buwo3rco",
    //     episodeno: "Episode 75",
    // }, {
    //     imageUrl: "FGueOhY6HJg",
    //     videoUrl: "FGueOhY6HJg",
    //     episodeno: "Episode 76",
    // }, {
    //     imageUrl: "DEEmpminlBU",
    //     videoUrl: "DEEmpminlBU",
    //     episodeno: "Episode 77",
    // }, {
    //     imageUrl: "s3ZwGWcw9xg",
    //     videoUrl: "s3ZwGWcw9xg",
    //     episodeno: "Episode 78",
    // }, {
    //     imageUrl: "1y5O7ogDOJ0",
    //     videoUrl: "1y5O7ogDOJ0",
    //     episodeno: "Episode 79",
    // }, {
    //     imageUrl: "GSIH0jXVSD8",
    //     videoUrl: "GSIH0jXVSD8",
    //     episodeno: "Episode 80",
    // }, {
    //     imageUrl: "-zWklRlJ_e8",
    //     videoUrl: "-zWklRlJ_e8",
    //     episodeno: "Episode 81",
    // }, {
    //     imageUrl: "kHQwdznO7tE",
    //     videoUrl: "kHQwdznO7tE",
    //     episodeno: "Episode 82",
    // }, {
    //     imageUrl: "aQz0Gsd2oBo",
    //     videoUrl: "aQz0Gsd2oBo",
    //     episodeno: "Episode 83",
    // },]
    // $scope.viewMore1 = function () {
    //     $scope.readmore1 = false;
    //     //  $scope.season1 = [];
    //     //  $scope.season1 = _.cloneDeep($scope.season1viewmore1);
    //     _.each($scope.season1viewmore1, function (n) {
    //         $scope.season1.push(n);
    //     })
    // }

})