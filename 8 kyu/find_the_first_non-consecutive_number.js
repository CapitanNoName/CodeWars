const firstNonConsecutive = arr => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] + 1 != arr[i + 1] && arr[i] !== arr[arr.length - 1])
			return arr[i + 1];
	}
	return null;
};

const first = firstNonConsecutive([-7, -6, -5, -4, -3, -2, -1, 0, 1]);
console.log(first, 6);
