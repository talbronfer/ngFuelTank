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
            template: "<svg ng-attr-height='{{height}}'><a><g><circle r='50' fill='#f60'></circle></g><g><clipPath id='g-clip'><rect id='g-clip-rect' y='-50' ng-attr-height='{{fillHeight}}' x='-50' ng-attr-width='{{height}}'> </rect> </clipPath> <circle clip-path='url(#g-clip)' r='47' fill='#fff' ></circle> </g> </a> </svg>",
            replace: false,
            scope: {
                height: "=",
                fillPercentage: "="
            },
            compile: function(elem, attrs) {
                return function(scope) {
                    scope.fillHeight = scope.height / (100 / scope.fillPercentage);
                };
            }
        };
    }
})();
