// let test = [1,2,3,4,5,6,7,8];

// let test2 = [
//     {name: "aadesh", age: 20, id: 1}, //!? index - 0
//     {name: "sain", age: 25, id: 2}, //!? index - 1
//     {name: "neha", age: 22, id: 3}, //!? index - 2
//     {name: "nai", age: 19, id: 4}, //!? index - 3
//     {name: "rekha", age: 27, id: 5}, //!? index - 4
//     {name: "bhati", age: 24, id: 6}, //!? index - 5
// ]

// let result = test.findIndex(max => max - 2 === 4);

// console.log(result);


// console.log(test2.findIndex(i =>  i.name === "nai" && i.id === 5)); //! findIndex always write with function and return first index that satisfied with condition.



// let result2 = test2.findIndex(i => i.age > 26)
// console.log(result2);


// let test3 =[23,43,55,67,87,45,58,67,335,87,34,85]

// let result3 = test3.findIndex(o => o > 65) //!? return 3rd index because the 3rd index satisfied the condition.

// console.log(result3);


// let test4 = [
//     {id: 21, name: "aadesh", age: 21},
//     {id: 45, name: "neha", age: 21},
//     {id: 39, name: "annu", age: 21},
//     {id: 32, name: "mitu", age: 21},
//     {id: 59, name: "sukhi", age: 21}
// ]

// let result4 = test4.findIndex(i => i.id > 50)

// console.log(result4);


// let test5 =[23,43,55,67,87,45,58,67,335,87,34,85];

// let result5 = test5.findIndex(p => p - 40 === 5);

// console.log(result5);

//? isme ek condition di hoti hai jo agar true hai to array pehle element ke index ko return krta hai jo condition ko satisfied krta ho.

//! ise function ke sath likha jata hai jisme condition likhi hoti hai.



//todo pehli index return krta hai jo condition ko satisfied kre

//* pehli index dhundhne ke liye findIndex ka use hota hai.