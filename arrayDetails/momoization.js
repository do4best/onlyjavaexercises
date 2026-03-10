let cashe = [];
function Fibnoacci(n) {
    let value = 0;
    if (n in cashe) { // check if the value in cashe
        value = cashe[n]; // had the value in cashe object
    } else {
    if (n === 0 || n === 1) {
        value = n;
    } else {
        value = Fibnoacci(n - 1) + Fibnoacci(n - 2)
        cashe[n] = value;
        
    }    
    }
    
    
    return value;
}

console.log(Fibnoacci(5))