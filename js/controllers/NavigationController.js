/**
 * Author: efthemiosprime
 * Date: 9/9/13
 * Time: 10:44 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

ArcDirectors.controller('NavigationController',
    function NavigationController($scope, $location) {


        $scope.current = "current";
        $scope.isActive = function(route) {
            return route === $location.path();
        }

    }
);