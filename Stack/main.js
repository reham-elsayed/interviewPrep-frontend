class Node{
  constructor(value){
this.nodeValue = value
this.next = null
  }
}

class Stack {
    constructor(){
       this.head = null
       this.size= 0
      }
  
       push(item){
const newNode = new Node(item)
newNode.next = this.head
this.head = newNode
const newSize= this.size+=1
     return newSize
       }
       pop(){
      
  const deletedHead = this.head
  this.head = this.head.next
  this.size--
  return  deletedHead.nodeValue
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
  newStack.push(20)
  newStack.pop()
  console.log(newStack)