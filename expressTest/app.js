let http = require('http');
let express = require('express');

let port = 8000;

let app = express();
let server = http.createServer(app);
server.listen(port);

//middle-wear is identified as app.use...
//ex app.use('/students', students); pull info from the router  with /students and should run the function identified as students

//listening for when you acess localhost:port
app.use(function(req, res, next){
  console.log("got request");
  next();
});

//app. use or get or post means interactions with that serve
app.use('/public', express.static('./public'));

// when you type in localhost:8000/students it is building a server and giving a request back
app.use('/students', function(req, res, next){
  console.log('I got a request for students'); //sent to terminal
  res.json('hey you asked for students') //sent to client
});
