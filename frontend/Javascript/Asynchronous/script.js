// Asynchronous Javascript

// tujuan belajar ini adalah agar kedepannya kita tidak bingung dengan ketika berhadapan dengan teknik teknik programming asynchronous pada javascript seperti callback, promise, ajax, async dan await


// javascript
// secara umum adalah bahasa pemrograman tingkat tinggi dan dinamis yang secara umum dapat berjalan pada browser

// pemahaman yang lebih kompleks adalah 
// javascript adalah single-threaded, non-blocking, asynchronous dan concurrent language

// thread adalah urutan eksekusi kode yang dapat dilakukan secara bebas / independent satu sama lain.
// artinya javasript hanya bisa melakukan satu hal pada satu waktu tertentu


// asynchronous + single-threaded = concurrency
// asynchronous + multi-thread = parallelism

// single vs multi-thread
// berhubungan dengan lingkungan eksekusi task

// blocking vs non-blocking
// berhubungan dengan teknik ngoding input output

// synchronous dan asynchronous
// berhubungan dengan teknik ngoding (http request related)


// mesin yang menjalankan javascript di chrome browser adalah v8 engine

// v8 terdiri dari dua bagian
// 1. heap ==> untuk alokasi memori, tempat penyimpanan variable, hoisting
// 2. stack ==> untuk pemanggilan function dan execution scriptnya/context


// stack berhubungan asynchronous
// stack == tumpukan

// misalkan ada script yang di eksekusi maka akan ditumpuk di stack

// function kalikan(a,b) {
// 	return a*b;
// }
// function hitungLuas(sisi){
// 	return kalikan(sisi, sisi);
// }
// function cetakLuasKotak(sisi){
// 	const luas=hitungLuas(sisi);
// 	console.log
// }

// cetakLuasKotak(5)

// stacknya= [cetakluas(5), hitungLuas(sisi), kalikan(a,b), a*b]
// stacknya= [cetakluas(5), hitungLuas(sisi), kalikan(a,b)]
// stacknya= [cetakluas(5), hitungLuas(sisi)]
// stacknya= [cetakluas(5)]
// stacknya= [cetakluas(5), console.log(luas)]
// stacknya= [cetakluas(5)]
// stacknya= []



// misalkan ada sebuah function yng membutuhkan waktu yang cukup lama

// function prosesSuperKompleks(){

// }

// console.log(`satu`);
// prosesSuperKompleks();
// console.log(`tiga`);



// stack = [console.log(`satu`)]
// stack = []
// stack = [prosesSuperKompleks()]
// ketika masuk keproses yang super kompleks di harus nunggu dulu sampai selesai
// semakin lama proses yang kompleks semakin lama console.log(`tiga`) juga lama
// stack = []
// stack = [console.log(`tiga`)]
// stack = []

// cara menanganinya, kita bisa lakukan sesuatu yang disebut dengan asynchronous callback


// console.log(`satu`);
// setTimeout(()=>{
// 	prosesSuperKompleks();
// },0)
// prosesSuperKompleks();
// console.log(`tiga`);



// console.log(`satu`);
// setTimeout(()=>{
// 	console.log(`dua`);
// },5000)
// console.log(`tiga`);


// dua akan muncul setelah lima detik


// ini bisa terjadi karena ada sesuatu yang namanya event  loop

// perintah yang ada di setTimeout itu sebenarnya dipindahkan ke web api
// web api ==> menangani callback yang asynchronous yang bukan merupakan bagian dari v8 
// misalkan pada pengelolaan dom (addEventListener), ajax, setTimeout, setInterval, ...

// perintah yang merupakan asynchronous callback yang juga merupakan bagian dari web api
// di web api setelah waktu tunggunya selesai atau kalau dom setelah tombolnya dikllik atau ajax setelah data berhasil diambil dari api tujuan
// setelah selesai harusnya callback dijalankn tapi web api tidak bisa langsung menjalankan kembali functionya ke dalam stack, callbacknya harus disimpan dulu ke sebuah tempat yang namanya callback queue buat nyimpen antrian dari callback,  jika tombol diklik, waktunya sudah selesai pindah dia ke callback queue.
// event loop ==> mengecek di callback queue ada antrian tidak, kalau ada ambil callbacknya simpan kedalam stack
//  

// tapi syaratnya kapan sebuah callback bisa masuk kedalam sebuah stack ketika di dalam stacknya sudah tidak ada tumpukan perintah yang akan diekskekusi.

// // satu
// // tiga
// // dua


//stack= [console.log(`satu`)]
// sebenarnya console.log merupakan bagian web api tapi karena bukan merupakan asynchronous callback maka bisa dijalankan di stack langsung
//stack= []
//stack= [setTimeout()]
// setTimeout dipindahkan ke web api setelah itu jalanin console.log(`tiga`)
// didalam web apinya dia nunggu dulu selama 5 detik sampai callbacknya siap di eksekusi tapi stacknya terus mengeksekusi apa yang ada di dalam programnya
// setelah selesai ia akan masuk ke callback queue
// event loop akan mengecek ada callback tidak 
//stack= []
//stack= [console.log(`tiga`)]
// event loop tidak dapat memasukan callback ke stack jika masih ada perintah di stack
//stack= []
//stack= [console.log(`dua`)]
//stack= []

// jangan sampai kita block event loop

