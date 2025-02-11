let options =["aadesh","sain","neha","nai","rekha","bhati",];

console.log(options.copyWithin(1,-1));

let test = [1,2,3,4,5,6,7,8,9];

console.log(test.length);

console.log(test);

let result = test.copyWithin(8,2)

let result1 = test.copyWithin(2,8)

console.log(result);

console.log(result1);

console.log(test);//! change the original array in same length.



let test1 = ["aadesh","neha","rekha","annu","soma"];

console.log(test1.copyWithin(3,1));


let test2 = ["aadesh","neha","rekha","annu","soma","gulu","ruchi","yuvraj","monu"];

console.log(test2.copyWithin(3,1));


let test3 = ["test1","test2","test3","test4","test5","test6","test7","test8"]

let result3 = test3.copyWithin(7,2)

let result4 = test3.copyWithin(0,7)

console.log(result3);
console.log(result4); //! change the index value place in same array.
