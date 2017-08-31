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
        saveUser: function (formData, callback) {
            console.log("******saveUser *******", formData);
            $http.post(adminurl + 'Contest/saveContest', formData).then(function (data) {
                data = data.data;
                console.log("after api saveuser", data);
                callback(data);

            });
        },
        saveSelectedAnswer: function (url, formData, callback) {
            console.log("******saveSelectedAnswer *******", formData);
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                console.log("saveSelectedAnswer", data);
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
        apiWithData: function (url, data, callback) {
            console.log("******xxxxxxxxxxxx *******", data);
            $http.post(adminurl + url, data).then(function (data) {
                data = data.data;
                console.log("xxxxxxxxxxx", data);
                callback(data);

            });
        },
        saveAnswer: function (formData, callback) {
            console.log("******saveAnswer *******", formData);
            $http.post(adminurl + 'saveSelectedAnswer/save', formData).then(function (data) {
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