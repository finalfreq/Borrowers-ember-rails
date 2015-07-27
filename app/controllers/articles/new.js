import Ember from 'ember';

export default Ember.Controller.extend({
  hasDescription: Ember.computed.notEmpty('model.description'),
  hasNotes: Ember.computed.notEmpty('model.notes'),
  isValid: Ember.computed.and(
    'hasDescription',
    'hasNotes'
  ),
  actions: {
    save() {
      if (this.get('isValid')) {
        return true
      } else {
        this.set('errorMessage', "You didn't fill out all forms");
      }
    }
  }
});