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
    define(['ApiClient', 'model/Address', 'model/AddressDirection', 'model/CallEvents'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./AddressDirection'), require('./CallEvents'));
  } else {
    // Browser globals (root is window)
    if (!root.NokiaTasCallDirectionApi) {
      root.NokiaTasCallDirectionApi = {};
    }
    root.NokiaTasCallDirectionApi.CallEventFilter = factory(root.NokiaTasCallDirectionApi.ApiClient, root.NokiaTasCallDirectionApi.Address, root.NokiaTasCallDirectionApi.AddressDirection, root.NokiaTasCallDirectionApi.CallEvents);
  }
}(this, function(ApiClient, Address, AddressDirection, CallEvents) {
  'use strict';




  /**
   * The CallEventFilter model module.
   * @module model/CallEventFilter
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CallEventFilter</code>.
   * @alias module:model/CallEventFilter
   * @class
   * @param address {module:model/Address} 
   */
  var exports = function(address) {
    var _this = this;

    _this['address'] = address;


  };

  /**
   * Constructs a <code>CallEventFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CallEventFilter} obj Optional instance to populate.
   * @return {module:model/CallEventFilter} The populated <code>CallEventFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address')) {
        obj['address'] = Address.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('criteria')) {
        obj['criteria'] = CallEvents.constructFromObject(data['criteria']);
      }
      if (data.hasOwnProperty('addressDirection')) {
        obj['addressDirection'] = AddressDirection.constructFromObject(data['addressDirection']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Address} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {module:model/CallEvents} criteria
   */
  exports.prototype['criteria'] = undefined;
  /**
   * @member {module:model/AddressDirection} addressDirection
   */
  exports.prototype['addressDirection'] = undefined;



  return exports;
}));


