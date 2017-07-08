angular.module("shopmodule").controller("thankscontroller",["$scope",function($scope){
    $scope.paymentData = JSON.parse(localStorage.paymentData);
    console.log($scope.paymentData);
}]);
