"use strict";
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
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
//# sourceMappingURL=index.js.map