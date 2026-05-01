function findEven(num) {
    if (num % 2 === 0) {
        console.log(num + " is Even Dawood");
    } else {
        console.log(num + " is odd Malika");
    }
}

for (let i = 1; i <= 100; i++) {
    findEven(i);
}