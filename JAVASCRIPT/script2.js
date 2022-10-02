

// validasi masukan kosong dan maksimum karakter

function isLength(inputValue, max, massage){
	if (inputValue===""){
		massage.innerHTML="Masukan tidak boleh kosong";
		massage.style.color="red";
		return false
	}else if(inputValue.length<=max){
		return true
	}else{
		massage.innerHTML="Masukan tidak boleh lebih dari "+max+" karakter";
		massage.style.color="red";
		return false
	}
}

// fungsi reguler expression

function isMatch(inputValue, regex,massage,karakter){
	if (regex.test(inputValue)===true)
    {
	    massage.innerHTML="Masukan valid";
	    massage.style.color="green";
	    return true
	}
	else
	{
    	massage.innerHTML="Masukan hanya boleh berisi karakter "+karakter;
    	massage.style.color="red";
    	return false
    }
}

//validasi alfabet

function isName()
	{
	let res=document.getElementById("resName");
	let nama=document.getElementById("name").value;
	let regex=/^[a-z]+([a-z\s?]+)*$/gi;
	let karakter="Alfabet"
	if (isLength(nama, 25, res)) {
		if (isMatch(nama, regex, res, karakter)) {
			return true
		}else{
			return false
		}
	}else{
		return false
	}
}

// validasi alfanumerik

function isUserName(){
	let res=document.getElementById("resUser");
	let userName=document.getElementById("username").value;
	let regex=/^([a-z0-9]+(\.?|\_?))+$/gi;
	let karakter="Alfanumerik, titik(.) dan underscore(_)";
	if (isLength(userName, 18, res)) {
		if (isMatch(userName, regex, res, karakter)){
			return true
		}else{
			return false
		}
	}else{
		return false
	}
}

function isUmur(){
	let res=document.getElementById("resUmur");
	let umur=document.getElementById("umur").value;
	if (umur===""){
		res.innerHTML="Masukan tidak boleh kosong";
		res.style.color="red";
		return false
	}else if (parseInt(umur)>=17 && parseInt(umur) <=40){
		res.innerHTML="Masukan valid";
		res.style.color="green";
		return true
	}else if (parseInt(umur)<17 || parseInt(umur) >40){	
		res.innerHTML="Minimal umur 17 tahun dan maksimal 40 tahun";
		res.style.color="red";
		return false
	}
	else{
		res.innerHTML="Masukan hanya boleh berisi karakter digit/angka";
		res.style.color="red";
		return false
	}
}

// validasi email

function isEmail(){
	let res=document.getElementById("resEmail");
	let email=document.getElementById("email").value;
	let regex=/(^[a-z0-9]+\.?)+\@([a-z0-9]+\.?)+[a-z]$/gi;
	let karakter="Alfanumerik, titik(.), dan at(@)";
	if (email===""){
		res.innerHTML="Masukan tidak boleh kosong";
		res.style.color="red";
		return false
	}else if((isMatch(email, regex, res, karakter))){
		return true
	}else{
		return false
	}
}

// validasi numerik


function isNoHp(){
	let res=document.getElementById("resNoHp");
	let noHp=document.getElementById("noHp").value;
	let regex=/^(\+62|08)(\d){8,11}$/gi;
	let karakter="digit/angka";
	if (isLength(noHp, 13, res)) {
		if (isMatch(noHp, regex, res, karakter)){
			return true
		}else{
			return false
		}
	}else{
		return false
	}
}

// validasi radio button



//ada bug
function isRadio(){
	let male=document.getElementById("male");
	let female=document.getElementById("female");
	if (male.checked || female.checked){
		return true
	}else{
		res.innerHTML="pilih salah satu";
		res.style.color="red"
		return false
	}
}

// validasi checkbox

function isChecked(){
	let check=document.getElementById("checkbox");
	let res=document.getElementById("resCheckBox")
	if (check.checked==true){
		return true
	}else{
		res.innerHTML="pilih salah satu"
		res.style.color="red"
		return false
	}
}





function isMoto(){
	let moto=document.getElementById("textarea").value;
	let res=document.getElementById("resMoto");
	if (umur===""){
		res.innerHTML="Masukan tidak boleh kosong";
		res.style.color="red";
		return false
	}else if (isLength(moto, 100, res)){
		return true
	}else{
		res.innerHTML="masukan valid";
		res.style.color="green"
		return false
	}
}

function isTl(){
	let tl=document.getElementById("tl").value;
	let res=document.getElementById("resTl");
	let regex=/^(0[1-9]|1[0-9]|2[0-9]|3[0-1])[-/](0[1-9]|1[0-2])[-/](19(8[0-9]|9[0-9])|20(0[0-9]|1[0-9]))$/g;
	karakter=" angka, karakter strip(-) atau slash(/)"
	if (umur===""){
		res.innerHTML="Masukan tidak boleh kosong";
		res.style.color="red";
		return false
	}else if (isMatch(tl, regex, res, karakter)) {
		return true
	}else{
		return false
	}
}


function checkFill(){
	if (isName()==false) {
		return false
	}else if(isUserName()==false){
		return false
	}else if (isUmur()==false){
		return false
	}else if (isTl()==false){
		return false
	}else if (isRadio()==false) {
		return false
	}else if (isEmail()==false){
		return false
	}else if (isNoHp()==false){
		return false
	}else if (isMoto()==false) {
		return false
	}if (isChecked()==false) {
		return false
	}
return true;
}

// Event javascript

// let nama=document.getElementById("name");
// let userName=document.getElementById("username");
// let umur=document.getElementById("umur");
// let tl=document.getElementById("tl");
// let email=document.getElementById("email");
// let noHp=document.getElementById("noHp");
// let moto=document.getElementById("textarea")
// nama.oninput=isName
// userName.oninput=isUserName
// umur.oninput=isUmur
// tl.oninput=isTl
// email.oninput=isEmail
// noHp.oninput=isNoHp
// moto.oninput=isMoto



// isChecked()
// isRadio()
// isName()
// isUserName()
// isUmur()
// isTl()
// isEmail()
// isNoHp()



// function checkFill(){
// 	if (isName()) {
// 		if(isUserName()){
// 			if (isUmur()){
// 				if (isNoHp()){
// 					if (isRadio()) {
// 						if (isEmail()) {
// 							if (isTl()) {
// 								if (isChecked()) {
// 									if (isMoto) {
// 										return true;
// 									}else{
// 										return false
// 									}
// 								}else{
// 									return false
// 								}
// 							}else{
// 								return false
// 							}
// 						}else{
// 							return false
// 						}
// 					}
// 				}else{
// 					return false
// 				}
// 			}else{
// 				return false
// 			}
// 		}
// 	}else{
// 		return false
// 	}	

// }
