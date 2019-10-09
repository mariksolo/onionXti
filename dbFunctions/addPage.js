var mongo = require("mongodb").MongoClient;

var url = 'mongodb://localhost/mainDB';

function addPage(content) {
    mongo.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, (err, client) => {
        if (err) {
          console.error(err)
          return      
        }
        const db = client.db('pagedb')
        const collection = db.collection('pages');
    
        collection.insertOne({
          pageId: 1,
          content: content
        })

        collection.find().toArray((err, items) => {
            console.log(items)
          })
    
    })
}

module.exports = addPage;
