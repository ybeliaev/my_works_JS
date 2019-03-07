'use strict'

let map = {
    store: {
        'Hello': 'Привет',
    },
    has(key) {
        return key in this.store
    },
    get(key) {
        return this.store[key]
    },
    set(key, value) {
        this.store[key] = value;
        return this;
    },
    delete(key) {
        delete this.store[key];
    },
    clear() {
        for (let key in this.store) {
            delete this.store[key]
        }
    },
    size() {
        let count = 0;
        for (let key in this.store) {
            count++;
        }
        return count;
    },
    keys() {
        let arrKey = [];
        for (let key in this.store) {
            arrKey.push(key);
        }
        return arrKey;
    },
    values() {
        let arrValue = [];
        for (let key in this.store) {
            arrValue.push(this.store[key]);
        }
        return arrValue;
    },
    entries() {
        let entries = [];
        for (let key in this.store) {
            entries.push({
                key,
                value: this.store[key]
            });
        }
        return entries
    },
    forEach(callback){
        for (let key in this.store) {
            let value = this.key;
            callback(value, key, this)
        }
    }
}


console.log(map.set("Hi", 'Приветулики'));
console.log(map.set("Goodbye", 'Пока'));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
map.forEach(item=>console.log(item));

