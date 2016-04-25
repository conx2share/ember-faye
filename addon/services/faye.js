import Ember from 'ember';

export default Ember.Service.extend({
  client: null,

  init () {
    Ember.Logger.debug('Initializing Ember Faye service...');
    this._super(...arguments);
    const config = Ember.getOwner(this).resolveRegistration('config:environment').faye;
    this.set('client', new Faye.Client(config.URL, config.options));
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

    return subscription;
  }
});
