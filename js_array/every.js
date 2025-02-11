let test = ["java","java","java","java","java","java","java"];

function check(value){
    return  value === "java"
}
console.log(test.every(check));


let test2 = [25,45,34,74,94,26,54,32,78,73,85,89,]

function max(value){
    return value > 24;
}
console.log(test2.every(max));


let test3 = ["Neha","neha","neha","Neha","neha"]; //? yecase sensetive hote hai 

function op(value1){
    return value1 === "neha";
}
console.log(test3.every(op));

//? isme ham pta lga sakte hai ki kya sab value array me true hai'

//?! agar ek bhi value false hui to ye false return krega.
