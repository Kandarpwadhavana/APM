const EXPRESS = require("express");
var app = EXPRESS();
var port = process.env.PORT || 8080;
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/Mobile.html");
});
app.listen(port,function(err){
    if(err){
        console.log("Error ! could not connect to server");
    }
    else{
        console.log("Server is running on "+port);
    }
})