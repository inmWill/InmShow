(function () {
    'use strict';

    angular.module('devEtlApp', ['ngAnimate', 'ngRoute']).config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/client', {
                    templateUrl: 'Views/ClientDetails.html'
                //    controller: 'ClientCtrl'
                }).
                when('/audit', {
                    templateUrl: 'Views/AuditDetails.html'
               //     controller: 'AuditCtrl'
                }).
                when('/settings', {
                    templateUrl: 'Views/ClientSettings.html'
                    //     controller: 'AuditCtrl'
                }).
                when('/etlsettings', {
                    templateUrl: 'Views/ETLDetails.html'
                    //     controller: 'AuditCtrl'
                }).
                when('/home', {
                    templateUrl: 'Views/Home.html'
                    //     controller: 'AuditCtrl'
                }).
                when('/results', {
                    templateUrl: 'Views/results.html'
                    //     controller: 'AuditCtrl'
                }).
                when('/batch', {
                    templateUrl: 'Views/BatchDetails.html'
                 //   controller: 'AuditCtrl'
                }).
                otherwise({
                    redirectTo: '/client'
                });
        }]);

})();