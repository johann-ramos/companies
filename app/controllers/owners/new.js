import Ember from 'ember';

export default Ember.Controller.extend({
  newOwner: {},
  actions: {
    save(){
      let model = this.store.createRecord('owner', this.get("newOwner"));
      this.set("newOwner", {});
      model.save().then(()=>{
        this.transitionToRoute('owners.owner.show', model);
      });
    }
  }
});