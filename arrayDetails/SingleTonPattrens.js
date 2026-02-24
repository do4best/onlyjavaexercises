class SingelTon{
    static #instance;
    constructor(name) {
        if (!SingelTon.#instance) {
            SingelTon.#instance = this;
        }
        this.name = name;
    }
    static getInstance() {
        if (!SingelTon.#instance) {
            SingelTon.#instance = this;
        }
        return SingelTon.#instance
    }
}
let name = new SingelTon("Friend")
console.log(SingelTon.getInstance())