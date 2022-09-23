const animal = {
    eats: true,
}

const rabbit = {
    jumps: true,
    __proto__: animal,
}

console.log(rabbit.eats);


// console.log(animal);

// console.log(rabbit);
// console.log(rabbit.eats);
