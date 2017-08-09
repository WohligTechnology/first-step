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

 //for season3
    $scope.season3 = [
        {
            img1: 'img/season3/1.jpg',
            img2: 'img/small-season3/1.jpg',
        },
        {
            img1: 'img/season3/5.jpg',
            img2: 'img/small-season3/5.jpg',
        },
     
        {
            img1: 'img/season3/7.jpg',
            img2: 'img/small-season3/7.jpg',
        },
        {
            img1: 'img/season3/8.jpg',
            img2: 'img/small-season3/8.jpg',
        },

        {
            img1: 'img/season3/12.jpg',
            img2: 'img/small-season3/12.jpg',
        },
        {
            img1: 'img/season3/15.jpg',
            img2: 'img/small-season3/15.jpg',
        },
        {
            img1: 'img/season3/17.jpg',
            img2: 'img/small-season3/17.jpg',
        },
        {
            img1: 'img/season3/18.jpg',
            img2: 'img/small-season3/18.jpg',
        },
        {
            img1: 'img/season3/19.jpg',
            img2: 'img/small-season3/19.jpg',
        },
        {
            img1: 'img/season3/20.jpg',
            img2: 'img/small-season3/20.jpg',
        },
        {
            img1: 'img/season3/21.jpg',
            img2: 'img/small-season3/21.jpg',
        },
        {
            img1: 'img/season3/24.jpg',
            img2: 'img/small-season3/24.jpg',
        },
        {
            img1: 'img/season3/25.jpg',
            img2: 'img/small-season3/25.jpg',
        },
        {
            img1: 'img/season3/26.jpg',
            img2: 'img/small-season3/26.jpg',
        },
        {
            img1: 'img/season3/27.jpg',
            img2: 'img/small-season3/27.jpg',
        },
        {
            img1: 'img/season3/28.jpg',
            img2: 'img/small-season3/28.jpg',
        },
        {
            img1: 'img/season3/29.jpg',
            img2: 'img/small-season3/29.jpg',
        },
        {
            img1: 'img/season3/30.jpg',
            img2: 'img/small-season3/30.jpg',
        },
        {
            img1: 'img/season3/31.jpg',
            img2: 'img/small-season3/31.jpg',
        },
        {
            img1: 'img/season3/32.jpg',
            img2: 'img/small-season3/32.jpg',
        }
        ,
        {
            img1: 'img/season3/33.jpg',
            img2: 'img/small-season3/33.jpg',
        },
        {
            img1: 'img/season3/34.jpg',
            img2: 'img/small-season3/34.jpg',
        },
        {
            img1: 'img/season3/35.jpg',
            img2: 'img/small-season3/35.jpg',
        },
        {
            img1: 'img/season3/36.jpg',
            img2: 'img/small-season3/36.jpg',
        },
        {
            img1: 'img/season3/37.jpg',
            img2: 'img/small-season3/37.jpg',
        },
        {
            img1: 'img/season3/38.jpg',
            img2: 'img/small-season3/38.jpg',
        },
        {
            img1: 'img/season3/39.jpg',
            img2: 'img/small-season3/39.jpg',
        },
        {
            img1: 'img/season3/40.jpg',
            img2: 'img/small-season3/40.jpg',
        },
        {
            img1: 'img/season3/41.jpg',
            img2: 'img/small-season3/41.jpg',
        },
        {
            img1: 'img/season3/42.jpg',
            img2: 'img/small-season3/42.jpg',
        },
        {
            img1: 'img/season3/43.jpg',
            img2: 'img/small-season3/43.jpg',
        },
        {
            img1: 'img/season3/44.jpg',
            img2: 'img/small-season3/44.jpg',
        },
        {
            img1: 'img/season3/45.jpg',
            img2: 'img/small-season3/45.jpg',
        },
        {
            img1: 'img/season3/46.jpg',
            img2: 'img/small-season3/46.jpg',
        },
        {
            img1: 'img/season3/47.jpg',
            img2: 'img/small-season3/47.jpg',
        },
        {
            img1: 'img/season3/48.jpg',
            img2: 'img/small-season3/48.jpg',
        },
        {
            img1: 'img/season3/49.jpg',
            img2: 'img/small-season3/49.jpg',
        },
        {
            img1: 'img/season3/50.jpg',
            img2: 'img/small-season3/50.jpg',
        },
        {
            img1: 'img/season3/51.jpg',
            img2: 'img/small-season3/51.jpg',
        },
        {
            img1: 'img/season3/52.jpg',
            img2: 'img/small-season3/52.jpg',
        },
        {
            img1: 'img/season3/53.jpg',
            img2: 'img/small-season3/53.jpg',
        },
        {
            img1: 'img/season3/54.jpg',
            img2: 'img/small-season3/54.jpg',
        },
  
     
        {
            img1: 'img/season3/57.jpg',
            img2: 'img/small-season3/57.jpg',
        },
        {
            img1: 'img/season3/58.jpg',
            img2: 'img/small-season3/58.jpg',
        },
        {
            img1: 'img/season3/59.jpg',
            img2: 'img/small-season3/59.jpg',
        },

        {
            img1: 'img/season3/61.jpg',
            img2: 'img/small-season3/61.jpg',
        },
        {
            img1: 'img/season3/62.jpg',
            img2: 'img/small-season3/62.jpg',
        },
        {
            img1: 'img/season3/63.jpg',
            img2: 'img/small-season3/63.jpg',
        },
        {
            img1: 'img/season3/64.jpg',
            img2: 'img/small-season3/64.jpg',
        },
        {
            img1: 'img/season3/65.jpg',
            img2: 'img/small-season3/65.jpg',
        },
        {
            img1: 'img/season3/66.jpg',
            img2: 'img/small-season3/66.jpg',
        }
        ,
        {
            img1: 'img/season3/67.jpg',
            img2: 'img/small-season3/67.jpg',
        },
        {
            img1: 'img/season3/68.jpg',
            img2: 'img/small-season3/68.jpg',
        },
        {
            img1: 'img/season3/69.jpg',
            img2: 'img/small-season3/69.jpg',
        },
        {
            img1: 'img/season3/70.jpg',
            img2: 'img/small-season3/70.jpg',
        },
        {
            img1: 'img/season3/71.jpg',
            img2: 'img/small-season3/71.jpg',
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