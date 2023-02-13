const min = 1;
const max = 10;

let numbers = [];

for(let i = min; i<=max; i++) {
    numbers.push(i);
};

//

for (i=numbers.length-1; i>0; i--) {
    const randomNumber = Math.floor(Math.random() * (i+1));
    [numbers[i], numbers[randomNumber]] = [numbers[randomNumber], numbers[i]];
};

// 
console.log('Primer array aleatorio')
console.log(numbers)

console.log('Cambiando de lugar');

[numbers[1], numbers[9]] = [numbers[9], numbers[1]]
console.log(numbers)