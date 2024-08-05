"use strict";
var _a, _b;
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let sales2 = 123456;
let course2 = "TypeScript";
let is_published2 = true;
let level;
level = 1;
level = "a";
let numbers = [1, 2, 3];
let numbers2 = [1, 2, 3];
let anyArr = [];
anyArr[0] = 2;
let user = [1, "Melo"];
let user2 = [2, "Seno"];
user.push(3);
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log("mySize: ", mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2024 && income < 50000) {
        return income * 5;
    }
    return income * 1.3;
}
calculateTax(20000, 2023);
let employee = {
    id: 1,
    name: "Melo",
    retire: (date) => {
        console.log(date);
    },
};
let employee2 = {
    id: 5,
    name: "Meloooo",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");
let weight;
let textBox = {
    drag: () => { },
    resize: () => { },
};
const PINumber = 3.14;
let quantity = 50;
let namesse = "genesis";
let quantity2 = 100;
let quantity5 = 50;
let sizeType = "cm";
function greet(name) {
    if (name) {
        console.log(name.toLocaleUpperCase());
    }
    else {
        console.log("Haaahhah");
    }
}
greet(null);
greet(undefined);
function greet2(name) {
    if (name) {
        console.log(name.toLocaleUpperCase());
    }
    else {
        console.log("Haaahhah");
    }
}
greet(null);
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
let customer2 = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
console.log(customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
console.log((_b = customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday) === null || _b === void 0 ? void 0 : _b.getFullYear());
let names = ["asd", "!âdsdsa", "asddsads"];
const firstName = names === null || names === void 0 ? void 0 : names[3];
console.log(firstName);
let log = (message) => console.log(message);
let log2 = null;
log === null || log === void 0 ? void 0 : log();
//# sourceMappingURL=index.js.map