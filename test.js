import generateRandomColor from './random-color.js';

// Generate a random color without a seed
const randomColor1 = generateRandomColor();
console.log(`Random Color 1: ${randomColor1}`);

// Generate a random color with a specific seed
const seed = 0.5;
const randomColor2 = generateRandomColor(seed);
console.log(`Random Color 2 with seed ${seed}: ${randomColor2}`);
