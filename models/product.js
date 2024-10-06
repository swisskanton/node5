const produscts = []

export class Product {
    constructor(title) {
        this.title = title
    }

    save() {
        produscts.push(this)
    }

    static fetchAll() {
        return produscts
    }
}