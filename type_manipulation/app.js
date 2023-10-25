"use strict";
function pickObjectKeys(obj, keys) {
    const pickedKeys = {};
    keys.forEach((key) => {
        pickedKeys[key] = obj[key];
    });
    return pickedKeys;
}
const user = {
    name: 'Musa',
    age: 13,
    skills: ['typescript', 'javascript']
};
const selectedKeys = pickObjectKeys(user, ['name', 'age']);
console.log(selectedKeys);
