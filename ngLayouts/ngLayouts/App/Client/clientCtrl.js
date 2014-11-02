(function () {
    'use strict';

    angular
        .module('devEtlApp')
        .controller('clientCtrl', ['$location', clientCtrl]);

    function clientCtrl($location) {
        var vm = this;

        vm.clients = [
            { 'name': 'SLVHA', 'clientId': '1' },
            { 'name': 'Hain Celestial', 'clientId': '2' },
            { 'name': 'On The Border', 'clientId': '3' }
        ];

        vm.audits = [
            {'name': '12/01/12013 - Ongoing', 'auditId': '1'},
            { 'name': '1/01/12014 - Ongoing', 'auditId': '2' },
            { 'name': '2/01/12014 - Ongoing', 'auditId': '3' },
            { 'name': 'Working Spouse Surcharge', 'auditId': '4' }
        ];

        vm.profiles = [
            {'name': 'Standard Ongoing', 'profileId': '1'},
            {'name': '100% Initial Audit', 'profileId': '2'},
            {'name': 'Carve Out', 'profileId': '3'},
            { 'name': 'Full Working Spouse Surcharge', 'profileId': '4' }                                                                  
        ];

        vm.activeClient = null;
        vm.activeAudit = null;
        vm.activeProfile = null;

        //activate();

        //function activate() { }
    }
})();
