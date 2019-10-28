const getSize = (width, height, depth) => {
	return [
		2 * width * depth + 2 * width * height + 2 * depth * height,
		width * height * depth,
	];
};

console.log(getSize(4, 2, 6)[1], 48);
console.log(getSize(10, 10, 10), [600, 1000]);
console.log(getSize(4, 2, 6)[0], 88);
console.log(getSize(4, 2, 6)[1], 48);
