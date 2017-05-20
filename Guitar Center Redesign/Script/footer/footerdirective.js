angular.module("footermodule").directive("myFooter",function(){
    return{
        restrict:"A",
        replace:true,
        require:"^ngInclude",
        templateUrl:"Script/footer/footer.html"
    }

    
});