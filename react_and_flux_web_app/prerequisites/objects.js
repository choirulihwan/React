var person = {
	nama: "Daffa",
	umur: 6,
	hallo: function(iNama) {
		return "Hallo, " + iNama;
	}
};

console.log("Nama saya " + person.nama);
console.log(person.hallo("Diva"));

person.umur += 5;
console.log('5 tahun lagi saya berumur ' + person.umur);

var Kendaraan = function(jenis, warna, istimewa) {
	var self = this;
	this.jenis = jenis;
	this.odometer = 0;
	this.mesin = 'V6';
	this.warna = warna;

	if (istimewa == true) {
		this.mesin = 'V8';
		this.warna = "Platinum";
	}

	this.addTrip = function(newMiles) {
		if(newMiles > 0){
			self.odometer += newMiles;
		}
	};
};

var avanza = new Kendaraan('Avanza Veloz', 'hitam', false);
console.log(avanza.warna);
console.log(avanza.odometer);
avanza.addTrip(500);
console.log(avanza.odometer);

var mobilio = new Kendaraan('Honda mobilio', 'silver', true);
console.log(mobilio.warna);