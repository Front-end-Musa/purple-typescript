"use strict";
class MyMap {
    constructor() {
        this.buckets = new Map();
    }
    hash(key) {
        // Your hash function logic here
        const keyString = String(key);
        let hash = 0;
        for (let i = 0; i < keyString.length; i++) {
            hash += keyString.charCodeAt(i);
        }
        return hash;
    }
    set(key, value) {
        const bucketIndex = this.hash(key);
        if (!this.buckets.has(bucketIndex)) {
            this.buckets.set(bucketIndex, []);
        }
        const bucket = this.buckets.get(bucketIndex);
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }
        bucket.push([key, value]);
    }
    get(key) {
        const bucketIndex = this.hash(key);
        const bucket = this.buckets.get(bucketIndex);
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    return bucket[i][1];
                }
            }
        }
        return undefined;
    }
    delete(key) {
        const bucketIndex = this.hash(key);
        const bucket = this.buckets.get(bucketIndex);
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }
    clear() {
        this.buckets.clear();
    }
}
// Usage
const myMap = new MyMap();
myMap.set("apple", 5);
myMap.set("banana", 10);
console.log(myMap.get("apple")); // Output: 5
console.log(myMap.get("cherry")); // Output: undefined
myMap.delete("banana");
console.log(myMap.get("banana")); // Output: undefined
myMap.clear();
