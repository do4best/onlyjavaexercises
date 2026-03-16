function wordFrequency(word) {
    const frequency = word.toLowerCase().split(/\W+/);
    let map = new Map();
    for (let words of frequency) {
        if (words === '') continue;
        if (map.has(words)) {
            map.set(words, map.get(words) + 1)
            
        } else {
            map.set(words,1)
        }
    }
    return map
}
let result = "This is it and we need it"
console.log(wordFrequency(result))