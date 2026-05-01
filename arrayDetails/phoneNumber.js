function splitPhone(phoneNumber) {
    let display = new Map()
    for (let number of phoneNumber) {
        const [name, PhoneNumber] = number.split(":")
        display.set(name,PhoneNumber)
    }
    return display;
}

let person = ['afzal:0320-4522701']
console.log(splitPhone(person))