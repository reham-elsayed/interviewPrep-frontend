## 🚀 Debouncing

**Debouncing** is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function is debounced with a wait time of `X` milliseconds, it must wait until after `X` milliseconds have elapsed **since the last time** the debounced function was called before executing the callback.

You’ve almost certainly encountered debouncing in your daily life — for example:

> 🛗 **Elevator door behavior**  
> Only after **X milliseconds** of not pressing the "Door Open" button (i.e. the debounced function not being called), will the elevator door actually close (i.e. the callback function is executed).

---

### ✅ Behavior

- The function will only run **once**, after the last call and **only if no new calls happen** within the `wait` duration.
- If the debounced function is called again before the timeout finishes, the **previous call is cancelled**, and the timer restarts.

---

### 🛠️ Common Use Cases

- Live search / auto-complete
- Resize or scroll events
- Input field change handlers
- Button click limiting

### 🧠 Example Use Case

```js
const debouncedSearch = debounce(() => {
  console.log("Search triggered!");
}, 300);

// Called multiple times in quick succession:
debouncedSearch();
debouncedSearch();
debouncedSearch();
// Only one "Search triggered!" will log — 300ms after the last call
```
