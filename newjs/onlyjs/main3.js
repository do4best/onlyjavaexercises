function single(firstone) {
    return function double(secondone) {
        return secondone * firstone;
    }
}

const doubleit = single(2)
console.log(doubleit(4))
const functionlist = [function (a, b) { return a + b }, function (a, b) { return a - b }]

console.log(functionlist[1](5,3))