// callback 

// adalah sebuah function yang dikirimkan sebagai parameter pada function lain


// adalah sebuah function yang dieksekusi setelah function lain selesai dijalankan


// synchronous callback
// function halo(nama){
// 	alert(`halo ${nama}`);
// }

// function tampilkanPesan(callback){
// 	const nama=prompt(`massukan nama: `)
// 	callback(nama);
// }

// tampilkanPesan(halo)


// bahkan kita tidak perlu bikin function baru
// kita bisa bikin anonim function


// function tampilkanPesan(callback){
// 	const nama=prompt(`massukan nama: `
// 	callback(nama);
// }

// tampilkanPesan(nama=>alert(`halo ${nama}`))



// asynchronous callback

// const mhs=[
// 	{
// 		"nama":"zaenal",
// 		"nrp":"543663",
// 		"email":"zaennns@gmail.com",
// 		"jurusan":"teknik informatika",
// 		"iddosenwali":1
// 	},
// 	{
// 		"nama":"rizki",
// 		"nrp":"3423524",
// 		"email":"rizkis@gmail.com",
// 		"jurusan":"teknik informatika",
// 		"iddosenwali":2
// 	},
// 	{
// 		"nama":"abidin",
// 		"nrp":"546213",
// 		"email":"bidin@gmail.com",
// 		"jurusan":"teknik industri",
// 		"iddosenwali":2
// 	}
// ]
// // console.log('mulai');
// // mhs.forEach(m=>console.log(m.nama));// parameternya callback
// // console.log('selesai')

// // kedepannya kita mungkin mengambilnya tidak seperti ini tidak dalam array begini
// // bisa aja kita mengambil datanya lewat api ke server orang lain
// // biasanya butuh waktu, dan kalau waktunya cukup lama maka console.log(`selesai`) tampilnya nunggu dulu forEach nya selesai karena di blocking

// console.log('mulai');
// mhs.forEach(m=>{
// 	// kita buat looping agar lama
// 	for (var i = 0; i < 10000000; i++) {
// 		let date=new Date();

// 	}
// 	console.log(m.nama)
// });// parameternya callback
// console.log('selesai')
// // console.log selesai tidak muncul sampai forEach selesai dijalankan
// // 


// asynchronous callback
// console.log('mulai');
// function getDataMahasiswa(url, success, error){
//     let xhr= new XMLHttpRequest();
//     xhr.onreadystatechange=function(){
//         if(xhr.readyState===4){
//             if(xhr.status===200){
//                 success(xhr.response);
//             }else if(xhr.status===404){
//                 error()
//             }
//         }
//     }
//     xhr.open('get',url);
//     xhr.send();
// }

// getDataMahasiswa('mahasiswa.json', result=>{
//     const mhs=JSON.parse(result);
//     mhs.forEach(m => console.log(m.nama));
// },()=>{
    
// })

// console.log('selesai');














// warning harus menggunakn server seperti xampp
// function getDataMahasiswa(url, success, error){
// let xhr=new XMLHttpRequest()

// xhr.onreadystatechange=function(){
// 	if (xhr.readystate === 4){
// 		if (xhr.status === 200){
// 			success(xhr.response);
// 		}else if (xhr.status===404){
// 			error()
// 		}
// 	}
// }
// 	xhr.open("get", url);
// 	xhr.send()
// }

// console.log(`mulai`);
// getDataMahasiswa('mahasiswa.json', result=>{
// 	// console.log(result)
// 	// result tampilnya dalam bentuk teks, kita butuh tampilnya dalam bentuk object
// 	// console.log(JSON.parse(result))
// 	const mhs=JSON.parse(result);
// 	mhs.forEach(m=>console.log(m.nama));
// },()=>{

// })
// console.log(`selesai`);

// bedanya dengan yang di atas, bedanya sekarang sudah asynchronous


// kalau pakai jQuery

// console.log(`mulai`);
// $.ajax({
//     url:'mahasiswa.json',
//     success:(mhs)=>{
//         // console.log(mhs)
//         mhs.forEach(m => console.log(m.nama));
//     },
//     error:(e)=>{
//         console.log(e.responseText)
//     }
// });

// console.log(`selesai`);



// // ada funtion baru dari vanilla javascript yang menggantika function ajax yaitu fetch



// latihan untuk callback pada kasus yang lebih nyata lagi


key api
http://www.omdbapi.com/?apikey=31a638da&s=avenger

$('.search-button').on('click', function(){
    $.ajax({
        url:'http://www.omdbapi.com/?apikey=31a638da&s='+$('.input-keyword').val(),
        success:result=>{
            const movies=result.Search;
            let cards='';
            console.log(movies)
            movies.forEach(m=>{
                cards+=showCards(m);
            });
            $('.movie-container').html(cards);
            // ketika tombol detail diklik
            $('.modal-detail-button').on('click', function (){
                // console.log($(this).data('imdbid'));
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=31a638da&i='+$(this).data('imdbid'),
                    success:m=>{
                        const movieDetail=showMovieDetail(m);
                        $('.modal-body').html(movieDetail);
                    },
                    error:()=>{
                        console.log(e.responseText);
                    }
                })
            });
        },
        error:()=>{
            console.log(e.responseText);
        }
    })
})





function showCards(m){
    return `
    <div class="col-md-4 my-3">
        <div class="card">
            <img src="${m.Poster}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${m.Title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
              <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetaiModal" data-imdbid="${m.imdbID}">Show Details</a>
            </div>
          </div>
    </div>`
}


function showMovieDetail(m){
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                            <li class="list-group-item"><strong>Director  : </strong> ${m.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong><br>${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`
}


// ini lama kelamaan kalau kita melakukan ini kita bisa punya sesuatu yang disebut dengan callback hell
// terlalu banyak callback ini ciri-cirinya adalah kodenya yang akan semakin menjorok ke dalam
// ada cara yang lebih efektif lagi dengan menggantikan fungsi jquery menggunakan fungsi bawaan javascript yaitu fetch
// untuk memahami fetch kita harus paham yang namanya promise





