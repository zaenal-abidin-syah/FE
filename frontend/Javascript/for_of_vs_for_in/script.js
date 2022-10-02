// looping baru

// for of
// adalah sebuah looping yang bisa mengulang atau menelurusi object object yang iterable
// string, array, arguments/nodelist, typedarray, map, set, user-defined iterables



// array for of
// const mhs=['zaenal', 'rizki', 'abidin'];
// kalau kita ingin menampilkan kedalam konsol hanya nama namanya saja 


// for biasa

// for (var i = 0; i < mhs.length; i++) {
// 	console.log(mhs[i])
// }


// forEach
// method yang ada di proeotype array
// mhs.forEach(m=>console.log(m));


// for of

// for(const m of mhs){
// 	console.log(m);
// }



// string for of
// forEach tidak bisa digunakan untuk looping string karena dia bukan array

// const nama='zaenal abidin syah';
// for (const n of nama){
// 	console.log(n)
// }





// const mhs=['zaenal', 'rizki', 'abidin'];
// mhs.forEach((m,i)=>console.log(`${m} adalah mahasiswa ke ${i+1}`))
// // secara default for of tidak punya index

// for (const [i, m] of mhs.entries()){
// 	console.log(m,i)
// }



// nodelist 

// const liNama=document.querySelectorAll('.nama');
// console.log(liNama)

// // untuk melakukan looping kita bisa menggunakan foreach tapi jika mnggunakan browser versi lama ada yang tidak mendukung foreach
// // cara adalah mengubah menjadi array murni terlebih dahulu

// liNama.forEach(n=> console.log(n.textContent));

// // for of 

// for (n of liNama){
// 	console.log(n.innerHTML)
// }





// Arguments
// object yang mirip array
// function jumlahkanAngka(){
// 	// return arguments.reduce((a, c)=>a+c)
// 	// arguments.forEach(a=>jumlah+=a)
// 	let jumlah=0;
// 	for (a of arguments){
// 		jumlah+=a
// 	}
// 	return jumlah
// }

// console.log(jumlahkanAngka(1,2,3,4,5));









// for in
// hanya untuk enumerable ==>  properti pada object 

// const mhs={
// 	nama:'zaenal',
// 	umur:20,
// 	email:'zaennnns@gmail.com'
// }

// // for (m of mhs){
// // 	console.log(m)
// // }
// // object tidak dapat dilooping dengan for of karena tidak iterable

// for (m in mhs){
// 	console.log(m)
// 	// m adalah properti 
// 	console.log(mhs[m])
// }

