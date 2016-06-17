import Ember from 'ember';
import FayeInitializer from 'dummy/initializers/faye';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | faye', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  FayeInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
