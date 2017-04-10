import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(){
      this.get("model").save().then(()=>{
        this.transitionToRoute('owners.owner.show', this.get("model"));
      });
    }
  }
});