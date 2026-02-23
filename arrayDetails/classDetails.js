class Person{
    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(`My name is ${this.name}`)
    }
}

class Student extends Person{
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    greet() {
        console.log(`My name is ${this.name} and my IDsds ${this.id}`)
    }
}

let student = new Student("Jhon", 234)
let person = new Person("Meer")
const persons = [student, person]
persons.forEach(person=>person.greet())