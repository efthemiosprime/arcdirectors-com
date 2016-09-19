
/**
 * User: efthemiosprime
 * Date: 1/24/14
 * Time: 8:15 PM
 */
'use strict';

ArcDirectors.controller('SecretarialController',
    function SecretarialController($scope, AppModel) {
        $scope.data = AppModel.data[3].contents;
        $scope.sideURL = AppModel.sideURL;

    }
);
