'use strict';

const threeDigitNumberInput = prompt('Enter three-digit number')

if (!threeDigitNumberInput?.trim() || isNaN(threeDigitNumberInput)
    || !Number.isInteger(+threeDigitNumberInput)) {
    alert('Error: invalid number');
}
else {
    const num = Math.abs(+threeDigitNumberInput);
    if (String(num).length === 3);
else {
        alert('Number is not three-digit')
    }
}