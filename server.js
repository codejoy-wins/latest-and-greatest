const express = require("express");
const app = express();
const server = require('http').createServer(app); // Need explanation
const bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./server/config/mongoose');   // the server requires the modularized data connection
require('./server/config/routes')(app); // the server requires the modularized routing and passes the app

server.listen(7117, ()=>{
    {console.log("We did it on port 7117")};
})
