import DS from 'ember-data';

export default DS.Model.extend({
  owner_id: DS.attr('number'),
  company_id: DS.attr('number'),
  company_name: DS.attr('string'),
  owner_name: DS.attr('string')
});
