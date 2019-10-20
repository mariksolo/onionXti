var mongo = require("mongodb").MongoClient;

// The URL used to acccess the mongo database
var url = "mongodb://localhost/mainDB";

// This function creates a new page for the user
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
      // Access the page database and get the pages collection.
      // This is the collection used to store all of the user-created pages
      const db = client.db("pagedb");
      const collection = db.collection("pages");

      // Add the user's page to the database
      collection.insertOne({
        url: urlString,
        content: content
      });

    }
  );
}

module.exports = addPage;
