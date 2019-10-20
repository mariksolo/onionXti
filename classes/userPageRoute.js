// userPageRoute represents the route to a user-created page.
// Each page has its own url, content, and router that it uses.
// Each page uses the same router imported from PrimaryRouter
class userPageRoute {
  constructor(url, content, router) {
    this.url = url;
    this.content = content;
    this.router = router;
  }

  // This function creates the route for the user-created page
  setRoute() {
    var content = this.content;
    this.router.get("/" + this.url, function(req, res, next) {
      res.render("userPageTemplate", { content: content });
    });
  }
}
module.exports = userPageRoute;
