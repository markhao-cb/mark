window.Mark = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $("#main");
    var router = new Mark.Routers.Router({
      $rootEl: $rootEl
    });
    Backbone.history.start();
  }
};
