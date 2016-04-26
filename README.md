# Ember-Faye

Ember Faye is an [`ember-cli`][] addon that seamlessly integrates [Faye][] realtime messaging into [Ember][] application.

* NPM: [ember-faye][npm]
* Github: [ember-faye][github]
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

© [Alex Semyonov][], [@alsemyonov][], <[alex@semyonov.us][]>, 2016.

[Ember]: http://emberjs.com/
[`ember-cli`]: http://ember-cli.com/
[Faye]: http://faye.jcoglan.com/

[npm]: https://www.npmjs.com/package/ember-faye
[github]: https://github.com/alsemyonov/ember-faye
[emberobserver]: https://emberobserver.com/addons/ember-faye
[emberaddons]: https://www.emberaddons.com/?query=ember-faye

[Alex Semyonov]: https://al.semyonov.us/
[@alsemyonov]: https://github.com/alsemyonov
[alex@semyonov.us]: mailto:alex@semyonov.us
