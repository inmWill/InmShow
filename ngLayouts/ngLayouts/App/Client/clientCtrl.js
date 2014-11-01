(function () {
    'use strict';

    angular
        .module('devEtlApp')
        .controller('clientCtrl', ['$location', clientCtrl]);

    function clientCtrl($location) {
        var vm = this;
        vm.title = 'clientCtrl';

        activate();

        function activate() { }
    }
})();
