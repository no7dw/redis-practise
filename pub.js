var Thenjs = require('thenjs');
var redis = require("redis")
  , publisher  = redis.createClient();

Thenjs.each([1,2,3,4,5], function(cont, value){
    var out = publisher.publish("testEvent", "haaaaa"+ value);
    console.log(out);
    cont(null, out);
}).then(function(cont ,result){
    console.log("end",result);
//    process.exit(0);
});
