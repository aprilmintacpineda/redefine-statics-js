'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = redefineStatics;
/** @format */

// built-in statics shouldn't be copied over
var builtInStatics = ['name', 'length', 'prototype', 'caller', 'callee', 'arguments', 'arity'];

/**
 * @param {Class} The wrapper class where the static methods would be copied to.
 * @param {Class} The wrapped class whoes static methods should be copied from.
 * @param {Array} Array of strings of static methods that should not be copied.
 */
function redefineStatics(WrapperClass, WrappedClass, blockList) {
  var staticKeys = Object.getOwnPropertyNames(WrappedClass);

  for (var a = 0; a < staticKeys.length; a++) {
    if (!builtInStatics.includes(staticKeys[a]) && (!blockList || !blockList.includes(staticKeys[a])) && WrapperClass[staticKeys[a]] === undefined) {
      WrapperClass[staticKeys[a]] = WrappedClass[staticKeys[a]];
    }
  }
}