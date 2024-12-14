'use strict';

const threeDigitNumberInput = prompt('Enter three-digit number');
const str = 123;
const strNum = String(str);

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
const digit1 = strNum[0];
const digit2 = strNum[1];
const digit3 = strNum[2];

if (digit1 === digit1 || digit1 === digit2 || digit1 === digit3) {
    alert('You entered 2 or 3 identical numbers');
}
