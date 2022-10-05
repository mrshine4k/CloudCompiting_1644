const Product = require("./model/product");

const username = 'user202210';
const pw = '39X7M59lTX9HZBTZ';

const { MongoClient, ServerApiVersion } = require('mongodb');
const { default: mongoose } = require("mongoose");
const uri = "mongodb+srv://"
    + username + ":" + pw +
    "@cluster0.la3xlvm.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", _ => {
    console.log("|DB CONNECTED|")
});

db.on("error", err => {
    console.log("|ERROR|");
})

newRecord = new Product({
    MaSP: "QM 01",
    TenSP: "Quat may kich co nho",
    MoTaSP: "Quat may 10W, size = M",
    ImageLink: "Quat may kick co nho",
    Price: 420,
    Stock: 4,
});

newRecord.save(
    (err, document) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Data:", document);
        }
    }
);
