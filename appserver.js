const  express = require("express");
const PORT = process.env.PORT || 8000;
const appServer = express();
const router = express.Router();
const fs = require("fs");
const path = require('path');


//engine setup
appServer.set("views", path.join(__dirname, 'view'));
appServer.set("view engine", "hbs"); //setting view

// Middleware
const bodyParser = require("body-parser");

// Config
appServer.use(express.static("public"));


// ------------------- Middleware - kiem soat tinh huong
router.use( (yeucau, trave, ketiep) => { 
    console.log("REQ: ", Date.now(), yeucau.url);
    ketiep();
});

router.use( (loixayra, yeucau, trave, ketiep) => { 
    console.log("ERROR: ", Date.now(), yeucau.url);
    console.log(loixayra);
    trave.status(500).send("Dang co loi xay ra, chua biet o dau !!!");
});

// ------------------- Routing
router.get( "/" , (yeucau, trave) => {
    trave.render("main", {TenTrang: "Main chinh"});
});

router.get( "/home" , (yeucau, trave) => {
    trave.render("home", {TenTrang: "Home nha"});
});


//--- Add middleware
//const session = express.session();
appServer.use(bodyParser.json());
//appServer.use(session({secret: "id-session-Mr.Tu"​}));


// ------------------------- Add Router / Controller
appServer.use("/", router);

const ProductRouter = require("./controller/productController").ProductRouter;
appServer.use("/products", ProductRouter);

const LoginRouter = require("./controller/loginController").LoginRouter;
appServer.use("/login", LoginRouter);

// ----------- RUN / Launching !!! 
appServer.listen( PORT );

console.log("Web da mo tai " + PORT);
