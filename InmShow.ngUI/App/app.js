(function () {
    'use strict';

    angular.module('inmShowApp', ['ngAnimate', 'ngRoute']).config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/client', {
                    templateUrl: 'Views/ClientPartial.html'
                    //    controller: 'ClientCtrl'
                }).
                when('/audit', {
                    templateUrl: 'Views/ClientPartial.html'
                    //     controller: 'AuditCtrl'
                }).
                when('/batch', {
                    templateUrl: 'Views/ClientPartial.html'
                    //   controller: 'AuditCtrl'
                }).
                otherwise({
                    redirectTo: '/client'
                });
        }]);

})();