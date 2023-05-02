let a = "stephen";
let c= "nedumpili"
// let b = a.concat("000");
console.log(`${a} and ${c}`);


let d={
    name:"audi",
    engine:"v6",
    bhp:667
};


let person={
    name:"alan",
    college:"cce",
    class:"s4cse",
    address:{
        housename:"213",
        street:"007"
    }
};

// console.log(`${person.name} in college ${person.college} is studying ${person.class} who is from ${person.address.housename}`);


// array;

let fruits=['apple','mango',10];
fruits.push("centodici")

// console.log(fruits);
// fruits.shift();
// console.log(fruits);
// fruits.shift();
// console.log(fruits);


// let todo=[
//     {name:"buggati", engine:"w12",model:"centodichi"},
//     {date:1,month:2,year:4},
//     {street:"avenue",county:"brt"}
// ]

// console.log(todo[0].name)


function addTwoNumber(a,b){
    console.log(a+b);
}
function subTwoNumbers(a,b){
    console.log(a-b);
}

// addTwoNumber(10,20)
// subTwoNumbers(20,10)


// arrow funciton s

add = (a,b) =>{
    c=a+b;
    if(c>10){console.log("sum is greater than 10");}
    else{
        console.log("less than 10")
    }
}
sub=(a,b)=>{
    console.log(a-b);
}
ml=(a,b)=>{
    console.log(a*b);
}
div=(a,b)=>{
    console.log(a/b);
}

// sub(10,20);
// ml(10,20);
// div(10,20);

// let m=prompt("enter a number");
// let n=prompt("enter anotehr number");
// add(m,n);


// let numbers=[1,2,3,4,5,6,7,8,9,10];
// for (i=0;i<10;++i){
//     console.log(i);
// }


let numbers=[1,2,3,4,5,6,7,8,9,10];
// console.log(numbers);

printArray=(array)=>{
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
    }
}

printArray(numbers);