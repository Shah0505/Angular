angular.module("headermodule").controller("headerctrl",["$scope","headerfactory",function($scope,headerfactory){
    headerfactory.headernavdata().then(function(resp){
        $scope.navdata=resp.headerdata
    })
}]);