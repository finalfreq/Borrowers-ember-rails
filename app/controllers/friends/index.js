import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sortBy', 'sortAscending'],
  sortAscending: true,
  sortBy: 'firstName',
  actions: {
    setSortBy: function(fieldName) {
      this.set('sortBy', fieldName);
      this.toggleProperty('sortAscending');

      console.log('sorting by', fieldName)
      console.log('sorting Asc?', this.get('sortAscending'));

      return false;
    }
  }
});
