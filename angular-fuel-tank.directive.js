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
            template: "<svg ng-attr-height='{{radius * 2}}'><a><g><circle ng-attr-r='{{radius}}' fill='#f60'></circle></g><g><clipPath id='g-clip'><rect id='g-clip-rect' ng-attr-y='{{-radius}}' ng-attr-height='{{(radius * 2) - ((radius * 2)/(100 / fillPercentage))}}' ng-attr-x='{{ -radius}}' ng-attr-width='{{radius * 2}}'> </rect> </clipPath> <circle clip-path='url(#g-clip)' r='22' fill='#fff' ></circle> </g> </a> </svg>",
            replace: false,
            scope: {
                radius: '=',
                fillPercentage: "="
            },
            compile: function(elem, attrs) {
                return function(scope) {
                    //scope.fillHeight = 100 - scope.fillPercentage;
                };
            }
        };
    }
})();
