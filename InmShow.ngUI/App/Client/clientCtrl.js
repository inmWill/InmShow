(function () {
    'use strict';

    angular
        .module('inmShowApp')
        .controller('clientCtrl', ['$location', clientCtrl]);

    function clientCtrl($location) {
        var vm = this;
        vm.title = 'clientCtrl';

        activate();
        //test

        function activate() { }
    }
})();
