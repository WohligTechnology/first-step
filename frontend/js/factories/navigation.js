myApp.factory('NavigationService', function () {
    var navigation = [
        // {
        //     name: "Home",
        //     classis: "active",
        //     anchor: "home",
        // }, 
         {
            name: "Episodes",
            classis: "active",
            anchor: "home-episodes",
        },
        {
            name: "Ask The Expert",
            classis: "active",
            clickName1: "true",
        }
        , {
            name: "About",
            classis: "active",
            clickName: "true",
        },
        {
            name: "Gallery",
            classis: "active",
            anchor: "home-gallery",
        },
        {
            name: "Contact",
            classis: "active",
            anchor: "Contact",
            subnavlist: "true"
        }
    ];

    return {
        getNavigation: function () {
            return navigation;
        },
       
    };
});