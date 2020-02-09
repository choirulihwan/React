var anak = ['daffa', 'diva', 'aqlan', 'cila', 'ocid', 'oni'];

for (var i=0; i<anak.length; i++){
	console.log(anak[i]);
}

anak.push('janur');

for (var i=0; i<anak.length; i++){
	console.log(anak[i]);
}

var campuran = ['Kinan', true, 123];
for (var i=0; i<campuran.length; i++){
	console.log(campuran[i]);
}

/*loops*/
console.log('perulangan tipe 1');
var i = 0;
while(i < 10) {
	console.log('perulangan ' + i);
	i++;
}

i = 0;
console.log('perulangan tipe 2');
do {
	console.log('perulangan ' + i);
	i++;
}
while(i<10);

console.log('splice array');
campuran.splice(0,2);
console.log(campuran);