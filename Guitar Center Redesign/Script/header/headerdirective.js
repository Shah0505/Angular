angular.module("headermodule").directive("myHeader",function(){
    
    return {
        restrict:"A",
        replace:true,
        scope:{navdirectivedata:"="},
        templateUrl:"Script/header/header.html"
        
    }
    
})