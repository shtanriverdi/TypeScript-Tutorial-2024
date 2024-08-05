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
anyArr[0] = 2;

// numbers.forEach(n => n.)

// Tuples, Pair or values
let user: [number, string] = [1, "Melo"];
let user2 = [2, "Seno"];
// This is a GAP in TS unfortunately
// Dont use this!
user.push(3);

// Enums
// list of related concepts

const small = 1;
const medium = 2;
const large = 3;

// PascalCase
// Small's value will be 0
enum Size {
  Small = 1,
  Medium, // 2
  Large, // 3
}

// This is more optimized
const enum Sizes {
  Small = "s",
  Medium = "m",
  Large = "l",
}

let mySize: Size = Size.Medium;
console.log("mySize: ", mySize);

// FUNCTIONS
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2024 && income < 50_000) {
    return income * 5;
  }
  return income * 1.3;
}

calculateTax(20_000, 2023);

// OBJECTS
let employee: {
  readonly id: number; // cannot be modified
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Melo",
  retire: (date: Date) => {
    console.log(date);
  },
};

// Type Aliases
type Employee = {
  readonly id: number; // cannot be modified
  name: string;
  retire: (date: Date) => void;
};

let employee2: Employee = {
  id: 5,
  name: "Meloooo",
  retire: (date: Date) => {
    console.log(date);
  },
};

// UNION TYPES
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  }
  return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");

// INTERSECTION TYPES
let weight: number & string;

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

// Intersection of two types
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};


// CONST
const PINumber: number = 3.14;

// LITERAL TYPES
// Exact, specific
let quantity: 50 = 50;
let namesse: 'genesis' = "genesis";
// let quantity3: 50 = 51; // Wrong!
let quantity2: 50 | 100 = 100; // can be 50 or 100

type Quantity = 50 | 100;
let quantity5: Quantity = 50;

type Metric = 'cm' | 'inch' | 'meters';
let sizeType: Metric = 'cm';