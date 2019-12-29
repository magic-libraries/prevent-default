## @magic-libraries/prevent-default

an effect that calls event.preventDefault for any event.

this library gets imported into @magic apps automagically.

[html-docs](https://magic-libraries.github.io/prevent-default)

[@magic](https://magic.github.io/core)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-libraries/preventDefault.svg
[npm-url]: https://www.npmjs.com/package/@magic-libraries/preventDefault
[travis-image]: https://img.shields.io/travis/com/magic-libraries/preventDefault/master
[travis-url]: https://travis-ci.com/magic-libraries/preventDefault
[appveyor-image]: https://img.shields.io/appveyor/ci/magiclibraries/preventDefault/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magiclibraries/preventDefault/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-libraries/preventDefault/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-libraries/preventDefault
[greenkeeper-image]: https://badges.greenkeeper.io/magic-libraries/preventDefault.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-libraries/preventDefault.svg
[snyk-image]: https://snyk.io/test/github/magic-libraries/preventDefault/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-libraries/preventDefault

* [usage](#usage)

#### <a name="usage"></a>usage
in a page/component, just use the lib.< functions'),

```javascript
a({ to: '/somewhere', onclick: [actions.component.click, lib.preventDefault] })

form({ name: 'form-name', onsubmit: [actions.form.submit, lib.preventDefault] })
```

#### changelog

##### 0.0.1
first commit

##### 0.0.2 - unreleased
...
