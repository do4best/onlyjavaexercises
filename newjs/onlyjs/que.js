class Queue{
    constructor() {
        this.que = [];
        this.tail = 0;
        this.head = 0;
        this.maxSize = 100;
    }
    enqueue(value) {
        if (this.isFull()) {
            return false;
        }
        this.que[this.tail] = value;
        this.tail++;
        return true;
    }
    deque() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.que[this.head]
        this.head++;
        return item;
    }
    getLength() {
        return this.tail - this.head;
    }
    isFull() {
        return this.getLength() === this.maxSize;
    }
    isEmpty() {
        return this.getLength() === 0;
    }
    peek() {
        return this.que[this.head]
    }
}

module.exports = Queue;
function reverseit(value) {
    let que = new Queue();
    for (let i = value.length - 1; i >= 0; i--){
        que.enqueue(value[i])
    }
    let reverse = ""
    while (!que.isEmpty()) {
        reverse += que.deque()
    }
    return reverse;
}
console.log(reverseit("Find the God"))