const redis = require("redis"), publisher  = redis.createClient()

let N = 20
let loopArray = Array.apply(null, {length: N}).map(Number.call, Number)

async function send(x) {
    t = new Date().getTime()+ ""
    await publisher.publish("testEvent", t)
    console.log(x)
}

let r = loopArray.map(x=> send(x) )
console.log("eof")
