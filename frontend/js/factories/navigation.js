myApp.factory('NavigationService', function () {
    var navigation = [
        // {
        //     name: "Home",
        //     classis: "active",
        //     anchor: "home",
        // }, 
        {
            name: "Gallery",
            classis: "active",
            anchor: "home-gallery",
        },
        {
            name: "Episodes",
            classis: "active",
            anchor: "home-episodes",
        }
        ,
        {
            name: "Ask The Expert",
            classis: "active",
            anchor: "openExpertMain",
        },
        {
            name: "About",
            classis: "active",
            clickName: "openAbout",
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
        }
    };
});