
function checkNotZero(){
	let resName=document.getElementById("resName");
	let name=document.getElementById("name");
	let regName=/^[a-z]+([a-z\s?]+)*$/gi;

	let resUser=document.getElementById("resUser");
	let userName=document.getElementById("username");
	let regUser=/^([a-z0-9]+(\.?|\_?))+$/gi;

	let res=document.getElementById("resUser");
	let userName=document.getElementById("username");
	let regex=/^([a-z0-9]+(\.?|\_?))+$/gi;

	let res=document.getElementById("resUmur");
	let umur=document.getElementById("umur");

	let tl=document.getElementById("tl");
	let res=document.getElementById("resTl");
	let regex=/^(0[1-9]|1[0-9]|2[0-9]|3[0-1])[-/](0[1-9]|1[0-2])[-/](19(8[0-9]|9[0-9])|20(0[0-9]|1[0-9]))$/g;

	let male=document.getElementById("male");
	let female=document.getElementById("female");
	let res=document.getElementById("resGender");

	let res=document.getElementById("resEmail");
	let email=document.getElementById("email");
	let regex=/(^[a-z0-9]+\.?)+\@([a-z0-9]+\.?)+[a-z]$/g;
	
	let res=document.getElementById("resNoHp");
	let noHp=document.getElementById("noHp");
	let regex=/^(\+62|08)(\d){8,11}$/gi;

	let select=document.getElementById("city").value;
	let res=document.getElementById("resCity");

	let moto=document.getElementById("textarea");
	let res=document.getElementById("resMoto");

	let check=document.getElementById("checkbox");
	let res=document.getElementById("resCheckBox");

	let check=true
	if (isZero(name)){
		resName.innerHTML="masukan kosong"
		check=check && false
	 }else if (isNotMatch(name,regName)){
		// outpu gk match
		// mungkin ada if lagi
		resName.innerHTML="tidak match"
		check=check && false
	}else if(isNotLength()){
		resName.innerHTML="terlalu panjang"
		check=check && false
	}
	else{
		resName.innerHTML="oke sudah betul"
	}










	// if (isZero(userName)){
	// 	resUser.innerHTML="masukan kosong"
	// 	check=check && false
	// }else{
	// 	resUser.innerHTML=""
	// }

	return check
}




function isZero(input){
	if (input.value!==""){
		return false;
	}
	return true;
}

function isNotMatch(input, regex){
	inputValue=input.value;
	if (regex.test(inputValue)===false){
	    return true;
	}
    return false;
}

function isNotLength(input, max){
	inputValue=input.value;
	if(inputValue.length>max){
		return true;
	}else{
		return false;
	}
}


// if (isMatch()){
// 			if (isLength()){
// 				return true
// 			}
// 		}


function checkFill(){
	if (checkNotZero()){
		return true
	}
	return false
}