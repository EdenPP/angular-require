'use strict';
define('app', ['angular'], function (angular) {
    var app = angular.module('app', []);
    app.controller('main-ctrl', function ($scope) {
        $scope.greeting = 'Hello';
    });
    return app;
});