angular.module("headermodule").directive("myHeader",function(){
    
    return {
        restrict:"A",
        replace:true,
        scope:{navdirectivedata:"="},
        templateUrl:"../../templates/header/header.html"
        
    }
    
})