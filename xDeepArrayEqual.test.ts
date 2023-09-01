import { xDeepArrayEqual } from './xDeepArrayEqual';

describe('xDeepArrayEqual', () => {
  it('should return true for equal primitive arrays', () => {
    expect(xDeepArrayEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  it('should return true for equal nested arrays', () => {
    expect(xDeepArrayEqual([1, [2, 3], 4], [1, [2, 3], 4])).toBe(true);
  });

  it('should return false for different primitive arrays', () => {
    expect(xDeepArrayEqual([1, 2, 3], [1, 2, 4])).toBe(false);
  });

  it('should return false for different nested arrays', () => {
    expect(xDeepArrayEqual([1, [2, 3], 4], [1, [2, 4], 4])).toBe(false);
  });

  it('should return false for arrays with different lengths', () => {
    expect(xDeepArrayEqual([1, 2, 3], [1, 2])).toBe(false);
  });

  it('should return true for empty arrays', () => {
    expect(xDeepArrayEqual([], [])).toBe(true);
  });

  it('should return true for deeply equal arrays with various types', () => {
    const arr1 = [1, [2, 'hello'], { prop: 'value' }];
    const arr2 = [1, [2, 'hello'], { prop: 'value' }];
    expect(xDeepArrayEqual(arr1, arr2)).toBe(true);
  });

  it('should return false for arrays with different element types', () => {
    const arr1 = [1, [2, 'hello'], { prop: 'value' }];
    const arr2 = [1, [2, 'world'], { prop: 'value' }];
    expect(xDeepArrayEqual(arr1, arr2)).toBe(false);
  });
});