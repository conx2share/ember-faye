import Ember from 'ember';

export const SessionTokenProtection = function(sessionToken) {
  return {
    outgoing(message, callback) {
      message.ext = message.ext || {};
      message.ext.sessionToken = sessionToken;
      callback(message);
    }
  };
};

export const CsrfProtection = {
  outgoing(message, callback) {
    message.ext = message.ext || {};
    message.ext.csrfToken = Ember.$('meta[name=csrf-token]').attr('content');
    callback(message);
  }
};

export const Logging = {
  incoming(message, callback) {
    console.debug('faye-in: ', message);
    callback(message);
  },
  outgoing(message, callback) {
    console.debug('faye-out: ', message);
    callback(message);
  }
};

export const EmberEvents = {
  incoming(message, callback) {
    if (message.data && message.data.eventName && message.data.data) {
      console.info('Got event!');
      let router = this._router;
      try {
        router.send(message.data.eventName, message.data.data);
      } catch (e) {
        let unhandled = e.message.match(/Nothing handled the event/);
        if (!unhandled) {
          throw e;
        }
      }
    }
    callback(message);
  }
};

export const Authentication = {
  outgoing(message, callback) {
    if (message.channel === '/meta/subscribe') {
      // Attach the signature and timestamp to subscription messages
      let subscription = this.subscriptions[message.subscription];
      if (!message.ext) {
        message.ext = {};
      }
      message.ext.cerebeloPushSignature = subscription.signature;
      message.ext.cerebeloPushTimestamp = subscription.timestamp;
    }
    callback(message);
  }
};

const fayeExtensions = {
  Authentication,
  CsrfProtection,
  Logging,
  EmberEvents
};

export default fayeExtensions;
