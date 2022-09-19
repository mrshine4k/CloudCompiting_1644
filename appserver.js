const express = require('express');
const appserver = express();
const router = express.Router();
const fs = require("fs");
const host = '0.0.0.0';
const port = process.env.PORT || 3000;
console.log("Web has been initialized" +" "+ port);


// ------------------- Routing
router.get('/',(request,response)=>
{
    data = fs.readFileSync("./html/main.html");
    pageContent = data.toString();
    response.send(pageContent);
});
router.get('/home',(request,response)=>
{
    data = fs.readFileSync("./html/home.html");
    pageContent = data.toString();
    response.send(pageContent);
});
router.get('/about',(request,response)=>
{
    data = fs.readFileSync("./html/about.html");
    pageContent = data.toString();
    response.send(pageContent);
});
router.get('/contact',(request,response)=>
{
    data = fs.readFileSync("./html/contact.html");
    pageContent = data.toString();
    response.send(pageContent);
});

// -------------------------
appserver.use('/', router);
appserver.use('/home', router);
appserver.use('/about', router);
appserver.use('/contact', router);
// ----------- RUN / Lauching !!! 
appserver.listen( PORT,host );

console.log("Web da mo tai " + PORT);
