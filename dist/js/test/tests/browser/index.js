"use strict";

var _webrain = require("webrain");

(0, _webrain.describe)('browser > main > index', function () {
  (0, _webrain.it)('base', function () {
    _webrain.assert.ok(_webrain.ObservableClass);
  });
});