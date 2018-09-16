/** @format */

/**
 * @param {Class} The wrapper class where the static methods would be copied to.
 * @param {Class} The wrapped class whoes static methods should be copied from.
 * @param {Array} Array of strings of static methods that should not be copied.
 */
export default function redefineStatics (WrapperClass, WrappedClass, blockList) {
  const staticKeys = Object.getOwnPropertyNames(WrappedClass);

  for (let a = 0; a < staticKeys.length; a++) {
    if (
      (!blockList || !blockList.includes(staticKeys[a])) &&
      WrapperClass[staticKeys[a]] === undefined
    ) {
      WrapperClass[staticKeys[a]] = WrappedClass[staticKeys[a]];
    }
  }

  return WrapperClass;
}
