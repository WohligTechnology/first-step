myApp.factory('apiService', function ($http, $q, $timeout) {
    return {

        // This is a demo Service for POST Method.
        getDemo: function (formData, callback) {
            $http({
                url: adminurl + 'demo/demoService',
                method: 'POST',
                data: formData
            }).success(callback);
        },
        // This is a demo Service for POST Method.
        sendEnquiry: function (formData, callback) {
            console.log("******send enquiry *******", formData)
            $http.post(adminurl + 'Expert/save', formData).then(function (data) {
                data = data.data;
                callback(data);

            });
        },
        sendLogin: function (formData, callback) {
            console.log("******Testing insid send login *******", formData)
            $http.post(adminurl + 'Userweb/save', formData).then(function (data) {
                data = data.data;
                callback(data);

            });
        },
    };
});