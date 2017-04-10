import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroyOwner(){
      this.get("model").destroyRecord().then(()=>{
        this.transitionToRoute('owners');
      });
    }
  }
});