function wordFrequency(words) {
    const formation = words.toLowerCase().split(/\W+/)
    let wordMap = new Map();
    for (const word of formation) {
        if (word === '') continue;
        if (wordMap.has(word)) {
            wordMap.set(word,wordMap.get(word)+1)
        } else {
            wordMap.set(word,1)
        }
    }
    return wordMap;
}

let theWord = "America needs a heavy price to pay by electing a stupid president!"

console.log(wordFrequency(theWord))