angular.module("shopmodule").controller("shopnowcontroller",["$scope","$window","$location",function($scope,$window,$location){
    
    $scope.guitarshopnow=JSON.parse(localStorage.guitarlocaldata);

//************************** For multislide Carousel**************************************************
  
$scope.imagedata= $scope.guitarshopnow.imagepath;
//*******************************To change img***********************************************************
    $scope.firstimg=$scope.guitarshopnow.imagepath[0];
    $scope.changeimg=function(slide){
        $scope.firstimg=slide;
    }
    
//********************************For expiry date*******************************************
var today = new Date();
$scope.months= [],$scope.years=[];
    for(i=1;i<=12;i++){
        $scope.months.push(i);
    }
var  currentyear = today.getFullYear()+1;
    for(i=currentyear;i<=currentyear+7;i++){
        $scope.years.push(i);
    }



//********************************For button to goto thanks*************************************************
$scope.go = function ( path ) {
  $location.path( path );
};

//******************** Today's Date ******************
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 
if(mm<10) {
    mm='0'+mm
} 

today = mm+'/'+dd+'/'+yyyy;

//*****************Form Submittion *****************************
$scope.userDetails={
    firstname:'',
    lastname:'',
    email:'',
    contactno:'',
    cardno:'',
    exmm:'',exyy:'',
    address:'',
    paymentdate:'',
    productname:'',
    price:''
}
$scope.submit=function(){
    $scope.submitted=true;
        
    if($scope.myform.$valid){
        $scope.go("/thanks")
        $scope.submitted=false;
        $scope.userDetails.paymentdate=today;
        $scope.userDetails.productname= $scope.guitarshopnow.name;
        $scope.userDetails.price=$scope.guitarshopnow.price;
        localStorage.paymentData=JSON.stringify($scope.userDetails);
    }
}
    
}])