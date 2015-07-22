import Ember from 'ember';
  var computed = Ember.computed;
export default Ember.Controller.extend({
  isValid: computed(
    'model.email',
    'model.firstName',
    'model.lastName',
    'model.twitter',
    function() {
      return !Ember.isEmpty(this.get('model.email')) &&
        !Ember.isEmpty(this.get('model.firstName')) &&
        !Ember.isEmpty(this.get('model.lastName')) &&
        !Ember.isEmpty(this.get('model.twitter'));
    }
  ),
  actions: {
    save: function() {
      if (this.get('isValid')) {
        var _this = this;
        this.get('model').save().then(function(friend) {
          _this.transitionToRoute('friends.show', friend);
        });
      } else {
        this.set('errorMessage', 'you have to fill all the fields');
      }

      return false;
    },
    cancel: function() {
      this.transitionToRoute('friends');

      return false;
    }
  }
});
