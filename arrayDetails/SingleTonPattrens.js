class SingleTon{
    static #instance;
    constructor(name) {
        if (!SingleTon.#instance) {
            SingleTon.#instance = this;
            this.name = name;
        }
        return SingleTon.#instance;
    }
    static getInstance() {
        if (!SingleTon.#instance) {
            SingleTon.#instance = this;

        }
        return SingleTon.#instance;
    }
}
let user1 = new SingleTon("Meer")
let user2 = new SingleTon("Afzal")
console.log("User1 ", user1)
console.log("User2 ", user2)
console.log("User1 === User2 ", user1 === user2)
let user3 = SingleTon.getInstance()
let user4 = SingleTon.getInstance()
console.log("User3 ", user3)
console.log("User4 ", user4)
console.log("User3 === User4 ", user3 === user4)
