// promise adalah sebuah solusi untuk menangani apa yang kita sebut dengan callback hell


// kita sudah tahu kalau misalkan kalau mau melakukan request ke sebuah api kita  bisa menggunakan ajax jquery

// $.ajax({
//     url:'http://www.omdbapi.com/?apikey=31a638da&s=avengers',
//     success:movies=>console.log(movies),
// })

// sebenarnya isi simpel menulisnya juga tidak terlalu banyak tapi perlu diingat kalau kita menggunakan library jquery kita mengandalkan librarynya jquery
// kita bisa menggunakan ajax versi vanilla javasicript 

// let xhr= new XMLHttpRequest();
// xhr.onreadystatechange=function(){
//     if(xhr.readyState===4){
//         if(xhr.status===200){
//             console.log(JSON.parse(xhr.response))
//         }else if(xhr.status===404){
//             console.log(xhr.responseText)
//         }
//     }
// }
// xhr.open('get','http://www.omdbapi.com/?apikey=31a638da&s=avengers');
// xhr.send();

// sekarang kita tidak mengandalkan library jquery atau library ekseternal namun lumayan banyak yang harus kita tulis
// di javascript modern ada cara yang lebih simple daripada menuliskan object ajax yaitu menggunakan fetch 


// const movies = fetch('http://www.omdbapi.com/?apikey=31a638da&s=avengers');
//console.log(movies)// ini sudah melakukan request hanya satu baris tapi masalahnya adalah yang dikebalikan bukan data filmnya tapi bentuknya promise karena fetch mengembalikan promise
// kalau kita ingin lihat data moviesnya kita tidak perlu console.log dan tidak usah di masukan ke dalam variable movies

// fetch('http://www.omdbapi.com/?apikey=31a638da&s=avengers')
//     .then(response=>response.json())// methon json mengembalikan promise
//     .then(response=>console.log(response))

// hasilnya sama dengan kita menggunakan ajax maupun obyek ajax vanilla javascript

// promise == janji
// promise adalah sebuah object yang merepresentasikan keberhasilan atau kegagalan dari sebuah event yang asynchronous di masa yang akan datang

// janji (terpenuhi / ingkar janji)
// state (fulfilled / rejected / pending)

// untuk menjalankan state ada 3 fungsi callback yang harus diingat
// callback (resolve / reject / finnaly)

// di dalam promise ini ada aksi yang akan kita lakukan jika state terpenuhi maupun tidak terpenuhi
// kalau terpenuhi disebut dengan then
// kalau tidak terpenuhi disebut dengan catch

// promise kita pakai biasanya ketika kita mau request ke sebuah api

// contoh
// let ditepati=false;
// const janji1= new Promise((resolve,reject)=>{
//     if (ditepati){
//         resolve('janji telah ditepati');
//     }else{
//         reject('ingkar janji..')
//     }
// });
// // console.log(janji1)
// // kalu misalkan kita ingin menangkap resolve dan rejectnya console.log ditaruh di dalam method then dan catchnya

// janji1
//     .then(response=>console.log('ok  : '+response))
//     .catch(response=>console.log('Not ok : '+response));


// contoh 2

// let ditepati=true;
// const janji2 = new Promise((resolve, reject)=>{
//     if (ditepati){
//         setTimeout(()=>{
//             resolve('ditepati setelah beberapa waktu');
//         },2000)
//     }else{
//         setTimeout(()=>{
//             resolve('tidak ditepati setelah beberapa waktu');
//         },2000)
//     }
// });

// // console.log('mulai');
// // // console.log(janji2.then(()=>console.log(janji2)))
// // janji2
// //     .then(response=>console.log('ok  : '+response))
// //     .catch(response=>console.log('Not ok : '+response));

// // console.log('selesai');


// // kita bisa tambahkan method finnally
// // method finally dijalankan ketika salah satu dari then atau catch ini sudah siap dijalankan
// // kalau promisenya sudah tidak pending lagi finnaly dulu dijalanin baru salah satu dari ini
// console.log('mulai');
// janji2
//     .finally(()=>console.log('selesai menunggu!'))
//     .then(response=>console.log('ok  : '+response))
//     .catch(response=>console.log('Not ok : '+response));

// console.log('selesai');

// ini digunakan kalau kita mau nambahin misalnya animasi loading jadi pada saat mulai jalan promisenya animasi loadingnya jalanin begitu finnaly matiin animasi loading


// di dalam promise ada sebuah method yang namanya all
// ini untuk menjalankan ketika kita punya banyak promise dan mau dijalankan sekaigus
// anggap saja kita akan connect ke kedua api yang berbeda 

// const film=new Promise (resolve=>{
//     setTimeout(()=>{
//         resolve([{
//             judul:'avenger',
//             sutradara:'zaenal',
//             pemeran:'rizki, abidin'
//         }])
//     },1000)
// });
// // selanjutnya kita juga mau connect ke api yang lain

// const cuaca= new Promise(resolve=>{
//     setTimeout(()=>{
//         resolve([{
//             kota:'bandung',
//             temp:26,
//             kondisi:'Cerah Berawan'
//         }])
//     },500)
// });

// kita jalanin satu satu
// film.then(response=>console.log(response));
// cuaca.then(response=>console.log(response));

// misalkan kalau ada lebih dari dua api atau banyak api kita butuh membuat kode lebih banyak


// menggunakan method all
// Promise.all([film, cuaca])
//     .then(response=>console.log(response));
// akan tampil array yang didalam ada film dan cuaca yang array
// jika tidak ingin menggabung arraynya kita bisa menggunakan spread operator
// Promise.all([film, cuaca])
//     // .then(response=>console.log(response));
//     .then(response=>{
//         const [film, cuaca]=response;
//         console.log(film);
//         console.log(cuaca);
//     });