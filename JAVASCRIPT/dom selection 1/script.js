/* DOM selection

getElementById("")

*/

const judul=document.getElementById("judul");
// return berupa elemen

// manipulation
judul.style.color="red";
judul.style.backgroundColor="#ccc";
judul.innerHTML="Telah berubah";




// getElementsByTegName()

const p=document.getElementsByTagName("p");
// return berupa array htmlcolection

for (i=0; i<p.length;i++){
	p[i].style.backgroundColor="#ccc";
}


// getElementsByClassName()

const p1=document.getElementsByClassName("p1");
p1[0].innerHTML="ini diubah dari javascript";
