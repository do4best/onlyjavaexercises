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
try {
    let name = new SingelTon("Friend");
    let second = new SingelTon("Friend")
    console.log(SingelTon.getInstance());
} catch (error) {
    console.error("Error creating singleton:", error);
}