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
                $http({
                    url: adminurl + 'Expert/save',
                    method: 'POST',
                    data: formData,
                    withCredentials: true
                }).then(function (data) {
                    // $http({
                    //     url: adminurl + 'Expert/sendEnquiry',
                    //     method: 'POST',
                    //     data: formData,
                    //     withCredentials: true
                    // }).then(callback);
                });
            },

            sendLogin: function (formData, callback) {
                $http({
                    url: adminurl + 'Userweb/save',
                    method: 'POST',
                    data: formData,
                    withCredentials: true
                }).then(function (data) {
                    // $http({
                    //     url: adminurl + 'Expert/sendEnquiry',
                    //     method: 'POST',
                    //     data: formData,
                    //     withCredentials: true
                    // }).then(callback);
                });
            }
    };
});