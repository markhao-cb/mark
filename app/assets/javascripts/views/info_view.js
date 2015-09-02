Mark.Views.InfoView = Backbone.View.extend({
  template: JST.info,

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
