import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  article: null,

  actions: {

    saveArticle() {
      let article = this.get('article');
      this.sendAction('save', article);
    },

    cancelArticle() {
      let article = this.get('article');
      this.sendAction('cancel', article);
    }
  }

});
