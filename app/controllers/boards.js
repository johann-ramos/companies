import Ember from 'ember';
import groupBy from 'ember-group-by';

export default Ember.Controller.extend({
  boardsByOwner: groupBy('model', 'company_name')
});