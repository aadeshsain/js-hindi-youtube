let options = [17,28,83,84,55,68,78,83,90,68,78,90,68,76,68,67];

let result = options.indexOf(68);

console.log(result);



let test = ["java","javascript","jquery","PHP","mongoDB","reactJS","javascript","jquery","javascript"]

let result2 = test.indexOf("javascript",3)

console.log(result2);


let test3 = [false, true, true, true, true, true,false,null,undefined,null];
console.log(test3.indexOf(false,2));
console.log(test3.indexOf(false,7));
console.log(test3.indexOf(null,8));


let test4 = ["java","javascript","jquery","PHP","mongoDB","reactJS","javascript","jquery","javascript"];

let result4 = test.indexOf("jquery",3)
console.log(result4);

 
//! ye findIndex ki trh hi index find krta hai but findIndex me condition hoti hai or indexOf me element ki value isme jo bhi value hme mili hoti hai uksa first index find krke deti hai 

//? isme hme value di hoti hai agar usi value ka koi element hme array me mil jata hai to us milne wale first element ka index hme btata hai 

//todo useful for search element in large data large data