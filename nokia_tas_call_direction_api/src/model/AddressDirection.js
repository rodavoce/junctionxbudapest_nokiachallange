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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NokiaTasCallDirectionApi) {
      root.NokiaTasCallDirectionApi = {};
    }
    root.NokiaTasCallDirectionApi.AddressDirection = factory(root.NokiaTasCallDirectionApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class AddressDirection.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "Called"
     * @const
     */
    "Called": "Called",
    /**
     * value: "Calling"
     * @const
     */
    "Calling": "Calling"  };

  /**
   * Returns a <code>AddressDirection</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/AddressDirection} The enum <code>AddressDirection</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


