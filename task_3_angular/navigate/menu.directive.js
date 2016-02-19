(function(){
    angular
        .module("app")
        .directive("appMenu", appMenu);

    function appMenu(){
        return {
            restrict: "A",
            templateUrl: "navigate/menu.html"
        }
    }

    function headerController() {
        var vm = this;
        vm.isCollapsed = true;
    }
})();