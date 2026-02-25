let cashe=[]
function fibnachi(n) {
    let value = 0;
    if (n in cashe) {
        value = cashe[n]
    } else {
    if (n === 0 || n === 1) {
         value = n;
    } else {
        value = fibnachi(n - 1) + fibnachi(n - 2)
        cashe[n] = value;
    }    
    }
    
    return value
        
}

console.log(fibnachi(50))