
📦 Stack (Data Structure)
A stack is a linear data structure that follows the LIFO (Last In, First Out) principle — the last item added is the first one removed.

🔧 Use Cases in JavaScript (Frontend)
🔄 Undo/Redo functionality
Useful in text editors, drawing apps, or form change history.

🌐 Navigation history
For example, managing browser back/forward navigation or SPA route history.

🧭 Recursive operations
Like traversing nested menus, UI trees, or DOM nodes.

🧠 Component state history
Store previous UI states in custom React hooks.

➗ Expression parsing
Evaluating or validating mathematical input or code expressions.

🔁 Array vs Linked List for Stack in JavaScript

Feature	               Array ([])	                   Linked List
Time Complexity	    O(1) for push() / pop()	        O(1) if implemented well
Memory Usage	    May use extra space (resizing)	Efficient memory usage
Ease of Use	        ✅Simple and built-in	       ❌ More complex setup
Real-world Usage	✅ Common in JS apps	           Mostly in low-level or academic use


## Solution with javaScript array ##



class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item); // O(1)
    return this.items.length;
  }

  pop() {
    return this.items.pop(); // O(1)
  }

  peek() {
    return this.items[this.items.length - 1]; // O(1)
  }

  isEmpty() {
    return this.items.length === 0; // O(1)
  }

  length() {
    return this.items.length; // O(1)
  }
}
