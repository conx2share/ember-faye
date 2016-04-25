import Ember from 'ember';

export default Ember.Service.extend({
  client: null,
  subscriptions: {},

  init () {
    Ember.Logger.debug('Initializing Ember Faye service...');
    this._super(...arguments);
    const config = Ember.getOwner(this).resolveRegistration('config:environment').faye;
    let client = new Faye.Client(config.URL, config.options);
    if (config.disable) {
      Ember.forEach(config.disable, function(transport) {
        client.disable(transport);
      });
    }
    this.set('client', client);
  },

  subscribe(channel, callback, binding) {
    if (!binding) {
      binding = this;
    }

    let bindCallback = callback.bind(binding);

    console.debug(`Subscribing to ${channel}...`);
    let subscription = this.get('client').subscribe(
      channel,
      (message) => {
        bindCallback(message, channel);
      }
    ).then(() => {
      console.debug(`Subscribed to ${channel}.`);
    });

    let subscriptions = this.get('subscriptions');
    if (!subscriptions[channel]) {
      subscriptions[channel] = [];
    }
    subscriptions[channel].push(subscription);
    this.set('subscriptions', subscriptions);

    return subscription;
  }
});
