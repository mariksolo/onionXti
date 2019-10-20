var userPageRoute = require("../classes/userPageRoute");

// This function creates and sets a new route for the user-created page
function createNewUserRoute(content, url, router) {
  var pageRouter = new userPageRoute(url, content, router);
  pageRouter.setRoute();
}

module.exports = createNewUserRoute;
