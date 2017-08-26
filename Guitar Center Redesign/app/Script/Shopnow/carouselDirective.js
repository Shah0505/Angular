angular.module("shopmodule").directive('customCarousel',function(){
   return{
    restrict:'E',
    scope:{
        data:'=',
        changeimg:'&',
    },
    templateUrl:"../../templates/shopnow/Carousel.html",
    link:function($scope,element,attr){
            
// Check the screen size and based upon that show the images
var screenCheck = function() {
    var width =window.innerWidth;
    if(width > 900) {
       // desktop
       $scope.imageCollection=$scope.data.slice(0,3);
    } else if(width <= 900 && width > 480) {
       // tablet
       $scope.imageCollection=$scope.data.slice(0,2);
    } else {
       // phone
       $scope.imageCollection=$scope.data.slice(0,1);
    }
}
                               
// Carousel button check
var carouelButtonCheck=function(){
    // Disable the button if there is no previous image to go    
    $scope.firstElement=($scope.data[0]===$scope.imageCollection[0])?true:false;
    // Disable the button if there is no next image to go
    $scope.lastElement=($scope.data[$scope.data.length-1]!==$scope.imageCollection[$scope.imageCollection.length-1])?false:true;
}    

//for carousel animation class
$scope.nextButton=false;
$scope.prevButton=false;

//Previous button for carousel
$scope.prev=function(){
        // Get the index of first displayed image
      var firstIndex = $scope.data.indexOf($scope.imageCollection[0]);
        //check if we are at staring of image data
      if(firstIndex!==0){
        $scope.imageCollection.unshift($scope.data[firstIndex-1]); //Add new image at start 
        $scope.imageCollection.pop() // remove the last image
        }
        carouelButtonCheck(); // check if the buttons shold be disabled or enabled
        // add animation 
        $scope.prevButton=true;
        $scope.nextButton=false;
}
    
    //Next button for carousel
$scope.next=function(){
      //Get index of last image in all the images
    var lastIndex = $scope.data.indexOf($scope.imageCollection[$scope.imageCollection.length-1]);
      //check if we are at the end of image data
     if (lastIndex+1 !=$scope.data.length){
      $scope.imageCollection.push($scope.data[lastIndex+1]); // Add new image at the end
      $scope.imageCollection.shift() //remove the first image from carousel
     }
      carouelButtonCheck();// check if the buttons should be disabled or enabled
      // add animation
      $scope.nextButton=true;
      $scope.prevButton=false;
}
  
  //On window resize create the carousel again
   angular.element(window).on('resize',function(){
        screenCheck();
        carouelButtonCheck();
        $scope.$digest(); // run the digest cycel to update the ng-repat list
    });
//check the controls for the first time
screenCheck(); // Dispaly the images based upon screen
carouelButtonCheck();


        
    }
   }    
});