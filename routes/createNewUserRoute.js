var userPageRoute = require("../classes/userPageRoute");

function createNewUserRoute(content, url, router) {
  console.log("creating new route");
  var pageRouter = new userPageRoute(url, content, router);
  pageRouter.setRoute();
}

module.exports = createNewUserRoute;
