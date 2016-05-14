var Thenjs = require('thenjs');
var redis = require("redis")
  , publisher  = redis.createClient();

Thenjs.each([1,2,3,4,5], function(cont, value){
    //when no sub？
    //注意 always return false whether has a subscriber or not
    //注意 异步 of cause
    var res = publisher.publish("testEvent", "haaaaa"+ value);
    console.log(res);
    cont(null, res);
}).then(function(cont ,result){
    console.log("end",result);
    //when to die
//    process.exit(0);
});
