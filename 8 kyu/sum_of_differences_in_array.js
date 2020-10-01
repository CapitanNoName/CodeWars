const sumOfDifferences = arr => {
	if (arr.length < 2) return 0;
	else {
		let sum = 0;
		arr = arr.sort((a, b) => {
			return b - a;
		});
		for (let i = 0; i < arr.length; i++) {
			if (i !== arr.length - 1) sum += arr[i] - arr[i + 1];
		}
		return sum;
	}
};

console.log(sumOfDifferences([1, 2, 10]), 9);
console.log(sumOfDifferences([-3, -2, -1]), 2);
