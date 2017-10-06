var imgurl = adminurl + "upload/";

var imgpath = imgurl + "readFile";
var uploadurl = imgurl;



myApp.factory('NavigationService', function ($http) {
    var navigation = [{
            name: "Admin Users",
            classis: "active",
            sref: "#!/page/viewUserweb//",
            icon: "phone"
        }, {
            name: "Ask The Experts",
            classis: "active",
            sref: "#!/page/viewExpert//",
            icon: "phone",

        },
        {
            name: "Contest Questions",
            classis: "active",
            sref: "#!/page/viewContestQuestion//",
            icon: "phone",
        },
        {
            name: "Guru Of The Month",
            classis: "active",
            sref: "#!/page/viewContest//",
            icon: "phone",
        }, {
            name: "Digital Course",
            classis: "active",
            sref: "",
            icon: "phone",
            subnav: [{
                    name: "List",
                    classis: "active",
                    sref: "#!/page/viewDigitalCourse//",
                    icon: "phone",
                }, {
                    name: "Questions",
                    classis: "active",
                    sref: "#!/page/viewQuestion//",
                    icon: "phone",

                },
                {
                    name: "Participants",
                    classis: "active",
                    sref: "#!/page/viewDigitalUser//",
                    icon: "phone",
                }, {
                    name: "Right Results",
                    classis: "active",
                    sref: "#!/page/viewTestResult//",
                    icon: "phone",
                }
            ]

        }

    ];

    return {
        getnav: function () {
            return navigation;
        },

        parseAccessToken: function (data, callback) {
            if (data) {
                $.jStorage.set("accessToken", data);
                callback();
            }
        },
        removeAccessToken: function (data, callback) {
            $.jStorage.flush();
        },
        profile: function (callback, errorCallback) {
            var data = {
                accessToken: $.jStorage.get("accessToken")
            };
            $http.post(adminurl + 'user/profile', data).then(function (data) {
                data = data.data;
                if (data.value === true) {
                    $.jStorage.set("profile", data.data);
                    callback();
                } else {
                    errorCallback(data.error);
                }
            });
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

        search: function (url, formData, i, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },
        delete: function (url, formData, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },
        countrySave: function (formData, callback) {
            $http.post(adminurl + 'country/save', formData).then(function (data) {
                data = data.data;
                callback(data);

            });
        },

        apiCallWithoutData: function (callback) {
            $http.post(adminurl + 'Contest/getAllQuestion').then(function (data) {
                data = data.data;
                console.log("data insde navigation.js", data);
                callback(data);

            });
        },

        getUserApi: function (formData, callback) {
            console.log("inside navigation getAllUser", formData);
            $http.post(adminurl + 'Contest/getAllUser', formData).then(function (data) {
                data = data.data;
                console.log("data insde navigation.js", data);
                callback(data);

            });
        },
        getAllUserByMonth: function (formData, callback) {
            console.log("inside navigation getAllUserByMonth", formData);
            $http.post(adminurl + 'Contest/getAllUserByMonth', formData).then(function (data) {
                data = data.data;
                console.log("data insde navigation.js", data);
                callback(data);

            });
        },
        apiCall: function (url, formData, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);

            });
        },
        searchCall: function (url, formData, i, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },

        getOneCountry: function (id, callback) {
            $http.post(adminurl + 'country/getOne', {
                _id: id
            }).then(function (data) {
                data = data.data;
                callback(data);

            });
        },
        getLatLng: function (address, i, callback) {
            $http({
                url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyC62zlixVsjaq4zDaL4cefNCubjCgxkte4",
                method: 'GET',
                withCredentials: false,
            }).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },
        uploadExcel: function (form, callback) {
            $http.post(adminurl + form.model + '/import', {
                file: form.file
            }).then(function (data) {
                data = data.data;
                callback(data);

            });

        },
        digtitalCourseSearch: function (data, formData, i, callback, four) {
            $http.post(adminurl + 'digitalCourse/search', formData).then(function (data) {
                data = data.data;
                // console.log("data-----------------------------", data);
                callback(data, i);
            });
        }
    };
});