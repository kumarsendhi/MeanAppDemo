var app = angular.module("myApp",[]);

app.controller('AppCntrl', function ($scope, $http){
    console.log("Hello Everybody I'm AppCntrl")
    
    $http.get('/arealist').success(function(response){
        console.log("I got the data I requested");
         $scope.arealist = response
    });
    
   
   
})