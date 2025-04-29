class Node{
    constructor(value){
        this.value= value;
        this.next=null
    }
}


class Stack{
    constructor(){
       this.head= null
        this.size=0
    }

     push(item){
      const node = new Node(item)
      node.next = this.head
      this.head = node
      this.size++
        
     }
     pop(){
        if (!this.head) return null
        const removed = this.head;
this.head = this.head.next;
this.size--
return removed.value

     }
     isEmpty(){
        return this.size === 0
     }
     peek(){
        if (this.head)
            return this.head.value
     }

     length(){
        return this.size
     }

}
console.log('stack here')
const first = new Stack()

first.push(50)

first.push(40)
first.push(8)
first.push(77)
first.push(100)
console.log(first)
console.log(first.pop())
console.log(first)


