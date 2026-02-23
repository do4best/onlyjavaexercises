// let arr = [1, 2, 3, 4, 5, 6]
// arr.forEach((element, index) => console.log(index, element))
// console.log(arr.slice(5))
let arr = [1, 2, 3, 4, 5]
let arr1 = Array.from(arr);
console.log(arr)
console.log(arr1)
arr1[2] = 55
console.log(arr1)
console.log(arr)
console.log(arr.splice(1, 3))
function matrixArray(rows, columns) {
    let jeggedArray = new Array(rows);
    for (let i = 0; i < columns; i+=1){
        jeggedArray[i] = new Array(rows)
        for (let j = 0; j < rows; j++){
            jeggedArray[j] = new Array(columns)
        }
        return jeggedArray;
    }
    
}
console.log(matrixArray(3,3))