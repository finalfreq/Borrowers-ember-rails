import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('articles/article-form', 'Integration | Component | articles/article form', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{articles/article-form}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#articles/article-form}}
      template block text
    {{/articles/article-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
