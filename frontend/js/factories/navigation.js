myApp.factory("NavigationService", function($http) {
  var navigation = [
    //     {
    //     name: "Home",
    //     classis: "active",
    //     anchor: "home",
    //     subnav: [{
    //         name: "Subnav1",
    //         classis: "active",
    //         anchor: "home"
    //     }]
    // }, {
    //     name: "Links",
    //     classis: "active",
    //     anchor: "links",
    //     subnav: []
    // }
  ];

  return {
    getNavigation: function() {
      return navigation;
    },

    apiCallWithData: function(url, formData, callback) {
      $http.post(adminurl + url, formData).then(function(data) {
        data = data.data;
        callback(data);
      });
    },

    apiCallWithoutData: function(url, callback) {
      $http.post(adminurl + url).then(function(data) {
        data = data.data;
        callback(data);
      });
    },
    getBlogs: function(callback) {
      $http.post(adminurl + "Blog/getBlogs").then(function(data) {
        data = data.data;
        callback(data);
      });
    },
    getselectedBlog: function(data, callback) {
      $http.post(adminurl + "Blog/search", data).then(function(data) {
        data = data.data;
        callback(data.data.results[0]);
      });
    },
    getSeo: function(data, callback) {
      $http
        .post(adminurl + "SeoBackend/getOneSEO", {
          name: data
        })
        .then(function(data) {
          callback(data);
        });
    },
    getHomeScreenBlogs: function(callback) {
      $http.post(adminurl + "Blog/getHomeScreenBlogs").then(function(data) {
        data = data.data;
        callback(data);
      });
    }
  };
});
