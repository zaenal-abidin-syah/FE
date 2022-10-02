
// key api
// http://www.omdbapi.com/?apikey=31a638da&s=avenger

// $('.search-button').on('click', function(){
//     $.ajax({
//         url:'http://www.omdbapi.com/?apikey=31a638da&s='+$('.input-keyword').val(),
//         success:result=>{
//             const movies=result.Search;
//             let cards='';
//             console.log(movies)
//             movies.forEach(m=>{
//                 cards+=showCards(m);
//             });
//             $('.movie-container').html(cards);
//             // ketika tombol detail diklik
//             $('.modal-detail-button').on('click', function (){
//                 // console.log($(this).data('imdbid'));
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=31a638da&i='+$(this).data('imdbid'),
//                     success:m=>{
//                         const movieDetail=showMovieDetail(m);
//                         $('.modal-body').html(movieDetail);
//                     },
//                     error:()=>{
//                         console.log(e.responseText);
//                     }
//                 })
//             });
//         },
//         error:()=>{
//             console.log(e.responseText);
//         }
//     })
// })

// kita akan ubah menggunakan fetch



// const searchButton= document.querySelector('.search-button');

// searchButton.addEventListener('click',function (){
//     const inputKeyword=document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=31a638da&s='+inputKeyword.value)
//     // fetch adalah function dari javascript yang mengembalikan promise
//     .then(response=>response.json())// kita belum bisa lihat data filmnya untuk melihatnya kita bisa tambahkan method json agar datanya berupa json
//     // sekarang datanya kembali namun bentuknya promise meskipun kita bisa lihat sebenarnya ada isinya
//     // kalau kita pengen jalannya secara acynchronaous maka ini harus kita jalankan lagi kedalam method then
//     .then(response=>{
//         const movies=response.Search;
//         let cards='';
//         movies.forEach(m=>cards+=showCards(m));
//         const movieContainer=document.querySelector('.movie-container');
//         movieContainer.innerHTML=cards;
//         // ketika tombol detail diklik
//         const modalDetailButton=document.querySelectorAll('.modal-detail-button');
//         modalDetailButton.forEach(btn=>{
//             btn.addEventListener('click', function(){
//                 const imdbid=this.dataset.imdbid;
//                 fetch('http://www.omdbapi.com/?apikey=31a638da&i='+imdbid)
//                     .then(response=>response.json())
//                     .then(m=>{
//                         const movieDetail=showMovieDetail(m);
//                         const modalBody=document.querySelector('.modal-body');
//                         modalBody.innerHTML=movieDetail;
//                     })
//             })
//         })
//     });
// });

// fetch
// sebuah method pada api javascript untuk mengambil resource dari jaringan, dan mengembalikan promise yang selesai (fulfilled) ketika ada response yang tersedia

// fetch(resource, init);

// resource 
// url atau bisa sebuah object

// init 
// konfigurasi tambahan pada sebuah request berbentuk object
// method ==> defaultnya get
// dll


// response 

// hasil dari fetch berupa promise
// didalamnya ada dua yaitu properti dan method
// properti => header, ok, rediredted, status, statusText, type, url, body
// method => json, clone, text dll



// refactoring

const searchButton=document.querySelector('.search-button');
searchButton.addEventListener('click', async function(){
    const inputKeyword=document.querySelector('.input-keyword');
    const movies= await getMovies(inputKeyword.value);
    updateUI(movies);
});

document.addEventListener('click', async function(e){
    if (e.target.classList.contains('modal-detail-button')){
        const imdbid=e.target.dataset.imdbid;
        const Details= await getDetail(imdbid);
        updateDetail(Details);
    }
    // if (e.target.classList.contains=='.modal-detail-button')
})

function getDetail(imdbid){
    return fetch('http://www.omdbapi.com/?apikey=31a638da&i='+imdbid)
    .then(response=>response.json())
    .then(m=>m)
}

function updateDetail(details){
    const movieDetail=showMovieDetail(details);
    const modalBody=document.querySelector('.modal-body');
    modalBody.innerHTML=movieDetail;
}

function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=31a638da&s='+keyword)
    .then(response=>response.json())
    .then(response=>response.Search);
};

function updateUI(movies){
    let cards='';
    movies.forEach(m=>cards+=showCards(m));
    const movieContainer=document.querySelector('.movie-container');
    movieContainer.innerHTML=cards;
}









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