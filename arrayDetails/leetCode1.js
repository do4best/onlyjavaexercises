// // // // let name = function printIt() {
// // // //     return function (...args) {
// // // //         return "Hello Friend"
// // // et //     }
// // // // }

// // // // console.log(name()())

// // // lcounter = function () {
// // //     return function (value) {
// // //         let count = value;
// // //         return {
// // //             increment: () => (count++),
// // //             decrement: () => (count--),
// // //             reset: () => count = 0
// // //         };
        
// // //     }
// // // }
// // // let value = 10;
// // // let result = counter()(value)
// // // console.log(result.decrement())
// // // console.log(result.decrement())
// // // console.log(result.increment())
// // // console.log(result.increment())
// // function doubbleArray(arr, fn) {
// //     let arr1 = [];
// //     arr.forEach((value, index) => {
// //         arr1.push(fn(value,index))
// //     })
// //     return arr1;
// // }
// // function filterit(arr, fn) {
// //     let arr1 = [];
// //     arr.forEach((value, index) => {
// //         if (fn(value, index)) {
// //             arr1.push(value)
// //         }
// //     })
// //     return arr1;
// // }
// // let double = a => a * a;
// // let filterone = a => a === 2;
// // console.log(filterit([1,2,2,3,4,5],filterone))
// // console.log(doubbleArray([1,2,3,4,5],double))
// // function reduceIt(arr, fn, init) {
// //     let value = init;
// //     if (arr.lenghth === 0) {
// //         return init;
// //     } else {
// //         arr.forEach(num => {
// //             value = fn(value, num)
            
// //         })
// //     }
// //     return value;
// // }
// // let read = (accu, arr) => accu + arr;

// // console.log(reduceIt([1, 2, 3, 4, 5], read, 0))

// // function composition(functions) {
// //     let result = functions;
// //     for (let i = functions.length - 1; i >= 0; i--){
// //         result = functions[i](result)
// //     }
// //     return result;
// // }
// // let value1 = [1, 2, 3, 4]
// // let sum = [x => x * 2, x => x + 2, x => x - 3]
// // console.log(composition(sum[0]))
// function callOnce(fn) {
//     let called = false;
//     return function(...args) {
//         if (!called) {
//             called = true;
//             return fn(...args);
//         }
//         return undefined;
//     };
// }
// let sum = s => s + s;
// let value = [1, 2, 3, 4]
// console.log(sum, value)
// console.log(sum,value)
const storeVal={}
function mamo(fn,...args) {
    const val = args;
    if (val in storeVal) {
        return storeVal[val];
    } else {
        let result = fn(...args);
        storeVal[val] = result;
    }
    return result;

}
let sum = (a,b)=>(a+b)

console.log(mamo(1,2,3,4,5,sum))