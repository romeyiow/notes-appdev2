//create a greet function that takes a callback function and a string 'name' as an argument and invokes it.
// 
// 

function callback (name) {
    console.log('Goodbye, ' + name);
}

function greet(callback, name) {
    setTimeout(() => {
        callback(name);
    }, 2000);
    console.log(`Hello ${name}`);
}(callback, 'John');

// greet(callback, 'John'); 
// Output: Hello John
// Output: Goodbye, John    

//Create a simple callback demo that happens in real life (e.g. ordering food, going to the doctor, etc.)
function orderFood(callback, food) {
    setTimeout(() => {
        callback(food);
    }, 2000);
    console.log(`Ordering ${food}`);
}

const add = function () {
    console.log('Adding ');
}

// console.log(add.arguments)