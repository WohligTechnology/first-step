myApp.controller('GalleryCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $location) {
    $scope.template = TemplateService.getHTML("content/gallery.html");
    TemplateService.title = "Gallery"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.formSubmitted = false;
    $scope.submitForm = function (data) {
        console.log(data);
        $scope.formSubmitted = true;
        $.fancybox.close(true);
    };

    // $scope.changeURL = function (id) {
    //     console.log(id);
    //     $location.path("" + id);
    // };

    //  $scope.viewLess3 = function () {
    //      $scope.readmore3 = true;
    //      $scope.season3 = [
    //          'img/gallery/1.jpg',
    //          'img/gallery/1.jpg',
    //          'img/gallery/1.jpg',
    //          'img/gallery/1.jpg',
    //          'img/gallery/1.jpg',
    //          'img/gallery/1.jpg',
    //          'img/gallery/1.jpg',
    //          'img/gallery/1.jpg',
    //          'img/gallery/1.jpg',
    //          'img/gallery/1.jpg',
    //          'img/gallery/1.jpg',
    //          'img/gallery/1.jpg',
    //          'img/gallery/1.jpg',
    //          'img/gallery/1.jpg',
    //          'img/gallery/1.jpg',
    //          'img/gallery/1.jpg',
    //          'img/gallery/1.jpg',
    //          'img/gallery/1.jpg',


    //      ];
    //  }
    //  $scope.viewLess3();
    //  $scope.season3viewmore3 = [
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //      'img/gallery/1.jpg',
    //  ]
    //  $scope.viewMore3 = function () {
    //      $scope.readmore3 = false;
    //      $scope.season3 = [];
    //      $scope.season3 = _.cloneDeep($scope.season3viewmore3);

    //  }

    //for season2
    $scope.season2 = [
        {
            img1: 'img/season2/1.jpg',
            img2: 'img/small-season2/1.jpg',
        },
        {
            img1: 'img/season2/2.jpg',
            img2: 'img/small-season2/2.jpg',
        },
        {
            img1: 'img/season2/3.jpg',
            img2: 'img/small-season2/3.jpg',
        },
        {
            img1: 'img/season2/4.jpg',
            img2: 'img/small-season2/4.jpg',
        },
        {
            img1: 'img/season2/5.jpg',
            img2: 'img/small-season2/5.jpg',
        },
        {
            img1: 'img/season2/6.jpg',
            img2: 'img/small-season2/6.jpg',
        },
        {
            img1: 'img/season2/7.jpg',
            img2: 'img/small-season2/7.jpg',
        },
        {
            img1: 'img/season2/8.jpg',
            img2: 'img/small-season2/8.jpg',
        },
        {
            img1: 'img/season2/9.jpg',
            img2: 'img/small-season2/9.jpg',
        },
        {
            img1: 'img/season2/10.jpg',
            img2: 'img/small-season2/10.jpg',
        },
        {
            img1: 'img/season2/11.jpg',
            img2: 'img/small-season2/11.jpg',
        },
        {
            img1: 'img/season2/12.jpg',
            img2: 'img/small-season2/12.jpg',
        },
        {
            img1: 'img/season2/13.jpg',
            img2: 'img/small-season2/13.jpg',
        },
        {
            img1: 'img/season2/14.jpg',
            img2: 'img/small-season2/14.jpg',
        },
        {
            img1: 'img/season2/15.jpg',
            img2: 'img/small-season2/15.jpg',
        },
        {
            img1: 'img/season2/16.jpg',
            img2: 'img/small-season2/16.jpg',
        },
        {
            img1: 'img/season2/17.jpg',
            img2: 'img/small-season2/17.jpg',
        },
        {
            img1: 'img/season2/18.jpg',
            img2: 'img/small-season2/18.jpg',
        },
        {
            img1: 'img/season2/19.jpg',
            img2: 'img/small-season2/19.jpg',
        },
        {
            img1: 'img/season2/20.jpg',
            img2: 'img/small-season2/20.jpg',
        },
        {
            img1: 'img/season2/21.jpg',
            img2: 'img/small-season2/21.jpg',
        },
        {
            img1: 'img/season2/22.jpg',
            img2: 'img/small-season2/22.jpg',
        },
        {
            img1: 'img/season2/23.jpg',
            img2: 'img/small-season2/23.jpg',
        },
        {
            img1: 'img/season2/24.jpg',
            img2: 'img/small-season2/24.jpg',
        },
        {
            img1: 'img/season2/25.jpg',
            img2: 'img/small-season2/25.jpg',
        },
        {
            img1: 'img/season2/26.jpg',
            img2: 'img/small-season2/26.jpg',
        },
        {
            img1: 'img/season2/27.jpg',
            img2: 'img/small-season2/27.jpg',
        },
        {
            img1: 'img/season2/28.jpg',
            img2: 'img/small-season2/28.jpg',
        },
        {
            img1: 'img/season2/29.jpg',
            img2: 'img/small-season2/29.jpg',
        },
        {
            img1: 'img/season2/30.jpg',
            img2: 'img/small-season2/30.jpg',
        },
        {
            img1: 'img/season2/31.jpg',
            img2: 'img/small-season2/31.jpg',
        },
        {
            img1: 'img/season2/32.jpg',
            img2: 'img/small-season2/32.jpg',
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
    $scope.season1 = [
        {
            img1: 'img/season1/1.jpg',
            img2: 'img/small-season1/1.jpg',
        },
        {
            img1: 'img/season1/2.jpg',
            img2: 'img/small-season1/2.jpg',
        },
        {
            img1: 'img/season1/3.jpg',
            img2: 'img/small-season1/3.jpg',
        },
        {
            img1: 'img/season1/4.jpg',
            img2: 'img/small-season1/4.jpg',
        },
        {
            img1: 'img/season1/5.jpg',
            img2: 'img/small-season1/5.jpg',
        },
        {
            img1: 'img/season1/6.jpg',
            img2: 'img/small-season1/6.jpg',
        },
        {
            img1: 'img/season1/7.jpg',
            img2: 'img/small-season1/7.jpg',
        },
        {
            img1: 'img/season1/8.jpg',
            img2: 'img/small-season1/8.jpg',
        },
        {
            img1: 'img/season1/9.jpg',
            img2: 'img/small-season1/9.jpg',
        },
        {
            img1: 'img/season1/10.jpg',
            img2: 'img/small-season1/10.jpg',
        },
        {
            img1: 'img/season1/11.jpg',
            img2: 'img/small-season1/11.jpg',
        },
        {
            img1: 'img/season1/12.jpg',
            img2: 'img/small-season1/12.jpg',
        },
        {
            img1: 'img/season1/13.jpg',
            img2: 'img/small-season1/13.jpg',
        },
        {
            img1: 'img/season1/14.jpg',
            img2: 'img/small-season1/14.jpg',
        },
        {
            img1: 'img/season1/15.jpg',
            img2: 'img/small-season1/15.jpg',
        },
        {
            img1: 'img/season1/16.jpg',
            img2: 'img/small-season1/16.jpg',
        },
        {
            img1: 'img/season1/17.jpg',
            img2: 'img/small-season1/17.jpg',
        },
        {
            img1: 'img/season1/18.jpg',
            img2: 'img/small-season1/18.jpg',
        },
        {
            img1: 'img/season1/19.jpg',
            img2: 'img/small-season1/19.jpg',
        },
        {
            img1: 'img/season1/20.jpg',
            img2: 'img/small-season1/20.jpg',
        },
        {
            img1: 'img/season1/21.jpg',
            img2: 'img/small-season1/21.jpg',
        },
        {
            img1: 'img/season1/22.jpg',
            img2: 'img/small-season1/22.jpg',
        },
        {
            img1: 'img/season1/23.jpg',
            img2: 'img/small-season1/23.jpg',
        },
        {
            img1: 'img/season1/24.jpg',
            img2: 'img/small-season1/24.jpg',
        },
        {
            img1: 'img/season1/25.jpg',
            img2: 'img/small-season1/25.jpg',
        },
        {
            img1: 'img/season1/26.jpg',
            img2: 'img/small-season1/26.jpg',
        },
        {
            img1: 'img/season1/27.jpg',
            img2: 'img/small-season1/27.jpg',
        },
        {
            img1: 'img/season1/28.jpg',
            img2: 'img/small-season1/28.jpg',
        },
        {
            img1: 'img/season1/29.jpg',
            img2: 'img/small-season1/29.jpg',
        },
        {
            img1: 'img/season1/30.jpg',
            img2: 'img/small-season1/30.jpg',
        },
        {
            img1: 'img/season1/31.jpg',
            img2: 'img/small-season1/31.jpg',
        },
        {
            img1: 'img/season1/32.jpg',
            img2: 'img/small-season1/32.jpg',
        },
        {
            img1: 'img/season1/33.jpg',
            img2: 'img/small-season1/33.jpg',
        },
        {
            img1: 'img/season1/34.jpg',
            img2: 'img/small-season1/34.jpg',
        },
        {
            img1: 'img/season1/35.jpg',
            img2: 'img/small-season1/35.jpg',
        },
        {
            img1: 'img/season1/36.jpg',
            img2: 'img/small-season1/36.jpg',
        },
        {
            img1: 'img/season1/37.jpg',
            img2: 'img/small-season1/37.jpg',
        },
        {
            img1: 'img/season1/38.jpg',
            img2: 'img/small-season1/38.jpg',
        },
        {
            img1: 'img/season1/39.jpg',
            img2: 'img/small-season1/39.jpg',
        },
        {
            img1: 'img/season1/40.jpg',
            img2: 'img/small-season1/40.jpg',
        },
        {
            img1: 'img/season1/41.jpg',
            img2: 'img/small-season1/41.jpg',
        },
        {
            img1: 'img/season1/42.jpg',
            img2: 'img/small-season1/42.jpg',
        },
        {
            img1: 'img/season1/43.jpg',
            img2: 'img/small-season1/43.jpg',
        },
        {
            img1: 'img/season1/44.jpg',
            img2: 'img/small-season1/44.jpg',
        }
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