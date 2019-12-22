"use strict";

var _webrain = require("webrain");

/* eslint-disable no-new-func */
(0, _webrain.it)('isBrowser', function () {
  // see: https://stackoverflow.com/a/31090240/5221762
  var isBrowser = new Function('try {return this===window;}catch(e){ return false;}'); // console.log(`isBrowser = ${isBrowser()};`)

  _webrain.assert.strictEqual(isBrowser(), true);
});