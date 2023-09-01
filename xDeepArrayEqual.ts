import { xDeepObjectEqual } from "x-deep-object-equal";

/**
 * Type representing an array containing either primitive values or nested arrays.
 */
type DeepArray = Array<any> | Array<DeepArray>;

/**
 * Recursively compares two nested arrays for deep equality.
 * 
 * @param {DeepArray} firstArray The first nested array to compare.
 * @param {DeepArray} secondArray The second nested array to compare.
 * @returns {boolean} Returns true if the arrays are deeply equal, false otherwise.
 */
export const xDeepArrayEqual: (firstArray: DeepArray, secondArray: DeepArray) => boolean = (firstArray, secondArray) => {
  if (firstArray === secondArray) {
    return true;
  }

  if (typeof firstArray === 'object' && typeof secondArray === 'object') {
    if (xDeepObjectEqual(firstArray, secondArray)) {
      return true;
    }
  }

  if (Array.isArray(firstArray) && Array.isArray(secondArray)) {
    if (firstArray.length !== secondArray.length) {
      return false;
    }
    for (let i = 0; i < firstArray.length; i++) {
      if (!xDeepArrayEqual(firstArray[i], secondArray[i])) {
        return false;
      }
    }
  }

  if (Array.isArray(firstArray) && Array.isArray(secondArray)) {
    return true;
  }

  return firstArray === secondArray
}