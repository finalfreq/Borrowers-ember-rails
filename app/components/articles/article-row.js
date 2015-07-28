import Ember from 'ember';

export default Ember.Component.extend({
  setObserver: function() {
    this.addObserver('article.state', this, this.stateChanged);
  }.on('init'),
    stateChanged() {
    console.log('omg expensive operation because aticle state chagned');
  },
  tagName: 'tr',
  article: null, // passed-in
  articleStates: null, // passed-in
  actions: {
    saveArticle() {
      let article = this.get('article');

      if (article.get('hasDirtyAttributes')) {
        this.sendAction('save', article);
      }
    }
  }
});
