//#gsKLAsNW
// *Через Array.prototype. створити власний foreach, filter

export {};

declare global {
    interface Array<T>{
        myForEach(callback: (item: T, index:number, array: T[]) => void): void;
    }
}


Array.prototype.myForEach = function <T>(
    callback:(item: T, index:number, array: T[]) => void): void {
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this);
    }
}

const numbers = [1, 2, 3, 4, 5];

numbers.myForEach(function (item: number, index: number, array: number[]): void {
    console.log(item, index, array);
});


//

declare global {
    interface Array<T>{
        myFilter(callback: (item: T, index: number, array: T[]) => boolean): T[];
    }
}

Array.prototype.myFilter = function <T>(
    callback:(item: T, index:number, array: T[]) => boolean): T[]{
    let result: T[] = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

const numbers2: number[] = [11, 22, 33, 44, 55];
numbers2.myFilter(function(item: number, index: number, array: number[]): boolean {
    console.log(item, index, array);
    return item > 30;
})
