import DS from 'ember-data';

var attr = DS.attr;
var computed = Ember.computed
export default DS.Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),
  twitter: attr('string'),
  totalArticles: attr('number'),
  articles: DS.hasMany('article')
  fullName: computed('firstName', 'lastName', function() {
    return this.get('firstName') + " " + this.get('lastName');
  })
});
