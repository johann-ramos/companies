import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroyCompany(){
      this.get("model").destroyRecord().then(()=>{
        this.transitionToRoute('companies');
      });
    }
  }
});