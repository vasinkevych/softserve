(function (){
    "use strict";

    angular
        .module("app")
        .controller("homeController", homeController);

    homeController.$inject = ["dataService"];

    function homeController(dataService) {
        var vm = this;
        vm.user = dataService.user;
    }
})();