// spread operator dan rest parameter


// spread operator adalah sebuah operator yang memecah(expand / unpack) iterable menjadi single element

// const mhs=['zaenal', 'rizki', 'abidin'];
// console.log(...mhs);
// console.log(...mhs[0]);

// // menggabungkan 2 array

// const dosen=['ade', 'hendra', 'wanda'];
// const orang=[...mhs,'aji',...dosen];
// console.log(orang)

// // concat 

// // const orang=mhs.concat(dosen);
// // dengan menggunakanak spread operator kita bisa lebih fleksibel jika kita ingin menambahkan elemen array ditengah tengah 


// // mengcopy array
// const mhs=['zaenal', 'rizki', 'abidin'];
// // const mhs1=mhs;
// // console.log(mhs1);
// // // problem ==> dia tidak benar benar melakukan copy
// // mhs1[1]='fajar'
// // console.log(mhs1)
// // array mhs satu  juga ikut berubah

// // meggunakan spread

// const mhs1=[...mhs];
// mhs1[1]='fajar'

// console.log(mhs1)
// // array mhs atau array awalya tetap, tidak brubah


// latihan spread dengan dom
// const liMhs=document.querySelectorAll('li');
// karena bentuknya nodelist kita bisa looping nanti

// dengan looping biasa

// const mhs=[];
// for (var i = 0; i < liMhs.length; i++) {
// 	mhs.push(liMhs[i].textContent);
// }

// console.log(mhs)

// dengan map

// const mhs=liMhs.map(m=>m.textContent);
// console.log(mhs)

// akan error karena limhs bukan array kita harus ubah jadi array

// dengan spread

// const mhs=[...liMhs].map(m=>m.textContent);
// console.log(mhs)


// latihan dom spread 2

// const nama=document.querySelector('.nama');
// // kita pecah menjadi tiap tiap huruf setelah itu kita tambah tag span dengan map
// // kita jadikan string dengan join
// const huruf=[...nama.textContent].map(h=>`<span>${h}</span>`).join('')
// // setelah itu kita timpa nama dengan huruf
// nama.innerHTML=huruf;






// rest parameter

// adalah sesuatu yang merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array

// function myFunc(...myArgs){
// 	//return `a = ${a}, b = ${b}, myArgs = ${myArgs}`
// 	return arguments
// 	// return myArgs
// };
// console.log(myFunc(1,2,3,4,5));



// function jumlahkan(...angka) {
// 	// let total=0;
// 	// for (const a of angka){
// 	// 	total+=a
// 	// }
// 	// return total
// 	return angka.reduce((acc, cur)=>acc+cur);
// };

// console.log(jumlahkan(1,2,3,4,5));



// array destructuring

// const kelompok1=['zaenal', 'rizki', 'abidin', 'nando', 'kaira'];
// const [ketua, wakil, ...anggota]=kelompok1


// object destructuring

// const team={
// 	pm:'zaenal',
// 	frontend1:'rizki',
// 	frontend2:'abidin',
// 	backend:'fajar',
// 	ux:'hendra',
// 	devops:'ferry'
// }

// const {pm, ...myTeam}=team;


// filltering pada parameter
// function filterBy(type, ...values) {
// 	return values.filter(v=>typeof(v)===type);
// }

// console.log(filterBy('number', 1, 2, 'zaenal', false, 10, true, 'rizki'));

