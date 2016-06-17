/*jshint node:true*/
module.exports = {
  description: 'Installs bower package for Faye',

  normalizeEntityName: function() {},

  afterInstall: function(/* options */) {
    return this.addBowerPackageToProject('faye-browser');
  }
};
