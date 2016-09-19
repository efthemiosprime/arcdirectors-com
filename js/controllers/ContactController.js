/**
 * User: efthemiosprime
 * Date: 9/22/13
 * Time: 9:52 PM
 * ContactConroller
 */

ArcDirectors.controller('ContactController',
    function ContactController($scope, AppModel) {
        $scope.data = AppModel.data[5].contents;
        $scope.sideURL = AppModel.sideURL;

    }
);

