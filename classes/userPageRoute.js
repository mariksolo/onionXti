// var express = require('express');
// var router = express.Router();

class userPageRoute {
  constructor(url, content, router) {
    this.url = url;
    this.content = content;
    this.router = router;
  }

  setRoute() {
    var content = this.content;
    this.router.get("/" + this.url, function(req, res, next) {
      res.render("userPageTemplate", { content: content });
    });
  }
}
module.exports = userPageRoute;
