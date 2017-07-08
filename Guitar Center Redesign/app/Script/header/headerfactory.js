angular.module("headermodule").factory("headerfactory",["$http","$q",function($http,$q){
    var obj={};
    obj.headernavdata=function(){

        var deferred = $q.defer();
        $http.get('../../data/header.json').success(function(resp){deferred.resolve(resp)}).error(function(error){deferred.reject(error)});
        return deferred.promise;
    }
    return obj;
}]);