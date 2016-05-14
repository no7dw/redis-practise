var Thenjs = require('thenjs');
var redis = require("redis")
  , publisher  = redis.createClient();

Thenjs.each([1,2,3,4,5], function(cont, value){
    //注意 异步 of cause
    publisher.publish("testEvent", "haaaaa "+ value, function(err, res){
    	//注意 return subscriber counter: 
    	//0 ==> not any subscriber 
    	console.log(res);
    	cont(null, res);	
    });
    
}).then(function(cont ,result){
    console.log("end",result);
    //ready to die
   process.exit(0);
});
