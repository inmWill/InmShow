(function () {

    angular.module('inmShowApp', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar'])
        .config(function ($routeProvider) {

            $routeProvider.when("/home", {
                controller: "homeController",
                templateUrl: "/views/home.html"
            });

            $routeProvider.when("/login", {
                controller: "loginController",
                templateUrl: "/views/login.html"
            });

            $routeProvider.when("/signup", {
                controller: "signupController",
                templateUrl: "/views/signup.html"
            });

            $routeProvider.when("/orders", {
                controller: "ordersController",
                templateUrl: "/views/orders.html"
            });

            $routeProvider.otherwise({ redirectTo: "/home" });
        }).run([
            'authService', function (authService) {
                authService.fillAuthData();
            }
        ]).config(function ($httpProvider) {
            $httpProvider.interceptors.push('authInterceptorService');
        });
})();