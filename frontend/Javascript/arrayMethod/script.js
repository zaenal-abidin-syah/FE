// // array method

// let a=["a","b","c"];
// // length ==> panjang dari array
// console.log(a.length);
// // join ==> menggabungkan dengan parameter berupa separatot atau pemisah ""==> kosong , space, - dan lain lain
// console.log(a.join(""));
// // 

// // push menambahkan element ==> bekerja pada elemen terakhir
// a.push("d");
// console.log(a);
// // pop menghapus element ==> bekerja pada elemen terakhir
// b=a.pop();
// console.log(a);
// console.log("yang dihapus",b);//pop memunyai return yaitu element yang dihapus

// // shift dan unshift ==> bekerja pada element pertama
// // unshift menambahkan diindex pertama
// a.unshift("a");
// console.log(a);
// // shift menghilangkan elemen pertama
// a.shift();
// console.log(a);

// // splice = menghapus atau menambah elemen baru sesuai paremeter function
// // splice(indexAwal, berapaelementyangdihapus, elementbaru1,elementbaru2,....)
// a.splice(1,2,"baru1","baru2","baru3");//index awal 1 menghapus 2 elemen setelahnya, dan menambahkan elemen baru
// 

// // slice
// // slice(awal, akhir)

// let a=["a","b","c"]; 
// let b=a.slice(0,2)//mengambil index 0 - 1
// console.log(b.join("--"))


// forEach, map dan reduce
// forEach
// a=[1,2,3,4,5,6,7,8]
// b=["naruto", "sasuke", "kakashi"]
// parameter pertama==> element dan yang kedua ==> index(opsional)
// a.forEach(e => {
//     console.log(e)
// });

// b.forEach((e, i) => {
//     console.log("karakter ke- "+(i+1)+"adalah "+e)
// });

// // map
// a=[1,2,3,4,5,6,7,8]
// let b=a.map(e => {
//     return e*2
// });

// console.log(b.join(" - "))


// let a=[3,6,2,1,4,8,9,10,20]
// console.log(a.join(" - "))
// a.sort();
// console.log(a.join(" - "))
// // akan tampil 1,10,2,20,3,4,
// // urut dalam bentuk string
// // solusi
// a.sort(function(a,b){
//     return a-b
// });
// console.log(a.join(" - "))

// find dan filter digunakan untuk mencari element pada array

// let a=[3,6,2,1,4,8,9,10,20]


// // filter ==> mengembalikan banyak nilai 
// let a2=a.filter(function(e){
//     return e>3
// })

// console.log(a2.join(" - "))
// // find ==> mengembalikan satu nilai
// let a3=a.find(function(e){
//     return e>3
// })
// // akan mengembalikan satu nilai saja yaitu 6
// console.log(a3)




