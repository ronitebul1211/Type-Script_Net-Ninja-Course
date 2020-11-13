/** Type Script Compiler */
// const inputs = document.querySelectorAll("input");
// inputs.forEach((input) => {
//    console.log(input);
// });

/** Types Basics */
// const circ = (diameter: number) => {
//    return diameter * Math.PI;
// };
// console.log(circ("hello"));
// console.log(circ(1));

/** Objects & Arrays */
// let names = ["Roni", "Gal", "Omer"];
// // names.push(3);
// // names[0] = 3
// // names = {};

// let mixed = ["Omer", 15, "Roni", 28];
// // mixed.push("Gal")
// // mixed[5] = 33;
// // mixed.push(true)

// let mixedOther = [];
// // mixedOther.push("roni");
// // mixedOther.push(1);
// // mixedOther.push(true);

// let person = {
//    name: "Roni",
//    age: 27,
// };

// // person.name = 7;
// // person = [];
// // person = {};
// // person.skills = ["skill 1", "skill 2"];
// person = {
//    name: "Gal",
//    age: 33,
// };
// person.name = "Omer";
// person.age = 15;

// let emptyObject = {};
// // emptyObject.name = "roni";

/** Explicit Type */
// let characters: string;
// let age: number;
// let isLoggedIn: boolean;
// // union type
// let numOrStr: number | string;
// numOrStr = 1;
// numOrStr = "1";
// //-------------------------------

// let unInitArray: string[];
// unInitArray = [];
// unInitArray.push("unInitArray");

// let initArray: string[] = [];
// initArray.push("initArray");

// //union type
// let mixed: (string | number)[] = [];
// mixed.push("mixed");
// mixed.push(12);
// // mixed.push(true)
// //-------------------------------

// let object: object;
// object = {};
// object = [];

// let objectOfTypePerson: {
//    name: string;
//    age: number;
// };
// // objectOfTypePerson = {};
// // objectOfTypePerson.name = "roni";
// // objectOfTypePerson = { name: "roni" };
// objectOfTypePerson = { name: "roni", age: 27 };

/** Dynamic Type */
// let age: any = 25;
// age = "25";
// age = true;

// let mixed: any[];
// mixed.push(false);
// mixed.push("true");
// mixed.push(1);

// let person: { name: any; age: any };
// person.name = "roni";
// person.name = true;
// // person.skills = ["skill 1"]

/** Function Basics */
// let greet: Function;
// // greet = 1;
// greet = (): void => console.log("hello");

// const addOptionalParam = (num1: number, num2: number, num3?: number) => {};
// const addDefaultArg = (num1: number, num2: number, num3: number = 10): number => num1 + num2 + num3;

/** Type Aliases */
// type stringOrNum = string | number;
// type userObject = { name: string; uid: stringOrNum };

// const greetUser = (user: userObject): void => {
//    console.log(user.name);
// };

/** Function Signature */
let greet: (a: string) => void;
greet = (name: string) => {
   console.log(`hello ${name}`);
};

let calc: (a: number, b: number, c: string) => number;
calc = (firstNum: number, secondNum: number, action: string) => {
   if (action === "add") {
      return firstNum + secondNum;
   } else {
      throw new Error("Invalid action");
   }
};

let logDetails: (obj: { name: string; age: number }) => void;
type person = { name: string; age: number };
logDetails = (person: person) => {
   console.log(`person ${person.name} is ${person.age} years old`);
};
