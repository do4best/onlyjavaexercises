// let stud1 = { name: "Meer", num: 100 }
// let stud2 = { name: "Afzal", num: 150 }
// let stud3 = { name: "Saddique", num: 200 }
// let stud4 = { name: "Akram", num: 300 }

// const visitCount = new WeakMap()

// tracker(stud1)
// tracker(stud1)
// tracker(stud2)
// tracker(stud3)
// tracker(stud2)
// tracker(stud2)

// function tracker(visit) {
//     let count = visitCount.get(visit) || 0;
//     count++;
//     visitCount.set(visit, count)
//     console.log(`visitor Name ${visit.name} has visited ${count} s which has ${visit.num}`)
// }

let Dictionary = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split('')
console.log(encode(8904))
console.log(decodeIt('ctM'))
function encode(num) {
    let base = Dictionary.length;
    let encode = '';
    if (num === 0) {
        return Dictionary[0]
    }
    while (num > 0) {
        encode += Dictionary[(num % base)];
        num = Math.floor(num/base)
        
    }
    return reverseWord(encode);
}
function reverseWord(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--){
        reverse += str.charAt(i);
    }
    return reverse;
}
function decodeIt(id) {
    let base = Dictionary.length;
    let decode = 0; 
    for (let index = 0; index < id.split('').length; index++){
        decode = decode * base + Dictionary.indexOf(id.charAt(index))
    }
    return decode;
}