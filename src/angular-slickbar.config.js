(function () {
    'use strict';

    angular
        .module('ngSlickbar')
        .constant('slickbarConfig', {
            theme: "dark",      //dark or light
            size: "normal",     //normal or large
            fixed: false        //always fully expanded
        });

})();
