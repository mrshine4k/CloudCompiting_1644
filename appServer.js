const  express = require("express");
const PORT = process.env.port || 80;
const appserver = express();
const router = express.Router();
const fs = require("fs");

// ------------------- Routing
router.get( "/" , (yeucau, trave) => {
    data = fs.readFileSync("./html/main.html");
    pageContent = data.toString();
    trave.send(pageContent);
});

// -------------------------
appserver.use("/", router);
// ----------- RUN / Lauching !!! 
appserver.listen( PORT );

console.log("Web da mo tai " + PORT);
