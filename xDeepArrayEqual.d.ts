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
declare function xDeepArrayEqual(firstArray: DeepArray, secondArray: DeepArray): boolean;

export = xDeepArrayEqual;
