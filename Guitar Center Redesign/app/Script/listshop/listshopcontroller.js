angular.module("shopmodule").controller("listshopcontroller",["$scope","shopfactory",function($scope,shopfactory){
    shopfactory.shopdata().then(function(resp){
        $scope.shopguitardata=resp.allProducts;
        })

$scope.storage=function(obj){

            localStorage.guitarlocaldata=JSON.stringify(obj);
    }
}]);
