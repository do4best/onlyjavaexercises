class Queue{
    constructor() {
        this.queue = [];
        this.head = 0;
        this.tail = 0;
        this.maxSize=100
    }
    getLength() {
        return this.tail - this.head;
    }
    isEmpty() {
        return this.getLength() === 0;
    }
    isFull() {
        return this.getLength() === this.maxSize;
    }
    enqueue(value) {
        if (this.isFull()) {
            return false;
        }
        this.queue[this.tail] = value;
        this.tail++;
        return true;
    }
    dequeue() { 
        const item = this.queue[this.head];
        this.head++;
        return item;
    }
    peek() {
        return this.queue[this.head]
    }
}
let queue = new Queue();
queue.enqueue("Get")
queue.enqueue("Lost")
queue.enqueue("Please")
console.log(queue)
queue.dequeue()
console.log(queue.peek())
function reverseString(str) {
    let que = new Queue();
    let verseit=""
    for (let i = str.length - 1; i >= 0; i--){
        que.enqueue(str[i])
    }
    while (!que.isEmpty()) {
        verseit += que.dequeue()
    }
    return verseit
}
console.log(reverseString("Find the God"))