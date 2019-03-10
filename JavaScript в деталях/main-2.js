'use strict'

let foo = {

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
    get size() {
        let count = 0;
        for (let key in this.store) {
            count++;
        }
        return count;
    },
    // для size нужен параметр - поэтому value
    set size(value) {
        if (value == 0) this.clear();
    },
    get keys() {
        let arrKey = [];
        for (let key in this.store) {
            arrKey.push(key);
        }
        return arrKey;
    },
    get values() {
        let arrValue = [];
        for (let key in this.store) {
            arrValue.push(this.store[key]);
        }
        return arrValue;
    },
    //обернуть каждое поле в отдельный объект и вернуть массив объектов
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
    forEach(callback) {
        for (let key in this.store) {
            let value = this.store[key];
            callback(value, key, this)
        }
    },
}

function createMap() {
    let map = {
        store: {},
    };
    for(let key in foo){
        map[key] = foo[key]
    }
    return map
}

//так свойства не создадуться ,т.е. не будет 2х12 свойств(если в foo 12 св-в). Будут копии ссылок
let dictionary = createMap();
let contact = createMap();

dictionary.set('Hello', 'Привет');
contact.set('Hi', 'Приветики');

console.log(dictionary);
console.log(contact)