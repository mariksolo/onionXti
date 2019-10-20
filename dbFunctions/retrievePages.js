var mongo = require("mongodb").MongoClient;

// The URL used to acccess the mongo database
var url = "mongodb://localhost/mainDB";

// This function returnes a promise that resolves to all the user-created pages in the database
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
