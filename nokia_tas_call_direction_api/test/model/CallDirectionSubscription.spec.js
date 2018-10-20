/**
 * Nokia TAS Call Direction API
 * The first version of the Nokia TAS Call Direction API is an exciting step forward towards making it easier for developers to have open access to their operator's network.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: openapi.support@nokia.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NokiaTasCallDirectionApi);
  }
}(this, function(expect, NokiaTasCallDirectionApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NokiaTasCallDirectionApi.CallDirectionSubscription();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CallDirectionSubscription', function() {
    it('should create an instance of CallDirectionSubscription', function() {
      // uncomment below and update the code to test CallDirectionSubscription
      //var instane = new NokiaTasCallDirectionApi.CallDirectionSubscription();
      //expect(instance).to.be.a(NokiaTasCallDirectionApi.CallDirectionSubscription);
    });

    it('should have the property callbackReference (base name: "callbackReference")', function() {
      // uncomment below and update the code to test the property callbackReference
      //var instane = new NokiaTasCallDirectionApi.CallDirectionSubscription();
      //expect(instance).to.be();
    });

    it('should have the property filter (base name: "filter")', function() {
      // uncomment below and update the code to test the property filter
      //var instane = new NokiaTasCallDirectionApi.CallDirectionSubscription();
      //expect(instance).to.be();
    });

    it('should have the property clientCorrelator (base name: "clientCorrelator")', function() {
      // uncomment below and update the code to test the property clientCorrelator
      //var instane = new NokiaTasCallDirectionApi.CallDirectionSubscription();
      //expect(instance).to.be();
    });

  });

}));
