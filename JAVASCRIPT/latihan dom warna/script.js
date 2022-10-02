let tombol=document.getElementById("tUbahWarna");
let body=document.getElementsByTagName("body")[0];



tombol.addEventListener("click",function () {
	warna=["skyblue","red","yellow","darkred","salmon"]
	for(i=0;i<=4;i++){
		body.style.backgroundColor=warna[i]
	}
	
})








// for(i=0;i<=4;i++){
// 	warna=["skyblue","red","yellow","darkred","salmon"]
// 	tombol.addEventListener("click", function(){
// 		body.style.backgroundColor=warna[i]
// 		})
// 	}

