/**
 * Author: efthemiosprime
 * Date: 9/9/13
 * Time: 10:44 PM
 */

'use strict';

ArcDirectors.controller('DirectorShipController',
    function DirectorShipController($scope, AppModel) {
        $scope.data = AppModel.data[2].contents;
        $scope.sideURL = AppModel.sideURL;

    }
);