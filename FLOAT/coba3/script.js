// fungsi validasi tidak kosong

function isNotZero(input, massage){
	inputValue=input.value;
	if (inputValue!==""){
		return true;
	}else{
		massage.innerHTML="Masukan tidak boleh kosong";
		massage.style.color="red";
		return false;
	}
}
//validasi maksimum karakter

function isLength(input, max, massage){
	inputValue=input.value;
	if(inputValue.length<=max){
		return true;
	}else{
		massage.innerHTML="Masukan tidak boleh lebih dari "+max+" karakter";
		massage.style.color="red";
		return false;
	}
}

// fungsi reguler expression

function isMatch(input, regex,massage,karakter){
	inputValue=input.value;
	if (regex.test(inputValue)===true)
    {                                                                                                       
	    massage.innerHTML="Masukan valid";
	    massage.style.color="green";
	    return true;
	}
	else
	{
    	massage.innerHTML="Masukan hanya boleh berisi karakter "+karakter;
    	massage.style.color="red";
    	return false;
    }
}

//validasi alfabet




function isName()
	{
	let res=document.getElementById("resName");
	let nama=document.getElementById("name");
	let regex=/^[a-z]+([a-z\s?]+)*$/gi;
	let karakter="Alfabet";
	let check=true
	if (!isNotZero(nama, res)){
		check=check && false
	}else if(!isMatch(nama, regex, res, karakter)){
		check=check && false
	}else if(!isLength(nama, 25, res)){
		check=check && false
	}else{
		res.innerHTML="ok"
	}
	
	return check;
}

// validasi alfanumerik

function isUserName(){
	let res=document.getElementById("resUser");
	let userName=document.getElementById("username");
	let regex=/^([a-z0-9]+(\.?|\_?))+$/gi;
	let karakter="Alfanumerik, titik(.) dan underscore(_)";
	check=true
	if (!isNotZero(userName, res)){
		check=check && false
	}else if (!isMatch(userName, regex, res, karakter)) {
		check=check && false
	}else if((!isLength(userName, 18, res))){
		check=check && false
	}else{
		res.innerHTML="ok"
	}
	return check
}


function isUmur()
	{
	let res=document.getElementById("resUmur");
	let umur=document.getElementById("umur");
	let check=true
	if (!isNotZero(umur, res)){
		check=check && false
	}else if (parseInt(umur.value)>=17 && parseInt(umur.value) <=40){
		res.innerHTML="Masukan valid";
		res.style.color="green";
	}else if (parseInt(umur.value)<17 || parseInt(umur.value) >40){
		check=check && false
		res.innerHTML="Minimal umur 17 tahun dan maksimal 40 tahun";
		res.style.color="red";
	}else{
		check=check && false
		res.innerHTML="Masukan hanya boleh berisi karakter digit/angka";
		res.style.color="red";
	}
	
	return check;
}


// function isUmur(){
// 	let res=document.getElementById("resUmur");
// 	let umur=document.getElementById("umur");
// 	if (isNotZero(umur, res)){
// 		if (parseInt(umur.value)>=17 && parseInt(umur.value) <=40){
// 			res.innerHTML="Masukan valid";
// 			res.style.color="green";
// 			return true;
// 		}else if (parseInt(umur.value)<17 || parseInt(umur.value) >40){
// 			umur.focus();
// 			res.innerHTML="Minimal umur 17 tahun dan maksimal 40 tahun";
// 			res.style.color="red";
// 		}else{
// 			umur.focus();
// 			res.innerHTML="Masukan hanya boleh berisi karakter digit/angka";
// 			res.style.color="red";
// 		}
// 	}
// 	return false;
	
// }

function isTl(){
	let tl=document.getElementById("tl");
	let res=document.getElementById("resTl");
	let regex=/^(0[1-9]|1[0-9]|2[0-9]|3[0-1])[-/](0[1-9]|1[0-2])[-/](19(8[0-9]|9[0-9])|20(0[0-9]|1[0-9]))$/g;
	let karakter=" angka dan pemisah karakter strip(-) atau slash(/)";
	if (isNotZero(tl, res)){
		if (isMatch(tl, regex, res, karakter)) {
			if (isLength(tl, 10, res)) {
				return true;
			}
		}
	}
	return false;
}


function isRadio(){
	let male=document.getElementById("male");
	let female=document.getElementById("female");
	let res=document.getElementById("resGender");
	if ((male.checked==true)||(female.checked==true)){
		res.innerHTML="nilai valid";
		res.style.color="green";
		return true;
	}else{
		male.focus();
		res.innerHTML="pilih salah satu";
		res.style.color="red";
		return false;
	}
}



// validasi email

function isEmail(){
	let res=document.getElementById("resEmail");
	let email=document.getElementById("email");
	let regex=/(^[a-z0-9]+\.?)+\@([a-z0-9]+\.?)+[a-z]$/gi;
	let karakter="Alfanumerik, titik(.), dan at(@)";
	if (isNotZero(email, res)){
		if (isMatch(email, regex, res, karakter)) {
			return true;
		}
	}
	return false;
}

// validasi numerik


function isNoHp(){
	let res=document.getElementById("resNoHp");
	let noHp=document.getElementById("noHp");
	let regex=/^(\+62|08)(\d){8,11}$/gi;
	let karakter="digit/angka dan diawali dengan +62 atu 08 sebanyak 10-14 digit";
	if (isNotZero(noHp, res)){
		if (isMatch(noHp, regex, res, karakter)) {
			if (isLength(noHp, 14, res)) {
				return true;
			}
		}
	}
	return false;
}



function isSelect(){
	let select=document.getElementById("city").value;
	let res=document.getElementById("resCity");
	if (select==""){
		res.innerHTML="pilih salah satu";
		res.style.color="red";
		return false;
	}else{
		res.innerHTML="pilihan valid";
		res.style.color="green";
		return true;
	}
}




function isMoto(){
	let moto=document.getElementById("textarea");
	let res=document.getElementById("resMoto");
	if (isNotZero(moto,res)){
		if (isLength(moto,100,res)){
			res.innerHTML="masukan valid";
			res.style.color="green";
			return true;
		}
	}
	return false;
}

// validasi checkbox

function isChecked(){
	let check=document.getElementById("checkbox");
	let res=document.getElementById("resCheckBox");
	if (check.checked==true){
		res.innerHTML="anda telah menyetujui persyaratan";
		res.style.color="green";
		return true;
	}else{
		check.focus();
		res.innerHTML="anda harus menyetujui untuk melanjutkan";
		res.style.color="red";
		return false;
	}
}

function  checkFill(){
	check=true
	if (!isName()){
		check=check&&false
	}
	if (!isUserName()){
		check=check&&false
	}
	if (!isUserUmur()){
		check=check&&false
	}
	
	return check
}
  
// function checkFill() {
// 	if (isName()){
// 		if (isUserName()){
// 			if (isUmur()){
// 				if (isTl()){
// 					if (isRadio()){
// 						if (isEmail()){
// 							if (isNoHp()){
// 								if (isSelect()){
// 									if(isMoto()){
// 										if (isChecked()){
// 											return true;
// 										}
// 									}
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// 	return false;
// }