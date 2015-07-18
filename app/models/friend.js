import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),
  twitter: attr('string'),
  totalArticles: attr('number')
});
