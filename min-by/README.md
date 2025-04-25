# minBy

A utility function to find the element in an array that has the minimum computed value using a provided iteratee (callback function).

## 📌 Challenge

**Implement a function `minBy(array, iteratee)`** that finds the element in the array for which the result of calling the `iteratee` is the smallest.

### ✅ Arguments
- `array (Array)`: The array to iterate over.
- `iteratee (Function)`: A function invoked per element in the array. It accepts one argument — the current item — and returns the value to be compared.

### 🔁 Returns
- `(*)`: Returns the element from the array that yields the smallest result when passed through the `iteratee`. If no valid values are found, returns `undefined`.

---

## 💡 How It Works

```js
export default function minBy(array, iteratee) {
  let minValue;      // Will hold the item with the smallest result from iteratee
  let minNum;        // Will hold the smallest value returned by the iteratee

  for (const item of array) {
    const value = iteratee(item);  // Compute the value to compare

    // Skip invalid (null or undefined) results
    if (value !== undefined && value !== null) {
      // If this is the first valid value or it's smaller than the current minimum
      if (minNum === undefined || value < minNum) {
        minNum = value;
        minValue = item;
      }
    }
  }

  return minValue;
}
✅ Example Usage
js
Copy
Edit
minBy([{ n: 1 }, { n: 2 }], o => o.n);
// ➞ { n: 1 }

minBy([{ n: 1 }, { n: 2, m: 3 }, { m: 4 }], o => o.m);
// ➞ { n: 2, m: 3 }

minBy([{ n: 1 }, { n: 2 }], o => o.m);
// ➞ undefined (none of the items have "m")
🧠 Why Handle undefined and null?
Some items may not return a meaningful value from the iteratee (e.g., missing properties). To avoid invalid comparisons (e.g., undefined < 3), we skip these entries to ensure safe and correct behavior.

🧪 Test Examples
js
Copy
Edit
describe('minBy', () => {
  test('returns the item with the smallest value by iteratee', () => {
    expect(minBy([{ n: 5 }, { n: 1 }, { n: 7 }], o => o.n)).toEqual({ n: 1 });
  });

  test('ignores items with undefined iteratee values', () => {
    expect(minBy([{ n: 2 }, { m: 1 }], o => o.m)).toEqual({ m: 1 });
  });

  test('returns undefined if all iteratee results are invalid', () => {
    expect(minBy([{ n: 1 }, { n: 2 }], o => o.m)).toBeUndefined();
  });
});
🛠️ When to Use This
Use minBy when:

You have a list of complex objects.

You want to find the "smallest" item based on a calculated or derived value.

Similar to lodash.minBy, but implemented in plain JavaScript.

