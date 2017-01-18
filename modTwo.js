// module 2
exports.modTwo = function(number) {
	return number.toLocaleString('USD', {
		style: 'currency',
		currency: 'USD'
	});
}
