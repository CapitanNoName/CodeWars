const generateRange = (min, max, step) =>
    Array(Math.floor((max - min) / step + 1))
        .fill()
        .map((v, i) => min + i * step);

console.log(generateRange(2, 10, 2), [2, 4, 6, 8, 10]);
console.log(generateRange(1, 10, 3), [1, 4, 7, 10]);
