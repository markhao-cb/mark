Mark.Views.IndexView = Backbone.CompositeView.extend({
  template: JST.index,

  initialize: function() {
    this.addInfoView();
    this.addProjectsView();
    this.addContactView();
  },

  addInfoView: function() {
    var infoView = new Mark.Views.InfoView();
    this.addSubview('#one', infoView);
  },

  addProjectsView: function() {
    var projectView = new Mark.Views.ProjectView();
    this.addSubview('#two', projectView);
  },

  addContactView: function() {
    var contactView = new Mark.Views.ContactView();
    this.addSubview('#three', contactView);
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
