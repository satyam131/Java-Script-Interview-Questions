// Set timeout function value printing in loop
// for let and var used in for loop output will be different
//after loop finish setTimeout execute in browser 
// here var have global scope. so it print after the loop ends.

// var -> var has global scope 
// let -> let has block scope

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1);
}

//output -> 3,3,3 (due to var global scope);


// Now for let variable

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}

// output -> 0,1,2 (due to let block scope);