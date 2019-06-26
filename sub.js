let redis = require("redis")
  , subscriber = redis.createClient()
let sum = 0
let count = 0

subscriber.on("message", (channel, message) =>  {
  receiveTime = new Date().getTime()
  delta = receiveTime -  parseFloat(message) 
  // console.log(new Date() + "Message '" + message + "' on channel '" + channel + "' arrived!")
  sum += delta
  count += 1
  if(count%20==0){
    console.log(sum/count)
  }
})

subscriber.subscribe("testEvent")




