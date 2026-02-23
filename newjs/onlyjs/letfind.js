class Stack{
    constructor() {
        this.top = -1;
        this.stack = []
        this.maxSize = 100;

    }
    isFull() {
        return this.top === this.maxSize - 1;
    }
    isEmpty() {
        return this.top === -1
    }
    peek() {
        return this.stack[this.top]
    }
    push(value) {
        if (this.isFull()) {
            return false;
        }
        this.top++;
        this.stack[this.top] = value;
        return true;
    }
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        this.top--;
        return this.stack.pop()
    }
}
function reverString(str) {
    let stack = new Stack()
    for (let i = 0; i < str.length; i++){
        stack.push(str[i])
    }
    let reverseIt = "";
    while (!stack.isEmpty()) {
        reverseIt += stack.pop()
    }
    return reverseIt;
}
let result = reverString("God is One")
console.log(result)
document.getElementById("demo").innerHTML = result.toString()