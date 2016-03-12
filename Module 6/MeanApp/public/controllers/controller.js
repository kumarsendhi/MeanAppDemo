var app = angular.module("myApp",[]);

app.controller('AppCntrl', function ($scope, $http){
    console.log("Hello Everybody I'm AppCntrl")
    
    var area1 ={
        country:"India",
        state:"Karnataka",
        district:"Bangalore",
        area:"Marathhalli",
        pincode:"560100"
    };
    
    var area2 ={
        country:"India",
        state:"Karnataka",
        district:"Bangalore",
        area:"KRPuram",
        pincode:"560101"
    };
    
    var area3 ={
        country:"India",
        state:"Karnataka",
        district:"Bangalore",
        area:"Ecity",
        pincode:"560420"
    };
    
    var arealist =[area1,area2,area3];
    $scope.arealist = arealist
})