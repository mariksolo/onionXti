var express = require("express");
var router = require("../classes/PrimaryRouter");
var randomstring = require("randomstring");
var addPage = require("../dbFunctions/addPage");
var createNewUserRoute = require("./createNewUserRoute");

router.post("/", function(req, res, next) {
  let randomUrl = randomstring.generate(4);
  addPage(req.body.content, randomUrl);
  res.render("afterCreate", { title: "onionXti", url: randomUrl });

  createNewUserRoute(req.body.content, randomUrl, router);
});

module.exports = router;
