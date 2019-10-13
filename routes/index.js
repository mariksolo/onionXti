var express = require("express");
// var router = express.Router();
var retrievePages = require("../dbFunctions/retrievePages");
var userPageRoute = require("../classes/userPageRoute");
var router = require("../classes/PrimaryRouter");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "onionXti" });
});

setTimeout(function() {
  var pageRouter = new userPageRoute("test", "test content", router);
  pageRouter.setRoute();
}, 6000);

retrievePages()
  .then(data => {
    console.log(data);
    for (let key in data) {
      let url = data[key].url;
      let content = data[key].content;
      pageRouter = new userPageRoute(url, content, router);
      pageRouter.setRoute();
    }
  })
  .catch(e => {
    console.error(e);
  });

module.exports = router;
