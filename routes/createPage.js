var express = require("express");
var router = require("../classes/PrimaryRouter");
var randomstring = require("randomstring");
var addPage = require("../dbFunctions/addPage");
var createNewUserRoute = require("./createNewUserRoute");

// This is the route that handles a post request to create a new page
router.post("/", function(req, res, next) {
  // Generate a random url
  let randomUrl = randomstring.generate(4);

  // Add the user's content and the url to the database as a page
  addPage(req.body.content, randomUrl);

  // Send a page to the user indicating the url of their new page
  res.render("afterCreate", { title: "onionXti", url: randomUrl });

  // Create a new page with the user's url and content
  createNewUserRoute(req.body.content, randomUrl, router);
});

module.exports = router;
