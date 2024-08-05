let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;

// No need to write annotations
let sales2 = 123_456;
let course2 = "TypeScript";
let is_published2 = true;

// Any
let level;
level = 1;
level = "a";

// Error
// function render(document) {
//     console.log(document);
// }

let numbers: number[] = [1, 2, 3];
let numbers2 = [1, 2, 3];

let anyArr: number[] = [];
anyArr[0] = 2

// numbers.forEach(n => n.)

// Tuples, Pair or values
let user: [number, string] = [1, 'Melo'];
let user2 = [2, 'Seno'];
// This is a GAP in TS unfortunately
// Dont use this!
user.push(3)

// Enums
