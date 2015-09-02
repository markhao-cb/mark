Mark.Views.ProjectView = Backbone.CompositeView.extend({
  template: JST.project,

  initialize: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
