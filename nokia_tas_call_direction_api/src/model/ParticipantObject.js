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
    root.NokiaTasCallDirectionApi.ParticipantObject = factory(root.NokiaTasCallDirectionApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ParticipantObject model module.
   * @module model/ParticipantObject
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ParticipantObject</code>.
   * @alias module:model/ParticipantObject
   * @class
   * @param participantAddress {String} 
   */
  var exports = function(participantAddress) {
    var _this = this;

    _this['participantAddress'] = participantAddress;
  };

  /**
   * Constructs a <code>ParticipantObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ParticipantObject} obj Optional instance to populate.
   * @return {module:model/ParticipantObject} The populated <code>ParticipantObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('participantAddress')) {
        obj['participantAddress'] = ApiClient.convertToType(data['participantAddress'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} participantAddress
   */
  exports.prototype['participantAddress'] = undefined;



  return exports;
}));


