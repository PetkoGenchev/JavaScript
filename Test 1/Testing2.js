
let car = {
    model: 'BMW',
    year: 2010,
    facelift: true,
    honk: function() {   // Method with function expression
        console.log('Beep Beep!');
    },
    honk2: () => {   // Method with arrow function
        console.log('Beep beep2!');
    },
    honk3() {   // Object method notation
        console.log('Beep beep3!');
    },
    owner: {
        name: 'Pesho',
        age: 30,
    }
}

car.honk();
car.honk2();
car.honk3();
console.log(car.owner.name);
console.log(car.owner['name']);
console.log(car['owner']['name']);




// Object as function library

let calc = {
    sum: function (a,b) {
        return a + b;
    },
    multiplication: (a,b) => a * b,
    substraction(a,b) {
        return a - b;
    }
};

console.log(calc.sum(10,15));


///////////////////

function print(){
    console.log('${this.name} is printing a page');
}


const printer = {name: 'Acme Printer',
                print};