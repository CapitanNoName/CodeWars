const well = x => {
	let good = 0;
	x.forEach(item => {
		if (item == 'good') good++;
	});
	if (good <= 2 && good > 0) return 'Publish!';
	else if (good > 2) return 'I smell a series!';
	else return 'Fail!';
};

console.log(well(['bad', 'bad', 'bad']), 'Fail!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
console.log(
	well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']),
	'I smell a series!',
);
