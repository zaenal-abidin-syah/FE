
// object javascript

// // kenapa mesti menggunakan onject
// // jika menggunakan variable ==> jika ada mahasiswa kedua dst ==> dapat diperbaiki dengan menggunakan array
// let namaMhs="zaenal abidin syah";
// let umurMhs=20;
// let lulus=true;
// let ipSemester=[2.90,3.10,3.25,2.88,3.04];
// function iPK(ipSemester){
//     let total=0;
//     for(let i=0;i<ipSemester.length;i++){
//         total+=ipSemester[i]
//     }
//     return total/ipSemester.length
// }
// // jika menggunakan array ==> sedikit dapat diperbaiki tetapi nantinya banyak pengulangan baris baris kode nantinya
// // array ==>satu data satu orang mahasiswa ==> yang dimiliki adalah indeks javascript sama sekali tidak tahu bahwa indeks 1 adalah nama dst
// let mahasiswa=['zaenal abidin syah',true,[2.90,3.10,3.25,2.88,3.04]];



// dengan menggunakan object data dapat dibuat lebih ringkas lagi

// let mahasiswa={
//     nama:"zaenal abidin syah",
//     lulus:true,
//     ipSemester:[2.90,3.10,3.25,2.88,3.04],
//     iPK:function(){
//         let total=0;
//         let ips=this.ipSemester;
//         for(let i=0;i<ips.length;i++){
//             total+=ips[i];
//         }
//         return total/ips.length;
//     }
// }

// mahasiswa.iPK();


// let orang ={//menggunakan {} untuk object
//     nama:"zaenal abidin syah",//
//     umur:20,
//     pekerjaan:"mahasiswa",
//     // nama, umur dan pekerjaan adalah variable yang ada didalam object yang disebut dengan properti
//     // masing masing properti dipisahkan dengan tanda koma
//     sapa:function(){
//         return "hi, nama saya "+this.nama+" usia saya "+this.umur+" tahun, dan saya adalah seorang "+this.pekerjaan;
//     }
//     // function yang berada didalam object disebut dengan method
// }



// membuat object
// let mhs={};
// // membuat properti nama dst untuk object mhs
// mhs.nama="zaenal abidin syah";
// mhs.umur=20;

// let mhs={
//     nama:"zaenal abidin syah",
//     umur:20,
//     ips:[3.00,2.50,3.20],
//     alamat:{
//         jalan:"Jl. abc No. 123",
//         kota:"bojonegoro",
//         provinsi:"Jawa Timur"
//     }
// }
// // cara memanggil
// console.log(mhs.nama);//atau
// console.log(mhs["nama"])
// // mengakses array
// console.log(mhs.ips[2]);
// // mengakses object dalam object
// console.log(mhs.alamat);
// console.log(mhs.alamat.kota);//kota didalam object alamat
// console.log(mhs.alamat.jalan);// jalan didalam object alamat
// console.log(mhs["alamat"].jalan);//bisa menggunakan titik atau kurung siku

// beberapa cara membuat object
// 1. object literal
// 2. function declaration
// 3. constructor function (keyword new)
// 4. Object.create()


// // 1. object literal==> tidak efektif untuk object yang banyak
// let mhs1={
//     nama:"zaenal abidin syah",
//     nrp:"071729812",
//     email:"zaenal@gmail.com",
//     jurusan:"teknik informatika",
//     umur:20
//     // key:nilai
// }

// let mhs2={
//     nama:"nama",
//     nrp:"071729812",
//     email:"zaenal@gmail.com",
//     jurusan:"teknik informatika",
//     umur:20
//     // key:nilai
// }
// // jika ingin membuat object berikutnya meskipun propertinya sama dan yang beda hanya nilainya saja
// // kita harus tulis semuanya

// let mahasiswa1={
//     nama:"Zaenal Abidin",
//     energi:10,
//     makan:function(porsi){
//         this.energi+=porsi
//         console.log(`Halo ${this.nama},selamat makan`)
//     }
// }


// let mahasiswa2={
//     nama:"syah",
//     energi:10,
//     makan:function(porsi){
//         this.energi+=porsi
//         console.log(`Halo ${this.nama},selamat makan`)
//     }
// }





// // 2. function declaration
// function buatObjectMahasiswa(nama,nrp,email,jurusan){
//     let mhs={};
//     mhs.nama=nama;
//     mhs.nrp=nrp;
//     mhs.email=email;
//     mhs.jurusan=jurusan;
//     return mhs
// }

// let mhs3=buatObjectMahasiswa("indah","45653","indah@gmail.com","teknik informatika")
// let mhs4=buatObjectMahasiswa("rudy","0987","rudy@hotmail.com","teknik industri")
// // // pembuatannya sedikit lebih ringkas daripada object literal karena deklarasi kita buat sekali dan objectnya kita dapat membuat berulang ulang


// function Mahasiswa(nama, energi){
//     let mahasiswa={};
//     mahasiswa.nama=nama;
//     mahasiswa.energi=energi;
//     mahasiswa.makan=function (porsi){
//         mahasiswa.energi+=porsi
//         console.log(`halo ${mahasiswa.nama}, selamat makan!`)
//         return mahasiswa.energi
//     }
//     mahasiswa.main=function (jam){
//         mahasiswa.energi-=jam;
//         console.log(`halo ${mahasiswa.nama}, selamat bermain!`)
//         return mahasiswa.energi
//     }
//     return mahasiswa
// }
// let mahasiswa1=Mahasiswa("andi",12);
// let mahasiswa2=Mahasiswa("dodi",10);
// dibelakang layar 2 method tetap dibuat dan disimpan kedalam memori
// dapat diakali dengan membuat object terpisah yang isinya dua method tersebut
// const methodMahasiswa={
//     makan:function (porsi){
//         this.energi+=porsi
//         console.log(`halo ${this.nama}, selamat makan!`)
//         return this.energi
//     },
//     main:function (jam){
//         this.energi-=jam;
//         console.log(`halo ${this.nama}, selamat bermain!`)
//         return this.energi
//     }
// }

// function Mahasiswa(nama, energi){
//     let mahasiswa={};
//     mahasiswa.nama=nama;
//     mahasiswa.energi=energi;
//     mahasiswa.makan=methodMahasiswa.makan;
//     mahasiswa.main=methodMahasiswa.main;
//     return mahasiswa
// }
// let mahasiswa1=Mahasiswa("andi",12);

// misalkan kita meanambahkan method baru misalnya tidur kita mau tidak mau harus daftarin di function declaration dan method mahasiswa alngkah lebih baiknya kalau ada cara automatisnya

// const methodMahasiswa={
//     makan:function (porsi){
//         this.energi+=porsi
//         console.log(`halo ${this.nama}, selamat makan!`)
//         return this.energi
//     },
//     main:function (jam){
//         this.energi-=jam;
//         console.log(`halo ${this.nama}, selamat bermain!`)
//         return this.energi
//     }
// }

// function Mahasiswa(nama, energi){
//     let mahasiswa=Object.create(methodMahasiswa);//method membuat object dengan parameter parent object/membawa properti object lain/istilah pewarisan
//     mahasiswa.nama=nama;
//     mahasiswa.energi=energi;
//     return mahasiswa
// }
// let mahasiswa1=Mahasiswa("andi",12);


// dengan menggunakan object.create kita bisa langsung memberitahu(lewat parameter) parent objectnya / object yang berkaitan
// kita sudah tidak perlu memikirkan method2 yang terdaftar diobject tapi tetap saja kita sebenarnya hanya butuh mahasiswa saja tidak butuh object tambahan/method mahasiswa. meskipun kita hubungkan di function mahasiswa tetap saja kita kerjanya dua kali bikin ==> bikin object satu untuk mendukung object inti /mahasiswa
// solusi agar tidak perlu membuat object lain yaitu dengan menggunakan prototype



// // prototype

// function Mahasiswa(nama, energi){
//     //let mahasiswa=Object.create()
//     //let mahasiswa={}
//     //let this=Object.create(Mahasiswa.protoytpe)
//     this.nama=nama;
//     this.energi=energi;
//     //return mahasiswa
//     //return this
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi+=porsi
//     console.log( `halo ${this.nama}, selamat makan!`)
//     return this.energi
// };

// Mahasiswa.prototype.main = function(jam) {
//     this.energi-=jam
//     console.log( `halo ${this.nama}, selamat makan!`)
//     return this.energi
// };

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi+=jam*2
//     console.log( `halo ${this.nama}, selamat tidur!`)
//     return this.energi
// };



// let mahasiswa1=new Mahasiswa("andi",12);
// didalam javascript ini disebut prototype inheritence

// // 3. constructor function (keyword new)
// // mirip dengan function declaration, bahkan constructor function yang khusus untuk membuat object
// // mirip membuat kelas dibahasa lain
// function Mahasiswa(nama, nrp, email, jurusan){//diawali huruf besar dan tulis nama objectnya langsung
//     // tidak perlu menulis let mhs={} dan return mhs
//     this.nama=nama;
//     this.nrp=nrp;
//     this.email=email;
//     this.jurusan=jurusan
// }
// // cara memanggil menggunakan new

// let mhs4= new Mahasiswa("anik", "998798678","anik33242@gmail.com", "teknik informatika")
// function Mahasiswa(nama, energi){
//     this.nama=nama;
//     this.energi=energi;
//     this.makan=function (porsi){
//         this.energi+=porsi
//         console.log(`halo ${this.nama}, selamat makan!`)
//         return this.energi
//     }
//     this.main=function (jam){
//         this.energi-=jam;
//         console.log(`halo ${this.nama}, selamat bermain!`)
//         return this.energi
//     }
// }
// let mahasiswa1=new Mahasiswa("andi",12);
// let mahasiswa2=new Mahasiswa("dodi",10);




// 4. Object.create()











// this
// // saat membuat dan memanggil object yang khususnya dengan menggunakan function nanti kita akan berada pada sebuah Context atau sebuah keadaan yang berbeda tergantung bagaimana kita membuat dan memanggil functionnya jadi ketika kita membuat dan memanggil function dengan cara yang berbeda kita nanti akan berada di Context yang berbeda pula
// // this adalah sebuah keyword special yang secara otomatis didefinisikan pada setiap function
// // this mengembalikan object
// // di scope global this adalah window
// console.log(this);//window

// //1.  function declaration ==> this mengembalikan object global / window
// function halo(){
//     console.log(this);
// };
// halo();

// // 2. Object Literal ==> this mengembalikan objec yang terkait
// let obj={
//     nama:"zaenal abidin syah",
//     nim:"210411100186"
// };
// obj.halo=function(){
//     console.log(this)
// }
// obj.halo()

// // 3. constructor ==> this mengembalikan object yang baru dibuat
// function Halo(){
//     console.log(this);
// };

// let obj1=new Halo();//this mengembalikan object obj1
// let obj2=new Halo();//this mengembalikan object obj2


// prototype

// function Mahasiswa(nama, energi){
//     //let mahasiswa=Object.create()
//     //let mahasiswa={}
//     //let this=Object.create(Mahasiswa.protoytpe)
//     this.nama=nama;
//     this.energi=energi;
//     //return mahasiswa
//     //return this
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi+=porsi
//     console.log( `halo ${this.nama}, selamat makan!`)
//     return this.energi
// };

// Mahasiswa.prototype.main = function(jam) {
//     this.energi-=jam
//     console.log( `halo ${this.nama}, selamat makan!`)
//     return this.energi
// };

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi+=jam*2
//     console.log( `halo ${this.nama}, selamat tidur!`)
//     return this.energi
// };



// let mahasiswa1=new Mahasiswa("andi",12);

//mengubah ke dalam versi class

// class Mahasiswa{
//     constructor(nama,energi){
//         this.nama=nama;
//         this.energi=energi;
//     }
//     makan(porsi) {
//     this.energi+=porsi
//     console.log( `halo ${this.nama}, selamat makan!`)
//     return this.energi
//     };

//     main(jam) {
//         this.energi-=jam
//         console.log( `halo ${this.nama}, selamat makan!`)
//         return this.energi
//     };

//     tidur(jam) {
//         this.energi+=jam*2
//         console.log( `halo ${this.nama}, selamat tidur!`)
//         return this.energi
//     };
// }

// let mahasiswa1=new Mahasiswa("dude",10);
// let mahasiswa2=new Mahasiswa("dude",12);




// // latihan object

// // pengeloaan angkot

// function Angkot(sopir, trayek, penumpang, kas){
//     this.sopir=sopir;
//     this.trayek=trayek;
//     this.penumpang=penumpang;
//     this.kas=kas;
//     this.penumpangNaik=function(namaPenumpang){
//         this.penumpang.push(namaPenumpang);
//         return this.penumpang
//     };
//     this.penumpangTurun=function (namaPenumpang,bayar){
//         if (this.penumpang.length===0){
//             alert("angkot masih kosong")
//             return false
//         }
//         for (var i = 0; i < this.penumpang.length; i++) {
//             if(this.penumpang[i]==namaPenumpang){
//                 this.penumpang[i]=undefined;
//                 this.kas+=bayar
//                 return this.penumpang
//             }
//         }
//     };
// }

// let angkot1=new Angkot("Sandhika Galih", ["Cicaheum", "Cibiru"], [], 0);

// let angkot2=new Angkot("Tom Cruise", ["Antapani", "Ciroyom"], [], 0);


