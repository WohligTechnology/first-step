myApp.factory('apiService', function ($http, $q, $timeout) {
    return {
        apiWithData: function (url, data, callback) {
            console.log("******xxxxxxxxxxxx *******", data);
            $http.post(adminurl + url, data).then(function (data) {
                data = data.data;
                console.log("xxxxxxxxxxx", data);
                callback(data);

            });
        },
        apiWithoutData: function (formData, callback) {
            // console.log("******question *******", formData);
            $http.post(adminurl + formData).then(function (data) {
                data = data.data;
                // console.log("question", data);
                callback(data);

            });
        },
    }
});