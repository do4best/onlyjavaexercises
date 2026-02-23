const Queue = require('./que')
describe('Queue', () => {
    let queue;
    beforeEach(() => {
        queue = new Queue();
    });
    afterEach(() => {
        queue = null;
    })
    test("Que should be add an element in the queue ", () => {
        queue.enqueue(1);
        expect(queue.getLength()).toBe(1);
        expect(queue.peek()).toBe(1)
    })
})