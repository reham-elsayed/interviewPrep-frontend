
class Node{
  constructor(value){
    this.nodeValue= value;
    this.next=null
  }
}

class Stack {
    constructor(){
      this.head= null;
      this.size=0
      }
  
       push(item){
        const newNode = new Node(item)
        newNode.next= this.head
        this.head = newNode;
        return this.size+=1

       }
       pop(){
        if (!this.head) return
        const poppedNode = this.head.nodeValue
        this.head= this.head.next
        this.size-=1
        return poppedNode
       }
       isEmpty(){
        return this.size === 0
       }
       peek(){
return this.head.nodeValue
       }
  
       length(){
        return this.size
       }
  
  }


  const newStack = new Stack()

  newStack.push(50)
  newStack.push(40)
  newStack.push(30)
 console.log( newStack.push(20))
  console.log(newStack)
  console.log(newStack.pop())
  console.log(newStack)