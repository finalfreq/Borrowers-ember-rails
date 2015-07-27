import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('friends/article-form', 'Integration | Component | friends/article form', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{friends/article-form}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#friends/article-form}}
      template block text
    {{/friends/article-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
