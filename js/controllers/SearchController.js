/**
 * User: efthemiosprime
 * Date: 9/11/13
 * Time: 11:19 PM
 */
'use strict';

ArcDirectors.controller('SearchController',
    function SearchController($scope, AppModel) {


     //   var myHilitor = new Hilitor("search_content"); \
        $scope.hasResult = true;
        $scope.$on("ArcDirectors.onUpdateSearchInput", function (){
           $scope.searchForString =   AppModel.data.searchString;
         //   myHilitor.apply($scope.searchForString);

        });

        $scope.$on("ArcDirectors.onUpdateSearchResult", function (){

            $scope.result =   AppModel.data.result;
            $scope.hasResult =  ($scope.result.length > 0)?true : false;

        });

        $scope.sideURL = AppModel.sideURL;





    }
);