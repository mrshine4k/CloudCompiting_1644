const username = 'user202210';
const pw = '39X7M59lTX9HZBTZ';

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://" + username + ":" + pw + "@cluster0.la3xlvm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


client.connect((err, db) => {

    if (err) {
        console.log("Error: ", err);
        process.exit(0);
    }

    db.db("test").createCollection("customers",
        (err2, results) => {
            if (err2) {
                console.log("Error: ", err2);
            } else {
                console.log("Created !!!");
                db.close();
            }
            process.exit(1);
        }
    );
});