'use strict';
app.factory('ordersService', [
    '$http', function ($http) {

        var serviceBase = 'http://localhost:51517/';
        var ordersServiceFactory = {};

        var _getOrders = function () {

            return $http.get(serviceBase + 'api/InmAbstracts/GetAll').then(function (results) {
                return results;
            });
        };

        ordersServiceFactory.getOrders = _getOrders;

        return ordersServiceFactory;

    }
]);