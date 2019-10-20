var express = require("express");
var retrievePages = require("../dbFunctions/retrievePages");
var userPageRoute = require("../classes/userPageRoute");
var router = require("../classes/PrimaryRouter");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "onionXti" });
});

// Retrieve all pages from the data base, then create a new route for each page
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
