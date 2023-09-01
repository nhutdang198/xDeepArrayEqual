**xDeepArrayEqual** recursively compares two nested arrays for deep equality. It does so by checking whether the two input arrays are deeply equal, meaning they have the same values in the same structure

## Installation

To use xDeepArrayEqual, you'll need to include the provided TypeScript file in your project.

1. Download the `xDeepArrayEqual.ts` file from this repository.
2. Add the file to your project directory.

## Usage

1. Import the `xDeepArrayEqual` class into your TypeScript code:

   ```typescript
   import { xDeepArrayEqual } from 'x-deep-array-equal'

   xDeepArrayEqual([1, [2, 3], 4], [1, [2, 3], 4])
   // true

2. Import the `xDeepArrayEqual` class into your Javascript code:

   ```javascript
   const { xDeepArrayEqual } = require("x-deep-array-equal")

   xDeepArrayEqual([1, [2, 3], 4], [1, [2, 4], 4])
   // false

## Support Me

If you find this project helpful or want to show your appreciation, you can support me by [buying me a coffee](https://www.buymeacoffee.com/nhutdm). Your support is greatly appreciated!

