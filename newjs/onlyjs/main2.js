let sentense = "This is it";
let reversed = [];
for (let i = sentense.length-1; i >= 0; i--){
  reversed.push(sentense[i])
}
reversed = reversed.join('')
console.log(reversed)
let words = "great";
function palendrom(str) {
    let left = 0, right = words.length - 1;
while (left <= right) {
    if (str[left] !== str[right]) {
        return false;
    }
    left++;
    right--;
    
    }
    return true;
}
console.log(palendrom(words))