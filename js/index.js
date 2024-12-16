'use strict';

const threeDigitNumberInput = prompt('Enter three-digit number');

if (!threeDigitNumberInput?.trim() || isNaN(threeDigitNumberInput)
    || !Number.isInteger(+threeDigitNumberInput)) {
    alert('Error: invalid number');
}
else {
    const num = Math.abs(+threeDigitNumberInput);
    if (String(num).length === 3) {
        const str = String(num);
        const digit1 = str[0];
        const digit2 = str[1];
        const digit3 = str[2];

        if (digit1 === digit2 && digit2 === digit3) {
            alert('You entered three identical numbers');
        } else if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
            alert('You entered two identical numbers');
        }
    }
        else {
            alert('Number is not three-digit');
        }
    }