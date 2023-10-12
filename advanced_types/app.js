"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
var Response;
(function (Response) {
    Response[Response["SUCCESS"] = 200] = "SUCCESS";
    Response[Response["NOT_FOUND"] = 404] = "NOT_FOUND";
})(Response || (Response = {}));
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
];
function isSuccess(responseStatus) {
    return responseStatus === Response.SUCCESS;
}
function not_found(responseStatus) {
    return responseStatus === Response.NOT_FOUND;
}
function getData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data, status } = yield axios_1.default.get(url);
        if (isSuccess(status)) {
            const user = {
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
            };
            console.log(user);
            return data;
        }
        else if (not_found(status)) {
            console.log(`Not fouond! Response status: ${status}`);
        }
        else {
            console.log(`Unexpected error! Response status: ${status}`);
        }
    });
}
getData('https://dummyjson.com/users/');
