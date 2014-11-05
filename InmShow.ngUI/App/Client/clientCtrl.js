(function () {
    'use strict';

    angular
        .module('inmShowApp')
        .controller('ClientCtrl', ['$scope', ClientCtrl]);

    function ClientCtrl($scope) {
        var vm = this;
        vm.title = 'ClientCtrl';

        activate();
        //test

        function activate() { }
    }
})();
