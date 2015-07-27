import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['showReturned'],
  showReturned: false,
  possibleStates: ['borowed', 'returned'],
  filteredResults: Ember.computed('model.state',
    function() {

      if (this.get('showReturned')) {
        return this.model.filterBy('state');
      } else {
        return this.model.filterBy('state', 'borrowed');
      }
    }
  ),

  actions: {
    setShowAll() {
      this.toggleProperty('showReturned')
    }
  }
});
