"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xDeepArrayEqual = void 0;
var x_deep_object_equal_1 = require("x-deep-object-equal");
/**
 * Recursively compares two nested arrays for deep equality.
 *
 * @param {DeepArray} firstArray The first nested array to compare.
 * @param {DeepArray} secondArray The second nested array to compare.
 * @returns {boolean} Returns true if the arrays are deeply equal, false otherwise.
 */
var xDeepArrayEqual = function (firstArray, secondArray) {
    if (firstArray === secondArray) {
        return true;
    }
    if (typeof firstArray === 'object' && typeof secondArray === 'object') {
        if ((0, x_deep_object_equal_1.xDeepObjectEqual)(firstArray, secondArray)) {
            return true;
        }
    }
    if (Array.isArray(firstArray) && Array.isArray(secondArray)) {
        if (firstArray.length !== secondArray.length) {
            return false;
        }
        for (var i = 0; i < firstArray.length; i++) {
            if (!(0, exports.xDeepArrayEqual)(firstArray[i], secondArray[i])) {
                return false;
            }
        }
    }
    if (Array.isArray(firstArray) && Array.isArray(secondArray)) {
        return true;
    }
    return firstArray === secondArray;
};
exports.xDeepArrayEqual = xDeepArrayEqual;
