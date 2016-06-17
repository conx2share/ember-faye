/*jshint node:true*/
'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    faye: {
      URL: null,
      options: {
      },
      logging: true,
      emberEvents: true,
      csrf: true,
      sessionToken: false,
      autoInit: true
    }
  };
};
