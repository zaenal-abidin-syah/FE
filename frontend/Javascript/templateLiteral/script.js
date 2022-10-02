// template literal / template string
// template literal adalah sting literal yang memungkinkan adanya expression di dalamnya


// string literal dibuat dengan beberapa cara
// kutip satu, kutip dua ==> fungsinya dijavascript sama persis beda dengan php yang kutip dua sedikit lebih sakti
// back tick ==> dengan membuat string literal dengan menggunakan back tick memungkinkan kita untuk membuat template literal
// jadi template literal hanya bisa dibuat menggunakan back tick 
// dan dengan menggunakan back tick ini kita jadi bisa melakukan banyak hal : 
//  1. multi-line string

//jika menggunakan kutip 1 atau 2

// 'string1\nstring2'

// back tick

// `string text 1
// string text2

// string text 3`



//  2. embedded expression

// `string text${expression} string text`

// const nama='zaenal';
// const umur=20;
// console.log(`Halo, perkenalkan nama saya ${nama}, saya ${umur} tahun`)
// embedded expression

// console.log(`${1+1}`);
// console.log(`${alert('halo')}`);
// const x=11;
// console.log(`${(x%2==0? 'genap' : 'ganjil')}`)




//  3. Html fragment ==> biasaya digunakan pada framework js

// const mhs={
// 	nama:'zaenal',
// 	umur:20
// }
// //jika menggunakan kutip satu / dua (concat)

// let el='';
// el+='<div class="mhs">';
// el+='<h2>'+mhs.nama+'</h2>';
// el+='<span class="umur">'+mhs.umur+'</span>';
// el+='</div>';
// // cukup rumit

// // jika menggunakan back tick

// el=`<div class="mhs">
// 	<h2>${mhs.nama}</h2>
// 	<span class="umur">${mhs.umur}</span>
// </div>`

// console.log(el)








//  4. expression interpolation ==> sama seperti kutip dua dalam php


// let a =10;
// let b=15;
// console.log('jika a = 10 dan b = 15, maka hasil penjumlahannya adalah :'+(a+b)+', bukan '+(2*a+b));
// //jika menggunakan back tic

// console.log(`jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : ${a+b}, bukan ${2*a+b}`)



// latihan penggunaan template literal 

// membahas lebih lanjut html fragments

// const mhs={
// 	nama:'zaenal',
// 	umur:20,
// 	nrp:'23423',
// 	email:'zaenns@gmail.com'
// }

// const el=`<div class="mhs">
// 	<h2>${mhs.nama}</h2>
// 	<span class="nrp">${mhs.nrp}</span>
// </div>`


// const mhs=[
// 	{
// 		nama:'zaenal',
// 		email:'zaenss@gmail.com'
// 	},
// 	{
// 		nama:'aini',
// 		email:'aini@gmail.com'
// 	},
// 	{
// 		nama:'rizki',
// 		email:'rizki@gmail.com'
// 	}
// ]


// const el=`<div class="mhs">
// 	${mhs.map(m=>`<ul>
// 		<li>${m.nama}</li>
// 		<li>${m.email}</li>
// 		</ul>`).join('')}
// </div>`


// kondisional

// const lagu={
// 	judul:'tetap dalam jiwa',
// 	penyanyi:'isyana sarasvati'
// }


// const lagu={
// 	judul:'kau adalah',
// 	penyanyi:'isyana sarasvati',
// 	feat:'rayi putra'
// }


// const el=`<div class="lagu">
// 	<ul>
// 		<li>${lagu.penyanyi}</li>
// 		<li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})`:''}</li>
// 	</ul>
// </div>`



// html fragments bersarang

// const mhs={
// 	nama:'zaenal',
// 	semester:5,
// 	matakuliah:[
// 	'rekayasa perangkat lunak',
// 	'analisis dan perancangan sistem informasi',
// 	'pemrograman sistem interaktif',
// 	'pemograman sistem berorientasi object'
// 	]
// }

// function cetakMatkul(matakuliah){
// 	return `
// 	<ol>
// 		${matakuliah.map(mk=>`<li>${mk}</li>`).join('')}
// 	</ol>
// 	`
// }

// const el=`<div class="mhs">
// 	<h2>${mhs.nama}</h2>
// 	<span class="nrp">Semester : ${mhs.semester}</span>
// 	<h4>matakuliah</h4>
// 	${cetakMatkul(mhs.matakuliah)}
// </div>`

// document.body.innerHTML=el;
// console.log(el)









//  5. tagged template
//  tagged template adalah bentuk yang lebih kompleks dari template literal, memungkinkan kita untuk membaca template literal melalui sebuah function

// tag `string text ${expression} string text`



// const nama='zaenal';
// const umur=20;


// //template literal biasa
// const str=`Halo, nama saya ${nama}, saya ${umur} tahun`;
// console.log(str)

// bagaimana kita jadikn template literal biasa ini menjadi tagged template
// kita tinggal menuliskan nama function di depan stringnya dan nanti string template literal akan masuk seolah olah sebagai parameter dari fungsi tadi

// const nama='zaenal';
// const umur=20;

// function coba(){
// 	return `coba`
// }

// //template literal biasa
// const str=coba `Halo, nama saya ${nama}, saya ${umur} tahun`;
// console.log(str)
// agak aneh karena string yang sudah kita tulis sama sekali tidak dipakai

// secara default tagged tempale ini bisa menerima parameter atau argument 


// const nama='zaenal';
// const umur=20;

// function coba(strings){
// 	return strings
// }

// const str=coba `Halo, nama saya ${nama}, saya ${umur} tahun`;
// console.log(str)
// maka hasilnya akan berisi sebuah array yang berisi 3 element dipisahkan dengan expression dan expression tidak termasuk kedalam array string
// expression akan masuk ke parameter atau argument selanjutnya


// const nama='zaenal';
// const umur=20;

// function coba(strings,nama,umur){
// 	return nama//maka akan tampil namanya
// }

// const str=coba `Halo, nama saya ${nama}, saya ${umur} tahun`;
// console.log(str)

// ada kemungkinan nanti ketika nanti kita membangun sebuah string kita tidak tahu ada berapa ekspresion didalam template literal
// modern javascript itu punya sebuah argument yang namanya rest parameter jadi dia bisa menampung seluruh expression yang ada di dalam template literalny
// cara menulisnya dengan tulis titik 3 kali lalu nama variablenya (...values)
// ini nantinya values ini akan menjadi sebuah array yang isinya semua expression yang ada di dalam template literalnya
// jadi kita tidak perlu ambil satu satu lagi sebagai parameter

// const nama='zaenal';
// const umur=20;

// function coba(strings,...values){//rest parameter
// 	return values// isinya berupa array yang berisi expression dari template literal
// }

// const str=coba `Halo, nama saya ${nama}, saya ${umur} tahun`;
// console.log(str)


// kedepannya kalau misalkan kita mau menampilkan string yang persis sama dengan kalau kita langsung console.log
// kita harus gabungkan string dengan valuesnya 



// const nama='zaenal';
// const umur=20;

// function coba(strings,...values){
// 	let result='';
// 	strings.forEach((str,i)=>{
// 		result+=`${str}${values[i]}`
// 	})
// 	return result
// }

// const str=coba `Halo, nama saya ${nama}, saya ${umur} tahun`;
// console.log(str)
// halo, nama saya zaenal, saya 20 tahunundefined
// ada undefined



// const nama='zaenal';
// const umur=20;

// function coba(strings,...values){
// 	let result='';
// 	strings.forEach((str,i)=>{
// 		result+=`${str}${values[i]||''}`
// 	})
// 	return result
// }

// const str=coba `Halo, nama saya ${nama}, saya ${umur} tahun`;
// console.log(str)

// kita bisa buat cara gampangnya dengan menggunakan higher order function



// const nama='zaenal';
// const umur=20;

// function coba(strings,...values){
// 	return strings.reduce((result,str,i)=>`${result}${str}${values[i]||''}`,'')// kita buat nilai awalnya string kosong
// }

// const str=coba `Halo, nama saya ${nama}, saya ${umur} tahun`;
// console.log(str)




// sekarang pertanyaanya adalah untuk apa kita membuat tagged template untuk menghasilkan string yang sama dengan kita gk pakai tagged template 


// bayangkan contoh implementasi sederhananya kalau misalkan kalian pengen menampilkan sebuah string hasil pencarian berdasarkan keyword tertentu misalkan kalian mencari berdasarkan nama 
// kita ingin tampil hasil pencariannya dengan nama yang kalian masukan itu sudah ada higlighthnya



// contoh kalau mau highlight

// const nama='zaenal';
// const umur=20;

// function highlight(strings,...values){
// 	return strings.reduce((result,str,i)=>`${result}${str} <span class="hl">${values[i]||''}</span>`,'');
// 	// disini nantinya values kita bungkus dulu dengan tag span misalnya
// 	// class hl diberi background color
// }

// const str=highlight `Halo, nama saya ${nama}, saya ${umur} tahun`;
// document.body.innerHTML=str;

// dan ini kerennya jika kita punya variable baru misalkan email 
// maka emailnya otomatis ikut terhiglight


// const nama='zaenal';
// const umur=20;
// const email='zaensss@gmail.com';
// function highlight(strings,...values){
// 	return strings.reduce((result,str,i)=>`${result}${str} <span class="hl">${values[i]||''}</span>`,'');

// }

// const str=highlight `Halo, nama saya ${nama}, saya ${umur} tahun dan email saya adalah : ${email}`;
// document.body.innerHTML=str;


// penggunaan lain dari tagged template
// escaping html tag atau sanitasi html tag
// translation dan intertionalization (alih bahasa)
// style component
