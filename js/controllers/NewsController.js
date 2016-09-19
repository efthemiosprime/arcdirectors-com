/**
 * User: efthemiosprime
 * Date: 9/10/13
 * Time: 12:10 AM
 */

ArcDirectors.controller('NewsController',
    function NewsController($scope, AppModel) {
        $scope.data = AppModel.data[4].contents;
        $scope.sideURL = AppModel.sideURL;


    }
);
