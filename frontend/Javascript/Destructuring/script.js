// Destrukturing variable
// ada yang menyebutnya juga destrukturing assignment

// destructuring variable adalah Expression pada Javascript yang membuat kita dapat 'membongkar' nilai dari array atau properti dari object ke dalam varible terpisah


// // misalnya kita punya sebuah variable yang merupakan array 
// // didalamnya misalnya kita punya tiga buah element string
// const coba=['satu', 'dua', 'tiga'];

// // kita bisa buat element element ini menjadi nilai pada variable terpisah
// // untuk membuat variable dari nilai array, jika sebelumnya adalah menggunakan
// // const a=coba[0];
// // const b=coba[1];
// // const c=coba[2];


// // tapi dengan menggunakan destructuring assignment ini kita cukup menggunakan tanda kurung siku untuk array lalu kita simpan nama nama variabla yang akan kita gunakan lalu kita assign dengan array coba 
// // sehingga secara otomatis isi dari expression destructuring ini dipetakan ke dalam tiap tiap element pada arraynya sehingga kalian tidak perlu assign satu persatu lagi
// const [a, b, c]=coba;
// console.log(a)//'satu'
// console.log(b)//'dua'
// console.log(c)//'tiga'




// // begitu pula dengan object, object juga secara sederhananya sama misalkan kita punya object

// const mhs={
// 	nama:'zaenal',
// 	umur:20,
// 	email:'zaennnns@gmail.com'
// };
// // // kalau kita ingin petakan setiap popertinya ke dalam variable terpisah
// // const nama=mhs.nama;
// // const umur=mhs.umur;
// // const umur=mhs.email;

// // kalau sekarang kita tinggal bikin pakai sintaks destructuring kurung kurawal untuk membongkar atau destructuring object dan kurung siku untuk membongkar array
// const {nama, umur, email}=mhs;
// console.log(nama);//'zaenal'
// console.log(umur);//20
// console.log(email);// 'zaennnns@gmail.com'





// Destructuring Variable /Assignment

// Detructuring Array

// const perkenalan=['halo', 'nama', 'saya', 'zaenal']

// sebelum menggunakan destruturing 
// const salam=perkenalan[0]
// const salam=perkenalan[3]

// sekarang kalau kita mau pakai destructuring kita cukup bikin variable tapi bentuknya pakai kurung siku jadi ini destructuring array
// // kita langsung aja petakan tiap tiap element ke dalam variable terpisah yang namanya bebas 
// const [salam, satu, dua, nama]=perkenalan;
// // element didalam destructuring array akan langsung menjadi variable
// console.log(salam)
// console.log(dua)


// sekarang kita bisa melompati element element yang ada pada array
// misalnya kita tidak mau semunya kita petakan ke dalam variable
// misalkan kita ingin salam dan nama saja
// // hapus elemnt satu dan dua serta komanya jangan dihapus
// const [salam, , , nama]=perkenalan;
// // sekarang variable satu dan dua tidak ada




// swap atau menukar isi dari array

// // misalkan kita punya dua variable 
// let a = 1;
// let b = 2;

// // untuk menukar isinya biasanya kita butuh variable tambahan atau sementara untuk menampung nilai sementara tapi dengan menggunakan destructuring ini kita bisa langsug aja

// console.log(a);
// console.log(b);
// [a,b]=[b,a]

// console.log(a); 
// console.log(b); 






// kita juga bisa gunakan sebagai return value pada function

// function coba(){
// 	return [1,2];
// }
// const a=coba()
// // nanti a tipenya adalah array
// // misalkan kalau kita ingin  mengambil angka 2 
// console.log(a[1]);


// dengan menggunakan destructuring varible
// [a,b]=coba()
// console.log(a);


// kalau misalkan kita mau bongkar banyak nilai arraynya tapi kita gak tau akan ada berapa element 

// rest parameter

// const [a,...values]=[1, 2, 3, 4, 5, 6, 7, 8];

// console.log(a);
// console.log(values)



// Destructuring Object

// const mhs={
// 	nama:'zaenal',
// 	umur:20
// };

// // sebelum menggunakan destrcturing 
// // const nama=mhs.nama;
// // const umur=mhs.umur;


// // menggunakan destructuring variable cukup gunakan kurung kurawal
// // lalu tuliskan nama variablenya sesuai dengan nama properti dari objectnya
// const {nama,umur}=mhs
// console.log(nama);
// console.log(umur);


// kita bisa melakukan destructuring tanpa melakukan deklarasi object 
// Assignment tanpa deklarasi object

// dengan syarat diberi kurung biasa

// ({nama,umur}={nama:'zaenal', umur:20});
// console.log(nama);
// console.log(umur);



// // bagaimana misalkan kita mau ngasih nama variable baru yang tidak sesuai dengan nama propertinya
// // kalau mau beda caranya kita cukup tambahkan titik dua
// const mhs={
// 	nama:'zaenal',
// 	umur:20
// };
// const {nama:n,umur:u}=mhs
// console.log(n);
// console.log(u);

 


// kita juga bisa memberikan default value
// di dalam function kita bisa memberikan nilai default untuk destructuring juga sama bisa
// kalau misalkan di dalam destructuring kita kasih dia email
// jika kita konsol log email maka tampilkan akan undefined
// di object tidak ada email
// kita bisa kasih setelah email di destructuring sebagai nilai default
// const mhs={
// 	nama:'zaenal',
// 	umur:20
// };

// const {nama,umur, email='default@gmail.com'}=mhs
// console.log(email);



// memberikan nilai default dan assign ke variable baru

// const mhs={
// 	nama:'zaenal',
// 	umur:20
// };
// const {nama:n,umur:u,email:e="default@gmail.com"}=mhs
// console.log(e);
// console.log(u);

// rest parameter

// const mhs={
// 	nama:'zaenal',
// 	umur:20,
// 	email:'zaennnns@gmail.com'
// };
// const {nama, ...values}=mhs
// console.log(nama);
// console.log(values);


// const mhs={
// 	nama:'zaenal',
// 	umur:20
// };
// const {nama:n,umur:u,email:e="default@gmail.com"}=mhs
// console.log(e);
// console.log(u);






// ketika kita mau mengambil field pada object, yang object itu kita kirim sebagai parameter untuk function


// const mhs={
// 	id:123,
// 	nama:'zaenal',
// 	umur:20,
// 	email:'zaenns@gmail.com'
// };


// function getIdMhs(mhs){
// 	return mhs.id
// }

// console.log(getIdMhs(mhs));

// dengan menggunakan destructuring kita bisa simpan sebagai parameternya bukan object padahal yang dikirimnya object tapi yang ditangkap hanya idnya saja 


// const mhs={
// 	id:123,
// 	nama:'zaenal',
// 	umur:20,
// 	email:'zaenns@gmail.com'
// };

// // dikirim object masuk ke function di bongkar terlebih dahulu
// function getIdMhs({id}){
// 	return id
// }

// console.log(getIdMhs(mhs));





// Destructuring (function)

// function penjumlahanPerkalian(a,b){
// 	return [a+b, a*b];
// }

// const jumlah = penjumlahanPerkalian(2, 3);
// console.log(jumlah);

// kalau kita ingin mengambil penjumlahan atau perkaliannya saja saya bisa kasih indek 
// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(jumlah);


// dengan destructuring 

// const [jumlah, kali]=penjumlahanPerkalian(2, 3);



// bagaimana return valuenya nambah



// function kalkulasi(a, b){
// 	return [a + b, a - b, a * b, a / b];
// }

// const [jumlah, kurang, kali, bagi='bagi tidak ada'] = kalkulasi(2, 3);



// kalau misalkan kita mereturn array adalah ketika kita melakukan destructuring itu urutannya harus pas
// kalau kita ingin urutan tidak berpengaruh return valuenya bisa kita ganti dengan jadi object

// function kalkulasi(a, b){
// 	return {
// 		tambah:a+b,
// 		kurang:a-b,
// 		kali:a*b,
// 		bagi:a/b
// 	}
// }

// const {bagi, kali, kurang, tambah}=kalkulasi(2, 3);



// Destructuring function argument

// const mhs1={
// 	nama:'zaenal',
// 	umur:20,
// 	email:'zaennnns@gmail.com'
// }

// kalau kita function declrasi biasa
// function cetakMhs(nama, umur) {
// 	return `Halo nama saya ${nama}, saya berumur ${umur} tahun.`
// }
// console.log(cetakMhs(mhs1.nama, mhs1.umur));


// bisa kiriminnya object


// kalau kita function declrasi biasa
// function cetakMhs(mhs) {
// 	return `Halo nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`
// }
// console.log(cetakMhs(mhs1));


// menggunakan destructuring


// kirimkannya object
// lalu kita bisa lakukan destructuring di argumennya

// function cetakMhs({nama, umur}) {
// 	return `Halo nama saya ${nama}, saya berumur ${umur} tahun.`
// }
// console.log(cetakMhs(mhs1));



// ini akan kepake banget ketika objectnya kompleks contohny



// const mhs1={
// 	nama:'zaenal',
// 	umur:20,
// 	email:'zaennnns@gmail.com',
// 	nilai:{
// 		tugas:80,
// 		uts:85,
// 		uas:75
// 	}

// }


// function cetakMhs({nama, umur, nilai}) {
// 	return `Halo nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${nilai.uas}`
// }
// console.log(cetakMhs(mhs1));

// kita bisa melakukan destructuring lagi pada object nilai


// function cetakMhs({nama, umur, nilai:{tugas, uts, uas}}) {
// 	return `Halo nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`
// }
// console.log(cetakMhs(mhs1));
