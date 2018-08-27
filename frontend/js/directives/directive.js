myApp.directive('img', function ($compile, $parse) {
        return {
            restrict: 'E',
            replace: false,
            link: function ($scope, element, attrs) {
                var $element = $(element);
                if (!attrs.noloading) {
                    $element.after("<img src='img/loading.gif' class='loading' />");
                    var $loading = $element.next(".loading");
                    $element.load(function () {
                        $loading.remove();
                        $(this).addClass("doneLoading");
                    });
                } else {
                    $($element).addClass("doneLoading");
                }
            }
        };
    })

    .directive('hideOnScroll', function ($document) {
        return {
            restrict: 'EA',
            replace: false,
            link: function (scope, element, attr) {
                var $element = $(element);
                var lastScrollTop = 0;
                $(window).scroll(function (event) {
                    var st = $(this).scrollTop();
                    if (st > lastScrollTop) {
                        $(element).addClass('nav-up');
                    } else {
                        $(element).removeClass('nav-up');
                    }
                    lastScrollTop = st;
                });
            }
        };
    })


    .directive('fancyboxBox', function ($document) {
        return {
            restrict: 'EA',
            replace: false,
            link: function (scope, element, attr) {
                var $element = $(element);
                var target;
                if (attr.rel) {
                    target = $("[rel='" + attr.rel + "']");
                } else {
                    target = element;
                }

                target.fancybox({
                    openEffect: 'fade',
                    closeEffect: 'fade',
                    closeBtn: true,
                    nextEffect: '',
                    prevEffect: '',
                    padding: 0,
                    helpers: {
                        title: {
                            type: 'over'
                        },
                        thumbs: {
                            width: 50,
                            height: 50
                        },
                        helpers: {
                            media: {}
                        }
                    }
                });
            }
        };
    })

    .directive('fancyboxThumb', function ($document) {

        return {
            restrict: 'EA',
            replace: false,
            link: function (scope, element, attr) {
                var $element = $(element);
                var target;
                if (attr.rel) {
                    target = $("[rel='" + attr.rel + "']");
                } else {
                    target = element;
                }

                target.fancybox({
                    nextEffect: 'none',
                    prevEffect: 'none',
                    padding: 0,
                    helpers: {
                        title: {
                            type: 'over'
                        },
                        thumbs: {
                            width: 50,
                            height: 50
                        }
                    }
                });
            }
        };
    })

    .directive('autoHeight', function ($compile, $parse) {
        return {
            restrict: 'EA',
            replace: false,
            link: function ($scope, element, attrs) {
                var $element = $(element);
                var windowHeight = $(window).height();
                $element.css("min-height", windowHeight);
            }
        };
    })


    .directive('replace', function () {
        return {
            require: 'ngModel',
            scope: {
                regex: '@replace',
                with: '@with'
            },
            link: function (scope, element, attrs, model) {
                model.$parsers.push(function (val) {
                    if (!val) {
                        return;
                    }
                    var regex = new RegExp(scope.regex);
                    var replaced = val.replace(regex, scope.with);
                    if (replaced !== val) {
                        model.$setViewValue(replaced);
                        model.$render();
                    }
                    return replaced;
                });
            }
        };
    })

    .directive('onlyDigits', function () {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function (scope, element, attr, ctrl) {
                var digits;
    
                function inputValue(val) {
                    if (val) {
                        var otherVal = val + "";
                        if (attr.type == "text") {
                            digits = otherVal.replace(/[^0-9\-\.\\]/g, '');
                        } else {
                            digits = otherVal.replace(/[^0-9\-\.\\]/g, '');
                        }
    
    
                        if (digits !== val) {
                            ctrl.$setViewValue(digits);
                            ctrl.$render();
                        }
                        return parseInt(digits, 10);
                    }
                    return undefined;
                }
                ctrl.$parsers.push(inputValue);
            }
        };
    })
    .directive('onlyLettersInput', function () {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function (scope, element, attr, ngModelCtrl) {
                function fromUser(text) {
                    var transformedInput = text.replace(/[^a-zA-Z\s]/g, '');
                    //console.log(transformedInput);
                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                ngModelCtrl.$parsers.push(fromUser);
            }
        };
    })

;