# Ember-Faye

Ember Faye is an [`ember-cli`][] addon that seamlessly integrates [Faye][] realtime messaging into [Ember][] application.

* NPM: [![npm](https://img.shields.io/npm/v/ember-faye.svg?maxAge=2592000)][npm]
* Github: [![GitHub commits](https://img.shields.io/github/issues/alsemyonov/ember-faye.svg?maxAge=2592000)][github]
* Code quality: [![Code Climate](https://codeclimate.com/github/alsemyonov/ember-faye/badges/gpa.svg)][codeclimate]
* CI: [![Build Status](https://img.shields.io/travis/alsemyonov/ember-faye.svg?maxAge=2592000)][travis-ci] 
* Ember Addons: [ember-faye][emberaddons]
* Ember Observer: [ember-faye][emberobserver]

## Installation

Install as usual `ember-cli` addon:

``` bash
ember install ember-faye
```

Configure it in `config/environment.js`:

``` javascript
module.exports = function(environment) {
  var ENV = {
    /// ...
    faye: {
      URL: 'http://127.0.0.1:3000/faye',
      options: {
        timeout: 5
      }
    }
    /// ...
  };

  return ENV;
};
```

In another service (or controller) you could subscribe to `faye` channels like this:

``` javascript
// app/service/messenger.js
import Ember from 'ember';

export default Ember.Service.extend({
  faye: Ember.inject.service(),

  init() {
    this._super(...arguments);
    this.setup();
  },

  setup() {
    let faye = this.get('faye');
    let subscription = faye.subscribe('/some/channel', this.get('onMessage'), this);
    return subscription;
  },

  onMessage(data, channel) {
    console.debug(`Received message on channel "${channel}":`, data);
  }
});

```

## Running

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using `ember-cli`, visit [`ember-cli`][].

© [Alex Semyonov][], [@alsemyonov][], <[alex@semyonov.us][]>, 2016, [![MIT license](https://img.shields.io/github/license/alsemyonov/ember-faye.svg?maxAge=2592000)][MIT License].

[Ember]: http://emberjs.com/
[`ember-cli`]: http://ember-cli.com/
[Faye]: http://faye.jcoglan.com/
[MIT License]: http://choosealicense.com/licenses/mit/

[npm]: https://www.npmjs.com/package/ember-faye
[github]: https://github.com/alsemyonov/ember-faye
[emberobserver]: https://emberobserver.com/addons/ember-faye
[emberaddons]: https://www.emberaddons.com/?query=ember-faye
[codeclimate]: https://codeclimate.com/github/alsemyonov/ember-faye
[travis-ci]: https://travis-ci.com/alsemyonov/ember-faye

[Alex Semyonov]: https://al.semyonov.us/
[@alsemyonov]: https://github.com/alsemyonov
[alex@semyonov.us]: mailto:alex@semyonov.us
