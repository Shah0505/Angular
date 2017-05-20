angular.module("shopmodule").factory("shopfactory",["$http","$q",function($http,$q){
    var obj={}
    obj.shopdata=function(){
        var deferred=$q.defer();
        $http.get("guitardata.json")
            .success(function(resp){deferred.resolve(resp)})
            .error(function(error){deferred.reject(error)});
        return deferred.promise;
    }
    return obj
}])