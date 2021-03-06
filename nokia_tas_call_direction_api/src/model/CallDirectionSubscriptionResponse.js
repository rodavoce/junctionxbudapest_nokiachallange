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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CallDirectionSubscriptionResponseCallDirectionSubscription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CallDirectionSubscriptionResponseCallDirectionSubscription'));
  } else {
    // Browser globals (root is window)
    if (!root.NokiaTasCallDirectionApi) {
      root.NokiaTasCallDirectionApi = {};
    }
    root.NokiaTasCallDirectionApi.CallDirectionSubscriptionResponse = factory(root.NokiaTasCallDirectionApi.ApiClient, root.NokiaTasCallDirectionApi.CallDirectionSubscriptionResponseCallDirectionSubscription);
  }
}(this, function(ApiClient, CallDirectionSubscriptionResponseCallDirectionSubscription) {
  'use strict';




  /**
   * The CallDirectionSubscriptionResponse model module.
   * @module model/CallDirectionSubscriptionResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CallDirectionSubscriptionResponse</code>.
   * @alias module:model/CallDirectionSubscriptionResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CallDirectionSubscriptionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CallDirectionSubscriptionResponse} obj Optional instance to populate.
   * @return {module:model/CallDirectionSubscriptionResponse} The populated <code>CallDirectionSubscriptionResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('callDirectionSubscription')) {
        obj['callDirectionSubscription'] = CallDirectionSubscriptionResponseCallDirectionSubscription.constructFromObject(data['callDirectionSubscription']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CallDirectionSubscriptionResponseCallDirectionSubscription} callDirectionSubscription
   */
  exports.prototype['callDirectionSubscription'] = undefined;



  return exports;
}));


