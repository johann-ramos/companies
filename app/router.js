import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  // rootURL: config.rootURL
});

Router.map(function() {
  this.route('owners', function() {
    this.route('owner', { path: ':owner_id'}, function(){
      this.route('show');
      this.route('edit');
    });
    this.route('new');
  });

  this.route('companies', function() {
    this.route('company', { path: ':company_id'}, function(){
      this.route('show');
      this.route('edit');
    });
    this.route('new');
  });

  this.route('boards', function() {
    this.route('board', { path: ':board_id'}, function(){
      this.route('show');
    });
    this.route('new');
  });
});

export default Router;
