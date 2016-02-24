/**
 * Created by tal on 2/24/16.
 */
(function() {
    'use strict';
    angular
        .module('ngFuelTank', [])
        .directive('fuelTank', ['$document', '$parse', fuelTank]);

    function fuelTank($document, $parse) {
        return {
            restrict: 'E',
            templateNamespace: 'svg',
            templateUrl: 'fuel-tank.html',
            replace: true,
            scope: {
                fillPercentage: "="
            }
        };
    }
})();
