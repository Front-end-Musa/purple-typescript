interface User {
    name: string;
    age: number | string;
    skills: string[];
}

function pickObjectKeys<T>(obj: T, keys: (keyof T)[]): Partial<T> {
    const pickedKeys: Partial<T> = {};

    keys.forEach((key) => {
        pickedKeys[key] = obj[key];
    });

    return pickedKeys;
}

const user: User = {
    name: 'Musa',
    age: 13,
    skills: ['typescript', 'javascript']
}

const selectedKeys = pickObjectKeys(user, ['name', 'age']);
console.log(selectedKeys);
