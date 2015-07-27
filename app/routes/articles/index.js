import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    showReturned: {
      refreshModel: true
    }
  },
  model() {
    let articles = this.modelFor('friends/show').get('articles');
    debugger;
    if (articles.get('isFulfilled')) {
      articles.reload();
    }

    return articles
  },


  actions: {
    save(model) {
      model.save();
      return false;
    }
  }
});
