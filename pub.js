var Thenjs = require('thenjs');
var redis = require("redis")
  , publisher  = redis.createClient();

Thenjs.each([1,2,3,4,5], function(cont, value){
    //注意 always return false whether has a subscriber or not
    //注意 异步 of cause
    //忽略返回的情况
    var res = publisher.publish("testEvent", "haaaaa"+ value);
    console.log(res);
    cont(null, res);
}).then(function(cont ,result){
    console.log("end",result);
    //not ready to die, must NOT exist now
	//    process.exit(0);//this line of code should NOT run
});
