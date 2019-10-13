var mongo = require("mongodb").MongoClient;

var url = "mongodb://localhost/mainDB";

function addPage(content, urlString) {
  mongo.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    (err, client) => {
      if (err) {
        console.error(err);
        return;
      }
      const db = client.db("pagedb");
      const collection = db.collection("pages");

      collection.insertOne({
        url: urlString,
        content: content
      });

      collection.find().toArray((err, items) => {
        console.log(items);
      });
    }
  );
}

module.exports = addPage;
