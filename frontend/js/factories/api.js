myApp.factory("apiService", function($http, $q, $timeout) {
  return {
    apiWithData: function(url, formData, callback) {
      $http.post(adminurl + url, formData).then(function(data) {
        data = data.data;
        callback(data);
      });
    },
    apiWithoutData: function(formData, callback) {
      // console.log("******question *******", formData);
      $http.post(adminurl + formData).then(function(data) {
        data = data.data;
        // console.log("question", data);
        callback(data);
      });
    }
  };
});
