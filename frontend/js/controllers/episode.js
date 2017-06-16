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
     $scope.viewLess3 = function () {
         $scope.readmore3 = true;
         $scope.season3 = [{
                 imageUrl: "x4nlGY36J-s",
                 videoUrl: "x4nlGY36J-s",
                 episodeno: "Episode 1",
             }, {
                 imageUrl: "OqT3D60MZVk",
                 videoUrl: "OqT3D60MZVk",
                 episodeno: "Episode 2",
             }, {
                 imageUrl: "47VM_wfNUdQ",
                 videoUrl: "47VM_wfNUdQ",
                 episodeno: "Episode 3",
             }, {
                 imageUrl: "x4nlGY36J-s",
                 videoUrl: "x4nlGY36J-s",
                 episodeno: "Episode 4",
             }, {
                 imageUrl: "x4nlGY36J-s",
                 videoUrl: "x4nlGY36J-s",
                 episodeno: "Episode 5",
             }, {
                 imageUrl: "x4nlGY36J-s",
                 videoUrl: "x4nlGY36J-s",
                 episodeno: "Episode 6",
             }, {
                 imageUrl: "x4nlGY36J-s",
                 videoUrl: "x4nlGY36J-s",
                 episodeno: "Episode 7",
             }, {
                 imageUrl: "x4nlGY36J-s",
                 videoUrl: "x4nlGY36J-s",
                 episodeno: "Episode 8",
             },

         ];
     }
     $scope.viewLess3();
     $scope.season3viewmore3 = [{
         imageUrl: "x4nlGY36J-s",
         videoUrl: "x4nlGY36J-s",
         episodeno: "Episode 5",
     }, {
         imageUrl: "x4nlGY36J-s",
         videoUrl: "x4nlGY36J-s",
         episodeno: "Episode 5",
     }, {
         imageUrl: "x4nlGY36J-s",
         videoUrl: "x4nlGY36J-s",
         episodeno: "Episode 5",
     }, {
         imageUrl: "x4nlGY36J-s",
         videoUrl: "x4nlGY36J-s",
         episodeno: "Episode 5",
     }, {
         imageUrl: "x4nlGY36J-s",
         videoUrl: "x4nlGY36J-s",
         episodeno: "Episode 5",
     }, {
         imageUrl: "x4nlGY36J-s",
         videoUrl: "x4nlGY36J-s",
         episodeno: "Episode 5",
     }, {
         imageUrl: "x4nlGY36J-s",
         videoUrl: "x4nlGY36J-s",
         episodeno: "Episode 5",
     }, {
         imageUrl: "x4nlGY36J-s",
         videoUrl: "x4nlGY36J-s",
         episodeno: "Episode 5",
     }, {
         imageUrl: "x4nlGY36J-s",
         videoUrl: "x4nlGY36J-s",
         episodeno: "Episode 5",
     }, {
         imageUrl: "x4nlGY36J-s",
         videoUrl: "x4nlGY36J-s",
         episodeno: "Episode 5",
     }, ]
     $scope.viewMore3 = function () {
         $scope.readmore3 = false;
         //$scope.season3 = [];
         //  $scope.season3 = _.cloneDeep($scope.season3viewmore3);
         _.each($scope.season3viewmore3, function (n) {
             $scope.season3.push(n);
         })

     }


     $scope.viewLess2 = function () {
         $scope.readmore2 = true;
         $scope.season2 = [{
                 imageUrl: "x4nlGY36J-s",
                 videoUrl: "x4nlGY36J-s",
                 episodeno: "Episode 5",
             }, {
                 imageUrl: "x4nlGY36J-s",
                 videoUrl: "x4nlGY36J-s",
                 episodeno: "Episode 5",
             }, {
                 imageUrl: "x4nlGY36J-s",
                 videoUrl: "x4nlGY36J-s",
                 episodeno: "Episode 5",
             }, {
                 imageUrl: "x4nlGY36J-s",
                 videoUrl: "x4nlGY36J-s",
                 episodeno: "Episode 5",
             }, {
                 imageUrl: "x4nlGY36J-s",
                 videoUrl: "x4nlGY36J-s",
                 episodeno: "Episode 5",
             }, {
                 imageUrl: "x4nlGY36J-s",
                 videoUrl: "x4nlGY36J-s",
                 episodeno: "Episode 5",
             }, {
                 imageUrl: "x4nlGY36J-s",
                 videoUrl: "x4nlGY36J-s",
                 episodeno: "Episode 5",
             }, {
                 imageUrl: "x4nlGY36J-s",
                 videoUrl: "x4nlGY36J-s",
                 episodeno: "Episode 5",
             }, {
                 imageUrl: "x4nlGY36J-s",
                 videoUrl: "x4nlGY36J-s",
                 episodeno: "Episode 5",
             }, {
                 imageUrl: "x4nlGY36J-s",
                 videoUrl: "x4nlGY36J-s",
                 episodeno: "Episode 5",
             }, {
                 imageUrl: "x4nlGY36J-s",
                 videoUrl: "x4nlGY36J-s",
                 episodeno: "Episode 5",
             },

         ];
     }
     $scope.viewLess2();
     $scope.season2viewmore2 = [{
         imageUrl: "x4nlGY36J-s",
         videoUrl: "x4nlGY36J-s",
         episodeno: "Episode 5",
     }, {
         imageUrl: "x4nlGY36J-s",
         videoUrl: "x4nlGY36J-s",
         episodeno: "Episode 5",
     }, {
         imageUrl: "x4nlGY36J-s",
         videoUrl: "x4nlGY36J-s",
         episodeno: "Episode 5",
     }, {
         imageUrl: "x4nlGY36J-s",
         videoUrl: "x4nlGY36J-s",
         episodeno: "Episode 5",
     }, {
         imageUrl: "x4nlGY36J-s",
         videoUrl: "x4nlGY36J-s",
         episodeno: "Episode 5",
     }, {
         imageUrl: "x4nlGY36J-s",
         videoUrl: "x4nlGY36J-s",
         episodeno: "Episode 5",
     }, {
         imageUrl: "x4nlGY36J-s",
         videoUrl: "x4nlGY36J-s",
         episodeno: "Episode 5",
     }, {
         imageUrl: "x4nlGY36J-s",
         videoUrl: "x4nlGY36J-s",
         episodeno: "Episode 5",
     }, {
         imageUrl: "x4nlGY36J-s",
         videoUrl: "x4nlGY36J-s",
         episodeno: "Episode 5",
     }, {
         imageUrl: "x4nlGY36J-s",
         videoUrl: "x4nlGY36J-s",
         episodeno: "Episode 5",
     }, ]
     $scope.viewMore2 = function () {
         $scope.readmore2 = false;
         //  $scope.season2 = [];
         //  $scope.season2 = _.cloneDeep($scope.season2viewmore2);
         _.each($scope.season2viewmore2, function (n) {
             $scope.season2.push(n);
         })

     }


     $scope.viewLess1 = function () {
         $scope.readmore1 = true;
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

         ];
     }
     $scope.viewLess1();
     $scope.season1viewmore1 = [{
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
         imageUrl: "6HaoOD0f9",
         videoUrl: "6HaoOD0f9",
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
     }, ]
     $scope.viewMore1 = function () {
         $scope.readmore1 = false;
         //  $scope.season1 = [];
         //  $scope.season1 = _.cloneDeep($scope.season1viewmore1);
         _.each($scope.season1viewmore1, function (n) {
             $scope.season1.push(n);
         })
     }

 })