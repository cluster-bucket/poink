(function(factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else {
    factory(jQuery);
  }
})(function($) {
  var observer, opts;
  opts = {};
  observer = new MutationObserver(function(mutations) {
    var element, mutation, nodesAdded, _i, _len;
    nodesAdded = false;
    for (_i = 0, _len = mutations.length; _i < _len; _i++) {
      mutation = mutations[_i];
      if (mutation.addedNodes) {
        nodesAdded = true;
        break;
      }
    }
    if (nodesAdded) {
      element = $(opts.selector);
      if (element && element.length > 0) {
        observer.disconnect();
        opts.callback(element.get(0));
      }
    }
  });
  $.fn.poink = function(options) {
    opts = $.extend({}, $.fn.poink.defaults, options);
    observer.disconnect();
    return this.each(function() {
      observer.observe(this, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
      });
    });
  };
  $.fn.poink.defaults = {
    selector: 'body',
    callback: function(node) {}
  };
});

