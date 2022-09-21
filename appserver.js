const  express = require("express");
const PORT = process.env.PORT || 80;
const appServer = express();
const router = express.Router();
const fs = require("fs");
const { nextTick } = require("process");

//-------------------------------------------------middleware

router.use('/',(yeucau, trave, tieptuc) => {
    console.log('Time:', Date.now(), yeucau.url);
    tieptuc();
});

// -------------------------------------------------- Routing
router.get( "/" , (yeucau, trave) => {
    data = fs.readFileSync("./view/main.html");
    pageContent = data.toString();
    trave.send(pageContent);
});

router.get( "/home" , (yeucau, trave) => {
    data = fs.readFileSync("./view/home.html");
    pageContent = data.toString();
    trave.send(pageContent);
});

router.get( "/products" , (yeucau, trave) => {
    data = fs.readFileSync("./view/products.html");
    pageContent = data.toString();
    trave.send(pageContent);
});

// ---------------------------------------------use

appServer.use("/", router);

// ----------- RUN / Launching !!! 

appServer.listen( PORT );

console.log("Web da mo tai " + PORT);
