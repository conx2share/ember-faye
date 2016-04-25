/*jshint node:true*/
module.exports = {
  description: 'Installs bower package for Faye',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(/* options */) {
    return this.addBowerPackageToProject('faye-browser');
  }
};
