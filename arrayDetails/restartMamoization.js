
let cashe = []

let value = 22;
let another = 13
cashe[0] = value;
cashe[1] = another;
let arr = 0
arr=cashe[1]

console.log(arr)
let box=[]
function fibi(n) {
    let value = 0;
    if (n in box) {
        value = box[n]
    }
    else {
    if (n === 0 || n === 1) {
        value = n
    } else {
        value = fibi(n - 1) + fibi(n - 2)
        box[n] = value;
    }    
    }
    
    return value;
}
console.log(fibi(100))