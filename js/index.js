'use strict';

const threeDigitNumberInput = prompt('Enter three-digit number');

if (!threeDigitNumberInput?.trim() || isNaN(threeDigitNumberInput)
    || !Number.isInteger(+threeDigitNumberInput)) {
    alert('Error: invalid number');
}
else {
    const num = Math.abs(+threeDigitNumberInput);
    if (String(num).length === 3) {} // отак можно оставить или необходимо перенесту скобку вторую ниже?
else {
        alert('Number is not three-digit')
    }
}

const str = '123';

const digit1 = str[0];
const digit2 = str[1];
const digit3 = str[2];

if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
    alert('You entered 2 or 3 identical numbers');
}


// const arr = str.split('');
// const digit1 = arr[0];
// const digit2 = arr[1];
// const digit3 = arr[2];

// if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
//     alert('You entered 2 or 3 identical numbers');
// }