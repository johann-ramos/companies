import Ember from 'ember';

export default Ember.Controller.extend({
  newCompany: {},
  actions: {
    save(){
      let model = this.store.createRecord('company', this.get("newCompany"));
      this.set("newCompany", {});
      model.save().then(()=>{
        this.transitionToRoute('companies.company.show', model);
      });
    }
  }
});