(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.TeslaListenConsent = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const REQUIRED = Object.freeze(['privacy', 'limitations', 'safety']);

  function canStart(values) {
    if (!values || typeof values !== 'object') return false;
    return REQUIRED.every(key => values[key] === true);
  }

  return Object.freeze({ REQUIRED, canStart });
});
