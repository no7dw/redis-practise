# redis-practise

if a scripter is down when publisher publish a message, when the scripterinstance will not get the message

node.js
MacBookPro 2015 Early

loopArray 20k, avg: latency 625 ms
loopArray 20, avg: latency 4 ms

for i in {1..19};do node pub.js $i & sleep 1  ; done
