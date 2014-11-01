(function () {
    'use strict';

    angular
        .module('inmShowApp')
        .controller('homeController', ['$location','$scope', homeController]);

    function homeController($location) {
        var vm = this;
        vm.title = 'homeController';

        activate();

        function activate() { }
    }
})();
