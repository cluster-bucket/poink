Poink
=====

Poink is a jQuery plugin which fires a callback when an element is added to
the DOM. It uses the [MutationObserver][mdn] so YMMV.

Installation
------------

Poink depends on jQuery, so that must be available. The only file that is
required for use in your project is jquery.poink.js. There are a few options
for obtaining this file:

* Install it with Bower: `bower install poink`
* [Download it directly][download]

Usage
-----

```javascript
$('#scopingElement').poink({
  selector: ".foo",
  callback: function(element) {
    $(element).text("ohai!");
  }
});
```

* `$('#scopingElement')` is the item that will be checked for the new element
* `selector` is a regular jQuery selector to look for beneath the scopingElement
* `callback` is the function to call when the selector is found

Versioning
----------

Poink is maintained under the [Semantic Versioning guidelines][semver].
Releases will be numbered with the following format:

> Given a version number MAJOR.MINOR.PATCH, increment the:
>
> 1. MAJOR version when you make incompatible API changes,
> 2. MINOR version when you add functionality in a backwards-compatible manner, and
> 3. PATCH version when you make backwards-compatible bug fixes.

Contributors
------------

* [Dustin Boston][dblogit]

License
-------

Poink is free software. See the LICENSE file for more information.

[dblogit]: http://dblogit.com
[download]: https://github.com/dustinboston/poink/releases
[mdn]: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
[semver]: http://semver.org/
