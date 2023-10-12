import axios from 'axios';

enum Response {
    SUCCESS = 200,
    NOT_FOUND = 404
}

const needUserProperty = [
    'id',
    'firstName',
    'lastName',
    'maidenName',
    'age',
    'gender',
    'email',
    'phone',
    'username',
    'password',
    'birthDate',
    'image'
]

interface User {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: Date,
    image: string
}

interface users {
    users: [
        User
    ]
}

function isSuccess(responseStatus: number): responseStatus is Response.SUCCESS {
    return responseStatus === Response.SUCCESS;
}

function not_found(responseStatus: number): responseStatus is Response.NOT_FOUND {
    return responseStatus === Response.NOT_FOUND;
}

async function getData(url: string) {
    const { data, status } = await axios.get(url);

    if (isSuccess(status)) {
        const user: users = {
            users: [
                {
                    id: data.users[0].id,
                    firstName: data.users[0].firstName,
                    lastName: data.users[0].lastName,
                    maidenName: data.users[0].maidenName,
                    age: data.users[0].age,
                    gender: data.users[0].gender,
                    email: data.users[0].email,
                    phone: data.users[0].phone,
                    username: data.users[0].username,
                    password: data.users[0].password,
                    birthDate: new Date(data.users[0].birthDate),
                    image: data.users[0].image
                }
            ]
        }
        console.log(user)
        return data;
    } else if (not_found(status)) {
        console.log(`Not fouond! Response status: ${status}`)
    } else {
        console.log(`Unexpected error! Response status: ${status}`)
    }
}

getData('https://dummyjson.com/users/');
