function ageValidator(age){
    if(age>18){
        console.log("You are allowed to Drive");
    }else{
        console.log("You are not allowed to drive");
    }
}

var age = prompt("Enter your age: ");
console.log(ageValidator(age));