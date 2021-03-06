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
    define(['ApiClient', 'model/CallSessionInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CallSessionInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.NokiaTasCallDirectionApi) {
      root.NokiaTasCallDirectionApi = {};
    }
    root.NokiaTasCallDirectionApi.ClickToCall = factory(root.NokiaTasCallDirectionApi.ApiClient, root.NokiaTasCallDirectionApi.CallSessionInformation);
  }
}(this, function(ApiClient, CallSessionInformation) {
  'use strict';




  /**
   * The ClickToCall model module.
   * @module model/ClickToCall
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ClickToCall</code>.
   * @alias module:model/ClickToCall
   * @class
   * @param callSessionInformation {module:model/CallSessionInformation} 
   */
  var exports = function(callSessionInformation) {
    var _this = this;

    _this['callSessionInformation'] = callSessionInformation;
  };

  /**
   * Constructs a <code>ClickToCall</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClickToCall} obj Optional instance to populate.
   * @return {module:model/ClickToCall} The populated <code>ClickToCall</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('callSessionInformation')) {
        obj['callSessionInformation'] = CallSessionInformation.constructFromObject(data['callSessionInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CallSessionInformation} callSessionInformation
   */
  exports.prototype['callSessionInformation'] = undefined;



  return exports;
}));


