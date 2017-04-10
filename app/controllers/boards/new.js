import Ember from 'ember';

export default Ember.Controller.extend({
  companies: function(){
      return this.store.findAll('company');
  }.property(),
  owners: function(){
    return this.store.findAll('owner');
  }.property(),
  actions: {
    setCompany(value/*, event */) {
      this.set("company", value);
    },
    setOwner(value/*, event */) {
      this.set("owner", value);
    },
    save(){
      let model = this.store.createRecord('board', {
        owner_id: this.get('owner'),
        company_id: this.get('company')
      });
      model.save().then(()=>{
        this.transitionToRoute('boards.board.show', model);
      });
    }
  }
});