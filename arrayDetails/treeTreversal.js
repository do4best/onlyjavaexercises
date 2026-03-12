class Tree{
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null
    }
}
const root = new Tree('a')
const nodeB = new Tree('b')
const nodeC = new Tree('c')
const nodeD = new Tree('d')
const nodeE = new Tree('e')
const nodeF = new Tree('f')

root.left = nodeB;
root.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.left = nodeF;
function depthfirstTraversal(root) {
    if (!root) return [];
    const result = [];
    const stack = [];
    stack.push(root);
    while (stack.length > 0) {
        const current = stack.pop();
        result.push(current.data);
        if (current.right) {
            stack.push(current.right)
        }
        if (current.left) {
            stack.push(current.left)
        }
    }
    return result;
}
const result = depthfirstTraversal(root);
console.log(result)
