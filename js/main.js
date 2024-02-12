//alert('We are Beta!!!');
console.log('We are Beta!!!');

var firstName = 'Sandra';
var age = 15;

let lastName = 'Dakey';
const boilingWaterTemperature = 100;

// console.log(firstName, age, lastName, boilingWaterTemperature);

console.log(firstName)
console.log(age)
console.log(lastName)
console.log(boilingWaterTemperature)

if(age >= 18){
    console.log('You are eligible.');
} else{
    console.log('Wait till you are eighteen');
}

// Loops (For)
for(let i = 1; i != 8; i++) {
    console.log('I am at index', i);
}

// Functions- Defining
function isEligible(){
    if(age >= 18){
        console.log('You are eligible.');
    } else{
        console.log('Wait till you are eighteen');
    }
}

// Function - Invoking
isEligible();