// module 3
var modOne = require('./modOne');
var modTwo = require('./modTwo');

exports.modThree_0 = function(number) {
	return modTwo.modTwo(modOne.modOne(number, number*100));
}

exports.modThree_1 = function(number) {
	return "Account Balance: \n" + number;
}
