var redis = require("redis")
  , subscriber = redis.createClient();
//注意跨进程接受，并且是广播类别
//也就是说：1个pub n个sub 的结构，n个sub 都接收到，请务必注意逻辑
subscriber.on("message", function(channel, message) {
  console.log(new Date() + "Message '" + message + "' on channel '" + channel + "' arrived!")
});

subscriber.subscribe("testEvent");

