"use strict";
//#gsKLAsNW
// *Через Array.prototype. створити власний foreach, filter
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
const numbers = [1, 2, 3, 4, 5];
numbers.myForEach(function (item, index, array) {
    console.log(item, index, array);
});
Array.prototype.myFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
const numbers2 = [11, 22, 33, 44, 55];
numbers2.myFilter(function (item, index, array) {
    console.log(item, index, array);
    return item > 30;
});
