//7. Create an object with the same constructor

function User(name) {
    this.name = name;
}

let john = new User('John');
let pete = new john.constructor('Pete');

console.log('\nQuestion 7:\n-----------')

console.log( pete.name ); // Pete (worked!)