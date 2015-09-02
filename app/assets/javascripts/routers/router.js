Mark.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  index: function() {
    var indexView = new Backbone.Views.IndexView();
    this.swap(mainView);
  },

  swap: function(view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(view.render().$el);
  }
});
