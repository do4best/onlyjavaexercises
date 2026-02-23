class Stack{
    constructor() {
        this.stack = [];
        this.maxSize = 200;
        this.top = -1;
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
    isEmpty() {
        return this.top === -1;
    }
    isFull() {
        return this.top === this.maxSize - 1;
    }
    peek() {
        return this.stack[this.top]
    }
}
function reverseIt(str) {
    let stack = new Stack()
    for (let i = 0; i < str.length; i++){
        stack.push(str[i])
    }
    let reverse = ""
    while (!stack.isEmpty()) {
        reverse += stack.pop()
    }
    return reverse;
}
console.log(reverseIt("This is Great"))
function againReverse(value) {
    let stack = "";
    for (let i=value.length - 1; i >= 0; i--) {
        stack += value[i]
    }
    return stack
}
console.log(againReverse("God is There"))