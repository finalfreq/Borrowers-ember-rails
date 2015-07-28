import { moduleForModel, test } from 'ember-qunit';

moduleForModel('article', 'Unit | Model | article', {
  // Specify the other units that are required for this test.
  needs: ['model:friend']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('it has a relationship to a friend', function(assert){
  var klass = this.subject({}).constructor;


  var relationship = Ember.get(klass, 'relationshipsByName').get('friend');

  assert.equal(relationship.key, 'friend');
  assert.equal(relationship.kind, 'belongsTo');
});
