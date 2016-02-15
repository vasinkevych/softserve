(function(){
    angular
        .module("app")
        .directive("appMenu", appMenu);

    function appMenu(){
        return {
            restrict: "A",
            templateUrl: "pages/menu.html"
        }
    }
})();