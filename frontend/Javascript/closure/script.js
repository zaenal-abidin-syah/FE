// Closure
// pengantar==> Execution Context, Hoisting, Scope

// Execution Context
// ada 2 fase pada execution context ==>
// 1. creation ==> 


// console.log(nama)//akan error di console
// //tapi misalkn kita buat variabel dibawah ==> maka di konsol browser akan tampil undefined
// var nama="zaenal abidin syah"

// console.log(nama)//jika console.log kita pindhkan ke bawah baru benar.

// saat program dijalankan yang terjadi adalah ada sesuatu yang disebut dengan fase creation. pada global context
// pada fase creation ini javascript akan mengecek apakah ada variable atau function didalam codingannya.
// jika ada dia akan membuat nama variable == undefined
// jika ada function itu akan diisi kode functionnya ==fn()
// konsep ini disebut dengan hoisting ==> meskipun ditulis dibawah variable dan functionnya akan otomatis dinaikan keatas
// javascript mendefinisikan object window sebagai global object dan mendefinisikan this==window
//



// // 2. execution ==> mengeksekusi programnya dari atas kebawah .
// var nama="zaenal";
// var umur=20;
// console.log(sayHello())

// function sayHello() {
//     return `Halo nama saya ${nama}, saya ${umur} tahun`
// }

// function membuat local execution context 
// yang didalamnya terdapat fase creation dan execution
// bedanya ==> kalo local execution context itu selain kita bisa akses:
// window 
// arguments ==> parameter functionnya
// hoisting ==> lokal
// tumpukan eksekusi
// var nama='zaenal';
// var username='@z1'
// function cetakUrl() {
//     //string "rudy" dia masuk ke sebuah object yang namanya arguments
//     //argument ==> object didalam function
//     console.log(arguments)
//     var instagramURL='http://instagram.com/';
//     return instagramURL + username;
//     // function cetakUrl akan mengecek apakah username ada di variable local jika tidak dia akan cek ke argumentnya kalo tidak ada di functionnya dia akan melihan keluar diglobal ada gk jika ada maka akan pake yg di global
// }

// console.log(cetakUrl("rudy"));
// // string "rudy" masuk ke object arguments

// function a(){
//     console.log("ini a")
//     function b(){
//         console.log("ini b")
//         function c(){
//             console.log("ini c")
//         }
//         c()
//     }
//     b()
// }
// a()

// // Closure

// closure merupakan kombinasi antara function dan lingkungan leksikalnya (lexical scope) di dalam function tersebut
// closure adalah sebuah function ketika memiliki akses ke parent scope-nya, meskipun parent scope-nya sudah selesai dieksekusi
// Closure adalah sebuah function dikembalikan oleh function lain, yang memiliki akses ke lingkungan saat ia diciptakan.
// closure adalah sebuah function yang sebelumnya sudah memiliki data, hasil dari function yang lain.

// lexical scope

// function init() {
//     let nama='Zaenal';
//     function tampilNama() {
//         console.log(nama);
//     }
//     tampilNama()
// }
// init()

// function init() {
//     let nama='Zaenal';
//     let umur=20;
//     function tampilNama() {
//         //ada dua variable yang masuk ke dalam closure scope
//         console.log(nama);
//         console.log(umur);
//     }
//     console.dir(tampilNama)
// }
// init()


// function init() {
//     let nama='Zaenal';
//     function tampilNama() {
//         console.log(nama);
//     }
//     return tampilNama;
// }
// let panggilNama=init();
// panggilNama()



// function init() {
//     // let nama='Zaenal';
//     function tampilNama(nama) {
//         console.log(nama);
//     }
//     return tampilNama;
// }
// let panggilNama=init();
// panggilNama('zaenal')


// function init() {
//     // let nama='Zaenal';
//     return function (nama) {
//         console.log(nama);
//     }
// }
// let panggilNama=init();
// panggilNama('zaenal')


// kenapa menggunakan closure

// 1. untuk membuat function factories
// 2. untuk membuat private method


// contoh 

// function ucapkanSalam(waktu) {
//     return function(nama){
//         console.log(`halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`)
//     }
// }

// let selamatPagi=ucapkanSalam('pagi');
// let selamatSiang=ucapkanSalam('siang');
// let selamatMalam=ucapkanSalam('malam');

// selamatPagi('zaenal')
// selamatMalam('sayang')

// console.dir(selamatMalam)


// let counter=0;
// let add=function(){
//     return ++counter
// }

// 
// console.log(add());
// console.log(add());
// console.log(add());



// let counter=0;
// let add=function(){
//     return ++counter
// }
// counter=10;
// // tapi coba bayangkan kalau program kita  udah panjang ada baris yang mengubah counter
// // karena hoisting counter yang ada di function juga terpengaruh

// console.log(add());
// console.log(add());
// console.log(add());


//solusi
// sebenarnya kita bisa simpan ke dalam



// let add=function(){
//     let counter=0;
//     return ++counter
// }
// // sekarang masalahnya setiap memanggil add conter disi ulang dengan nilai yg sama
// console.log(add());
// console.log(add());
// console.log(add());

// pakai closure
// saat kita return yang kita return adalah function jadi kita punya inner function
// // 


// let add=function(){
//     let counter=0;
//     return function(){
//         ++counter
//     }
// }
// // sekarang masalahnya setiap memanggil add conter disi ulang dengan nilai yg sama
// console.log(add());
// console.log(add());
// console.log(add());
// // yang jalan baru add yang innerfunction belum jalan ==> solusi simpan kedalam sebuah variable


// let add=function(){
//     let counter=0;
//     return function(){
//         return ++counter
//     }
// }

// let a= add();

// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// jadi seolah olah counternya jadi private tidak bisa diakses dari luar tapi nilainya tetap dipertahankan karena dia menjadi closure



// let add=(function(){
//     let counter=0;
//     return function(){
//         return ++counter
//     }
// })();
// // agar tidak buat variable buat nampung==> caranya / tetap pakai add
// //function bisa kita bungkus ke dalam kurung immediately invoked function

// // kalau kita buat variable counter
// counter=10;
// //ini tidak akan mengganggu functionnya
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

