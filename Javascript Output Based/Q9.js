// Memory Reference of object in multiple variables.

let c = {name : "satyam"};
let d;
// Here c and d pointing to the same reference of object in memory
d = c;

c.name = "anil";
console.log(d.name); 

// output in anil.