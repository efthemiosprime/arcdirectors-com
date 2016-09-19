/**
 * Author: efthemiosprime
 * Date: 9/9/13
 * Time: 10:44 PM
 */

'use strict';

ArcDirectors.controller('PrincipalsController',
    function PrincipalsController($scope,AppModel) {
        $scope.data = AppModel.data[1].contents;
        $scope.sideURL = AppModel.sideURL;

    }
);