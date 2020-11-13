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
let names = ["Roni", "Gal", "Omer"];
// names.push(3);
// names[0] = 3
// names = {};

let mixed = ["Omer", 15, "Roni", 28];
// mixed.push("Gal")
// mixed[5] = 33;
// mixed.push(true)

let mixedOther = [];
// mixedOther.push("roni");
// mixedOther.push(1);
// mixedOther.push(true);

let person = {
   name: "Roni",
   age: 27,
};

// person.name = 7;
// person = [];
// person = {};
// person.skills = ["skill 1", "skill 2"];
person = {
   name: "Gal",
   age: 33,
};
person.name = "Omer";
person.age = 15;

let emptyObject = {};
// emptyObject.name = "roni";
