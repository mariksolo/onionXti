var mongo = require("mongodb").MongoClient;

var url = "mongodb://localhost/mainDB";

function retrievePages() {
  let pages = new Promise((resolve, reject) => {
    mongo.connect(
      url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      (err, client) => {
        if (err) {
          reject(err);
        }

        const db = client.db("pagedb");
        const collection = db.collection("pages");
        let contentArray = collection.find().toArray();
        resolve(contentArray);
      }
    );
  });

  return pages;
}

module.exports = retrievePages;
