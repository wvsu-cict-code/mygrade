$('document').ready(function() {
  //
  // create some functions to be executed when
  // the correct route is issued by the user.
  //
  var showAuthorInfo = function () { console.log("showAuthorInfo"); };
  var listBooks = function () { console.log("listBooks"); };

  var allroutes = function() {
    var route = window.location.hash.slice(2);
    var sections = $('section');
    var section;

    section = sections.filter('[data-route=' + route + ']');

    if (section.length) {
      sections.hide(250);
      section.show(250);
    }
  };

  //
  // define the routing table.
  //
  var routes = {
    '/login': showAuthorInfo,
    '/dashboard': listBooks
  };

  //
  // instantiate the router.
  //
  var router = Router(routes);

  //
  // a global configuration setting.
  //
  router.configure({
    on: allroutes
  });

  router.init();
});
