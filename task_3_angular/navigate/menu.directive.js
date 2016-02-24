(function(){
    angular
        .module("app")
        .directive("appMenu", appMenu);

    function appMenu(){
        return {
            //restrict: "A",
            templateUrl: "navigate/menu.html",
            controller: menuController,
            controllerAs: "menuCtrl"
        }
    }
    menuController.$inject = ["dataService"];
    function menuController (dataService){
        var vm = this;
        vm.isCollapsed = true;
        vm.menuItem = dataService.navigate;
    }
})();