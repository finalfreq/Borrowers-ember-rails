import Ember from 'ember';
  var computed = Ember.computed;
export default Ember.Controller.extend({
  hasEmail: computed.notEmpty('model.email'),
  hasFirstName: computed.notEmpty('model.firstName'),
  hasLastName: computed.notEmpty('model.lastName'),
  hasTwitter: computed.notEmpty('model.twitter'),
  isValid: computed.and(
    'hasEmail',
    'hasFirstName',
    'hasLastName',
    'hasTwitter'
  ),
  actions: {
    save() {
      if (this.get('isValid')) {
        this.get('model').save().then((friend) => {
          this.transitionToRoute('friends.show', friend);
        });
      } else {
        this.set('errorMessage', 'you have to fill all the fields');
      }

      return false;
    },
    cancel() {
      return true;
    }
  }
});
