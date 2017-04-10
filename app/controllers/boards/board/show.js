import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroyBoard(){
      this.get("model").destroyRecord().then(()=>{
        this.transitionToRoute('boards');
      });
    }
  }
});