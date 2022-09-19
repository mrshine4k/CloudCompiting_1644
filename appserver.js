const  express = require("express");
const PORT = process.env.port || 3000;
const appserver = express();
const router = express.Router();
const fs = require("fs");
const host = '0.0.0.0';


// ------------------- Routing
router.get( "/" , (yeucau, trave) => {
    data = fs.readFileSync("./html/main.html");
    pageContent = data.toString();
    trave.send(pageContent);
});

// -------------------------
appserver.use("/", router);
// ----------- RUN / Lauching !!! 
appserver.listen( PORT,host );

console.log("Web da mo tai " + PORT);
