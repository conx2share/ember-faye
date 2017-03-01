/*jshint node:true*/
'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    faye: {
      URL: null,
      options: {
      },
      logging: false,
      emberEvents: true,
      csrf: true,
      authToken: true,
      autoInit: true
    }
  };
};
