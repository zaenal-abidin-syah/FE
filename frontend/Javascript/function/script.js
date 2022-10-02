// // function declaration dan function exspression
// // declaration
// // lebih fleksibel (bisa ditulis dimanapun)==>karena konsep hoisting
// // mudah dipahami pemula
// function tampilkanNama (nama){
//     alert("halo", nama);
// }

// // expression ==> biasanya disimpan ke dalam sebuah variable
// // harus didefinisikan terlebih dahulu sebelum dipanggil
// // lebih powerfull ==> sebagai closure, sebagai argument  untuk function yang lain,IIFE(immediately Invoked function expression)
// var tampilkanPesan=function (nama){alert("halo", nama)}


// arrow function

// arrow function adalah bentuk lain yang lebih ringkas dari function expression
// 

// let tampilkanPesan=function (nama){
//     return 'halo'+nama;
// }

// tampilkanPesan('zaenal');

// to arrow function

// let tampilkanPesan=(nama) => {return 'halo'+nama;}

// console.log(tampilkanPesan('zaenal'));z


//misalnya parameternya lebih dari satu

// const tampilkanNama=(nama,waktu)=>{return `selamat ${waktu}, ${nama}`}
// console.log(tampilkanNama('zaenal','malam'));

// kalo parameternya satu tidak perlu pakai kurung
// const tampilkanNama= nama =>{return `halo ${nama}`;}
// console.log(tampilkanNama('zaenal'))

// kalau isi dari functionnya hanya return kita tidak perlu menulis return tidak perlu kurung kurawal ==> disebut dengan implisit return

// const tampilkanNama= nama =>`halo ${nama}`;
// console.log(tampilkanNama('zaenal'))

// kalo tidak ada parameterya wajib menggunakan kurung buka kurung tutupnya

// const tampilkanNama= () =>`hello world`;
// console.log(tampilkanNama())

// pada kenyataanya kita tidak akan membuat function yang sangat sederhana seperti ini 


// contoh lain dari arrow function misalnya dengan menggunakan function map pada javascript untuk memetakan sebuah function kedalam array misalkan




//let mahasiswa=['zaenal abidin syah','rizki alamsyah','udin'];
//kita ingin menghitung jumlah huruf dari masing masing mahasiswa lalu jumlah hurufnya disimpan ke dalam sebuah array lagi

// // jika menggunakan function biasa
// let jumlahHuruf=mahasiswa.map(function (nama){
//     return nama.length;
// })

// console.log(jumlahHuruf);
// kita ubah menjadi arrow function

// let jumlahHuruf=mahasiswa.map(nama=>nama.length)
// console.log(jumlahHuruf);


// kalo kita petakan sebagai object

// let jumlahHuruf=mahasiswa.map(nama=>({nama:nama,jumlahHuruf:nama.length}))
// console.log(jumlahHuruf);

// //jika property sama dengan value
// let jumlahHuruf=mahasiswa.map(nama=>({nama,jumlahHuruf:nama.length}))
// console.log(jumlahHuruf);


// arrow function lanjutan
// konteks dari this jika kita menggunakan arrow function
// jika kita mengubah sebuah function expression menjadi arrow function maka context thisnya itu menjadi berbeda 

//konsep this pada arrow function

// construktor function

// const Mahasiswa=function(){
//     this.nama='zaenal';
//     this.umur=20;
//     this.sayHello=function(){
//         console.log(`Halo nama saya ${this.nama}, dan umur saya ${this.umur} tahun`)
//     }

//     console.log(this)
// }

// const z=new Mahasiswa();

// kita ubah menjadi arrow function
// const Mahasiswa=function(){
//     this.nama='zaenal';
//     this.umur=20;
//     this.sayHello= () =>{
//         console.log(`Halo nama saya ${this.nama}, dan umur saya ${this.umur} tahun`)
//     }

//     console.log(this)
// }

// const z=new Mahasiswa();

// ini akan berbeda jika kita membuat object dengan menggunakan object literal

// const mhs1={
//     nama:'zaenal',
//     umur:20,
//     sayHello:function(){
//         console.log(`Halo nama saya ${this.nama}, dan umur saya ${this.umur} tahun`)
//     }
// }
// kalau menggunakan function thisnya akan mencari ke leksikal scopenya tetapi ini akan beda jika diganti dengan arrow function
// const mhs1={
//     nama:'zaenal',
//     umur:20,
//     sayHello: () => {
//         console.log(`Halo nama saya ${this.nama}, dan umur saya ${this.umur} tahun`);
//         // this ini tidak mencari ke leksikal scopenya karena arrow function tidak memiliki konsep this
//     }
// }

// const Mahasiswa=function(){
//     this.nama='zaenal';
//     this.umur=20;
//     this.sayHello=function(){
//         console.log(`Halo nama saya ${this.nama}, dan umur saya ${this.umur} tahun`)
//     }
//     // setInterval(function(){
//     //     console.log(this)
//     //     // dia akan cek di globalnya
//     //     // this disini == window
//     // },500)
//     // karena di hoisting maka this didalam function ini tidak ada
//     // solusi dengan menggunakan arrow function 
//     setInterval(()=>{
//         console.log(this.umur++)
//         //karena dia gk punya konsep this maka thisnya akan mencari ke leksikal scopenya
//     },500)
// }


// const z=new Mahasiswa();

// contoh kasus yang bisa kita terapkan di dunia nyatanya


// const box=document.querySelector('.box');
// box.addEventListener('click',function (){
//     //this disini masih kita butuhkan maka kita tidak menggunakan arrow function
//     // this disini contextnya adalah box
//     this.classList.toggle('size');
//     // kita akan menunggu selama o,6 detik baru kita kasih class caption
//     // dengan menggunakan fungsi seTimeOutt
//     setTimeout(function(){
//         // karena setTimeout ini dijalankan ketika hoisting maka dia posisinya ada di global, this==window 
//         // yang harunya isinya box
//         // dulu sebelum ada arrow function dapat kita akali dengan membuat sebuah variable that=this;
//         // solusi dngan menggunakan arrow function
//         this.classList.toggle('caption');
//     },600)
//     console.log(this);
// })



// const box=document.querySelector('.box');
// box.addEventListener('click',function (){
//     //this disini masih kita butuhkan maka kita tidak menggunakan arrow function
//     // this disini contextnya adalah box
//     this.classList.toggle('size');
//     // kita akan menunggu selama o,6 detik baru kita kasih class caption
//     // dengan menggunakan fungsi seTimeOutt
//     setTimeout(()=>{
//         this.classList.toggle('caption');
//     },600)
//     console.log(this);
// })

// saat diklik pertamakali menghilangkan menambahkan size dan caption
// tapi kalo diklik sekali lagi menghilangkan size dan caption , kebalik

// const box=document.querySelector('.box');
// box.addEventListener('click',function (){
//     let satu='size';
//     let dua= 'caption'
//     if (this.classList.contains(satu)){
//         [satu, dua] = [dua, satu]
//     }
//     this.classList.toggle('size');
//     setTimeout(()=>{
//         this.classList.toggle('caption');
//     },600)
//     console.log(this);
// })






//Higher Orderer function

// function yang beroperasi pada function yang lain. baik itu digunakan dalam argument, maupun sebagai return value

// di dalam javascript sebuah function itu disebut first class function itu artinya inti dari javascript sebetulnya adalah function
// dimana function ini diperlakukan sebagai object di dalam javascript
// perlu diketahui object merupakan value sama seperti integer atau string
// maka function juga bisa kita simpan sebagai argument maupun return value dari sebuah function yang lain


// function kerjakanTugas(matakuliah, selesai){
// 	console.log(`mulai mengerjakan tugas ${matakuliah}`);
// 	selesai();
// } 
// // diluar function kerjakan tugas kita harusnya punya sebuah function lgi

// function selesai(){
// 	alert(`selesai mengerjakan tugas!`);
// }

// kerjakanTugas('dpw',selesai)
// // function kerjakanTugas ini bisa kita sebut high order function
// // function sebagai argument disebut callback
// // sedangkan function yang memiliki callback disebut high order function

// contoh lain

// seTimeOutt(function(){
// 	console.log(`hello world!`)
// },1000)

// set time out memiliki 2 parameter, parameter pertamanya adalah function parameter kedua adalah integer untuk menyimpan milisecond
// parameter pertamanya adalah sebuah function atau istilahnya adalah callbck
// sehingga settimeout bisa kita sebut dengan  higher order function

// // contoh lain
// const tombol.document.querySelector('.submit');
// tombol.addEventListener('click',function(){
// 	console.log(`tombol ditekan!`)
// })

// contoh lain return value

// function ucapkanSalam(waktu) {
// 	return function (nama){
// 		console.log(`halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`)
// 	}
// }
// let selamatMalam=ucapkanSalam('Malam');
// console.dir(selamatMalam('zaenal'))

// function ucapkanSalam bisa kita anggap ssebagai higher order function karena didalamnya memiliki return value yang juga function


// kenapa kita harus menggunakan higher order function
// abstraksi ==> untuk membuat agar kode yang kita buat bisa lebih sederhana atau lebih simpel

// semakin besar sebuah program, semakin tinggi kompleksitasnya, semakin membingungkan programmernya
// solusi ada baiknya kita pisahkan menjadi function function sendiri dan ketika kita punya function didalam function itu seharusnya akan membuat programnya semakin simpel.

// anekdot
// ada dua cara untuk merancang sebuah software: cara pertama adalah untuk membuat programnya se-sederhana mungkin sehingga jelas-jelas tidak aa kekurangannya, dan cara lainnya adalah untuk membuat programnya sekompleks mungkin sehingga tidak ada kekurangan yang jelas

// semakin simple programnya semakin sederhana semakin kecil kemungkinannya ada kesalahan didalamnya

// let total=0,
// 	count=1;
// while (count<=10){
// 	total+=count
// 	count++
// }

// console.log(total)
// // bandingkan dengan menulis simple seperti ini

// console.log(sum(range(1,10)));


// atau misalnya

// for (let i=0;i<10;i++){
// 	console.log(i)
// }
// kelihatan simple tapi gimana kalau misalkan kita ingin looping tidak sepuluh kali 
// kita harus merubah angka sepuluh itu dengan angka yang diinginkan jadi kode tidak dinamis
// bagaimana kalau misalkan kita gunakan sebuah function

// function repeatLog(n){
// 	for (let i=0;i<n;i++){
// 		console.log(i)
// }
// }
// kalau kita ingin mengulang sebanyak apapun tinggal panggil repeat log dan parameter berapapun tanpa mengubah lagi lopingnya

// tapi kita bisa bikin ini lebih efektif lagi

// misalkan kita ingin dalam betuk alert misalkan seperti ini

// function repeatLog(n,action){
// 	for (let i=0;i<n;i++){
// 		action(i)
// 	}
// }

// repeatLog(5,console.log)
// repeatLog(5,alert)

// jadi kasus ini bisa dibuat lebih efektif dengan menggunakan higher order function
// dan alasan lain adalah dengan terbiasa kita membuat segala sesuatu ke dalam function itu kita masuk ke sebuah pendekatan yang namanya fuctional programming
// dengan melakukan pendekatan ke functional progamming karena sebetulnya javascript bukan bahasa pemrograman functional murni tapi kita bisa buat menjadi seperti bahasa pemrogramana functional.
//dan ketika kita menggunakan paradigma ini dengan benar itu akan membuat program kita menjadi lebih efektif lebih aman dan lebih efisien lagi

// contoh higher order function terutama pengelolaan array

// 3 contoh dari higher order function
// filter, map dan reduce
// function ini merupakan prototype dari tipe data array
// Array.prototype.map()
// Array.prototype.filter()
// Array.prototype.reduce()

// walaupun  didalamnya bisa isinya macam macam bisa array of angka, array of string atau bahkan array of object
// filter ==> mencari data tertentu saja
// map ==> semua element akan menghasilkan sebuah array baru dan array yang sebelunya masih ada, beda dengan forEach yang tidak menghasilkan array baru
// reduce ==> menggabung element dari array, menghasilkan array yang baru
// ketiga higher order function ini kita bisa gabungkan menggunakan yang namanya method chaining

 

//const angka=[-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// mencari angka yang >= 3

// // menggunakan for
// const newAngka=[]
// for (i=0;i<angka.length;i++){
// 	if(angka[i]>=3){
// 		newAngka.push(angka[i]);
// 	}
// }

// menggunakan filter
// const newAngka=angka.filter(function(a){
// 	// argumen a merepresentasikan elemen dari array
// 	return a>=3
// })

// dengan menggunakan arrow function

//const newAngka=angka.filter(a=>a>=3)
// hasilnya sama saja



// map  ==> kita akan memetakan tiap tiap element yang ada di arraynya menggunakan function yang baru
// misalkan saya ingin kalikan semua angka dengan 2 artinya saya ingin sebuah array baru yang isinya dua kali element array sebelumnya


// const angka=[-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const newAngka=angka.map(a=>a*2);
// // ini artinya telusuri semua elemen yang ada pada angka lalu tiap tiap elementnya kali 2
// // maka nanti akan ada array baru yang tidak mengubah isi dari array angka
// console.log(newAngka)




// // Reduce ==> melakukan sesuatu pada seluruh element pada arraynya
// // misal jumlahkan seluruh element pada array
// //  0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const angka=[-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const newAngka=angka.reduce((accumulator,currentValue)=>
// 	accumulator+currentValue,0);// secara default reduce memiliki parameter kedua yang merupakan nilai awal nilai ini bisa diubah tidak 0
// console.log(newAngka)

// // parameternya ada dua 
// // accumulator  ==> hasil dari prosesnya misalkan dijumlahkan
// // currentValue ==> element array yang sedang diloopingnya



// Method chaining ==> kita bisa menggabungkan fungsi2 higher order function dalam satu kali eksekusi tidak perlu disimpan kedalam variable terlebih dahulu

// method berantai

// dari array yang kita punya kita akan mencari angka yang >5
// kalikan 3
// jumlahkan 

// const angka=[-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// // const hasil=angka.filter(a=>a>5).map(a=>a*3).reduce((acc,cur)=>acc+cur);
// const hasil=angka.filter(a=>a>5)//[8,9,9]
// 	.map(a=>a*3)//[24,27,27]
// 	.reduce((acc,cur)=>acc+cur);//78




// // latihan fillter, map dan reduce
// // kita akan latihan untuk menerapkan ketiga higher order function ke dalam kasus yang lebih rill lagi


// // ambil semua elemen video
// // const videos=document.querySelectorAll('[data-duration]');
// // bentuknya dari veideos adalah nodelist
// // kita ubah menjadi array dengan kita bungkus dengan array.from
// const videos=Array.from(document.querySelectorAll('[data-duration]'));
// console.log(videos)

// // kita pilih hanya yang 'JAVASCRIPT LANJUTAN'

// let jsLanjut=videos.filter(video=>video.textContent.includes('JAVASCRIPT LANJUTAN'))


// // kita ambil durasi masing2 video
// 	.map(item=>item.dataset.duration)




// // ambil durasi menjadi int, ubah menit menjadi detik
// 	.map(waktu=>{
// 		// 10:10 kita pecah menjadi array atau displit
// 		const parts=waktu.split(':').map(part=>parseFloat(part));//[ 10, 10]
// 		return parts[0]*60 + parts[1]// konvrsi ke detik dan jumlahkan
// 	})
// // jumlakan semua detiknya
// 	.reduce((total,detik)=>total+detik);
// // ubah formatanya jam menit detik
// const jam= Math.floor(jsLanjut/3600);
// jsLanjut=jsLanjut-jam*3600
// const menit= Math.floor(jsLanjut/60)
// const detik=jsLanjut-menit*60


// // simpan di dom

// const pDurasi=document.querySelector('.total-durasi');
// pDurasi.textContent=`${jam}:${menit} :${detik}`
// const pVideo=document.querySelector('.jumlah-video')
// const jumlahVideo=videos.filter(video=>video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

// pVideo.textContent=jumlahVideo

