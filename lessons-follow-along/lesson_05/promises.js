//demo for JS Promises
function orderFood(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(food);
        }, 2000);
        console.log(`Ordering ${food}`);
    });
}

orderFood('Pizza')
    .then((food) => {
        console.log(`Eating ${food}`);
    })
    .catch((error) => {
        console.log(error);
    });     

//demo async/await
async function orderFood(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(food);
        }, 2000);
        console.log(`Ordering ${food}`);
    });
}    

async function eatFood() {  
    try {
        const food = await orderFood('Pizza');
        console.log(`Eating ${food}`);
    } catch (error) {
        console.log(error);
    }
}