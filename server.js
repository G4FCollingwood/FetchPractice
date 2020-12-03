var express = require('express')
var app = express()

app.use(express.static('client'));

let instruments = ['piano','drums','saxophone']

app.get('/list', function(req, resp){
   resp.send(instruments)
})

app.listen(8090)