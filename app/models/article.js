import DS from 'ember-data';
var attr = DS.attr
export default DS.Model.extend({
  createdAt: attr('date'),
  description: attr('string'),
  notes: attr('string'),
  state: attr('string', {
    defaultValue: 'borrowed'
  }),
  friend: DS.belongsTo('friend')
});
