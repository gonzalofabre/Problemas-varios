const button = document.getElementById('button');
const sectionNumbers = document.getElementById('record');



const numberList = [];

button.addEventListener('click',randomNumber);
const restart = document.getElementById('restart');
restart.style.display = 'none';

function randomNumber() {
    if(numberList.length<=10) {
    const number = Math.floor(Math.random()* 11);
        if(!numberList.includes(number)) {
    const newNumber =document.createElement('p');
    newNumber.innerHTML = number;
    sectionNumbers.appendChild(newNumber);
    numberList.push(number);
        } else {
            randomNumber()
        };
 } else {
    const pEnd = document.createElement('p');;
    pEnd.innerHTML = 'The End';
    sectionNumbers.appendChild(pEnd);
    button.disabled = true;
    restart.style.display = 'block'


 };
};

restart.addEventListener('click',frestart);
function frestart() {
    return location.reload()
 }


