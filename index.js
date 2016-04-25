/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-faye',

  included: function (app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/faye-browser/faye-browser.js');
  }
};
