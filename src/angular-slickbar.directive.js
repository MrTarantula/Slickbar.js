(function () {
    'use strict';

    angular
        .module('ngSlickbar')
        .directive('angularSlickbar', angularSlickbar);

    function angularSlickbar() {
        var directive = {
            restrict: 'E',
            scope: {},
            templateUrl: "angular-slickbar.tpl.html",
            controller: SlickbarController,
            bindToController: true
        };

        return directive;
    }

    SlickbarController.$inject = ['slickbarConfig'];

    function SlickbarController(slickbarConfig) {

    }
})();
