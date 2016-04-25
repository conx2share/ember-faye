import Ember from 'ember';

export default Ember.Service.extend({
  client: null,

  init () {
    this._super(...arguments);
    this.set('client', new Faye.Client(ENV.faye.URL, ENV.faye.options));
  },

  subscribe(channel, callback, binding) {
    if (!binding) {
      binding = this;
    }

    let bindCallback = callback.bind(binding);

    console.debug(`Subscribing to ${channel}...`);
    let subscription = this.get('client').subscribe(
      channel,
      (message) => { bindCallback(message, channel); }
    ).then(() => { console.debug(`Subscribed to ${channel}.`); });

    return subscription;
  }
});
