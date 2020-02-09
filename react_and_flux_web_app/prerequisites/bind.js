this.car = 'Avanza Veloz';

var garasiDaffa = {
	car: 'Honda HRV',
	getCar: function() {
		return this.car;
	}
};

console.log(garasiDaffa.getCar());

var storeCarForLater = garasiDaffa.getCar;
console.log(storeCarForLater());

var theRealCar = garasiDaffa.getCar.bind(garasiDaffa);
console.log(theRealCar());

