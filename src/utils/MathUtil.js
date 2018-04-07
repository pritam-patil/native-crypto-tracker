export const round = number => +(Math.round(number + 'e+2') + 'e-2');

export const readableNumber = number => number.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');