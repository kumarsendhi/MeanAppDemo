
var express = require('express');
var app = express();

app.use(express.static(__dirname+"/public"))

app.get('/arealist',function(req,res){
    console.log("I received a Get request");
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
    res.json(arealist);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
