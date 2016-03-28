const ScreenedEmail = Nilavu.Model.extend({
  actionName: function() {
    return I18n.t("admin.logs.screened_actions." + this.get('action'));
  }.property('action'),

  clearBlock: function() {
    return Nilavu.ajax('/admin/logs/screened_emails/' + this.get('id'), {method: 'DELETE'});
  }
});

ScreenedEmail.reopenClass({
  findAll: function() {
    return Nilavu.ajax("/admin/logs/screened_emails.json").then(function(screened_emails) {
      return screened_emails.map(function(b) {
        return ScreenedEmail.create(b);
      });
    });
  }
});

export default ScreenedEmail;
