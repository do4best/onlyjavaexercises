function countwords(str, word) {
    let count = 0;
    for (const letter of str) {
        if (letter === word){count++}
    
    }
    return count;

}
function findMax(arr) {
    if (arr.length === 0) return undefined;
    let max = arr[0];
    for (let number of arr) {
        if (arr[number] > max) {
            max = arr[number]
            
        }
    }
    return max;
}


let words = "Hello Friend";
console.log(countwords(words, 'l'))
let anumber = [2, 5, 3, 1]
console.log(findMax(anumber))
const isPalindrome=(str) => {
    let palendrom = str.split('').reverse().join('')
    return palendrom === str;
}
let sentense = "madam";
let anotherSen=""
for (let i = sentense.length; i >= 0; i--){
    sentense += sentense[i]
    
}
console.log(sentense)
console.log(isPalindrome(sentense))