// versi 2 non object
// penyederhanaan

// validasi masukan kosong

const kosong=(input)=>input.value=='';
const panjang=(input,max,min=0)=>input.value.length<=max&&input.value.length>=min;
const match=(input,regex)=> regex.test(input.value);
const isName=()=>{
	let nama=document.querySelector('#name');
	let res=document.querySelector('#resName');
	let regex=/^[a-z]+(\s?[a-z]+)*$/gi;
	nama.style.border='2px solid red';
	if (kosong(nama)){
		res.innerHTML="masukan tidak boleh kosong"
	}else if(!match(nama,regex)){
		res.innerHTML="Masukan nama harus berupa string"
	}else if(!panjang(nama, 25)){
		res.innerHTML="Panjang masukan melebihi batas yang ditentukan"
	}else{
		res.innerHTML='';
		nama.style.border='2px solid lightgreen';
		return true
	}
	return false
}
const isUsername=()=>{
	let username=document.querySelector('#username');
	let res=document.querySelector('#resUser');
	let regex=/^([a-z0-9]+(\.?|\_?))+$/gi;
	username.style.border='2px solid red';
	if (kosong(username)){
		res.innerHTML="masukan tidak boleh kosong"
	}else if(!match(username,regex)){
		res.innerHTML="Masukan username harus berupa paduan string dan angka serta - . _"
	}else if(!panjang(username, 10,6)){
		res.innerHTML="Panjang masukan dari 6 sampai 10 karakter"
	}else{
		res.innerHTML='';
		username.style.border='2px solid lightgreen';
		return true
	}
	return false
}
const isUmur=()=>{
	let res=document.querySelector("#resUmur");
	let umur=document.querySelector("#umur");
	umur.style.border='2px solid red';
	if (kosong(umur)){
		if (parseInt(umur.value)>=17 && parseInt(umur.value) <=40){
			res.innerHTML='';
			umur.style.border='2px solid lightgreen';
			return true;
		}else if (parseInt(umur.value)<17 || parseInt(umur.value) >40){
			res.innerHTML="Minimal umur 17 tahun dan maksimal 40 tahun";
		}else{
			res.innerHTML="Masukan hanya boleh berisi karakter digit/angka";
		}
	}else{
		res.innerHTML="masukan tidak boleh kosong";
	}
	return false;
	
}
const isTl=()=>{
	let tl=document.querySelector('#tl');
	let res=document.querySelector('#resTl');
	let regex=/^(0[1-9]|1[0-9]|2[0-9]|3[0-1])[-/](0[1-9]|1[0-2])[-/](19(8[0-9]|9[0-9])|20(0[0-9]|1[0-9]))$/g;
	tl.style.border='2px solid red';
	if (kosong(tl)){
		res.innerHTML="masukan tidak boleh kosong";
	}else if(!match(tl,regex)){
		res.innerHTML="Masukan tanggal lahir sesuai format";
	}else{
		res.innerHTML='';
		tl.style.border='2px solid lightgreen';
		return true
	}
	return false
}
const isRadio=()=>{
	let male=document.querySelector("#male");
	let female=document.querySelector("#female");
	let res=document.querySelector("#resGender");
	if ((male.checked==true)||(female.checked==true)){
		res.innerHTML='';
		return true;
	}else{
		res.innerHTML="pilih salah satu";
		return false;
	}
}
const isEmail=()=>{
	let email=document.querySelector('#email');
	let res=document.querySelector('#resEmail');
	let regex=/(^[a-z0-9]+\.?)+\@([a-z0-9]+\.?)+[a-z]$/gi;
	email.style.border='2px solid red';
	if (kosong(email)){
		res.innerHTML="masukan tidak boleh kosong"
	}else if(!match(email,regex)){
		res.innerHTML="Masukan email harus berupa paduan string dan angka serta - . _"
	}else{
		res.innerHTML='';
		email.style.border='2px solid lightgreen';
		return true
	}
	return false
}
const isNoHp=()=>{
	let noHp=document.querySelector('#noHp');
	let res=document.querySelector('#resNoHp');
	let regex=/^[a-z]+(\s?[a-z]+)*$/gi;
	noHp.style.border='2px solid red';
	if (kosong(noHp)){
		res.innerHTML="masukan tidak boleh kosong"
	}else if(!match(noHp,regex)){
		res.innerHTML="Masukan noHp harus berupa digit"
	}else if(!panjang(noHp, 14,10)){
		res.innerHTML="Panjang masukan antara 10-14 karakter"
	}else{
		res.innerHTML='';
		noHp.style.border='2px solid lightgreen';
		return true
	}
	return false
}
const isSelect=()=>{
	let select=document.querySelector("#city").value;
	let res=document.querySelector("#resCity");
	if (select==""){
		res.innerHTML="pilih salah satu";
		return false;
	}else{
		res.innerHTML="";
		return true;
	}
}
const isMoto=()=>{
	let moto=document.querySelector('#textarea');
	let res=document.querySelector('#resMoto');
	let regex=/^[a-z]+(\s?[a-z]+)*$/gi;
	moto.style.border='2px solid red';
	if (kosong(moto)){
		res.innerHTML="masukan tidak boleh kosong"
	}else if(!panjang(moto, 100)){
		res.innerHTML="Panjang masukan maksimal 100 karakter"
	}else{
		res.innerHTML='';
		moto.style.border='2px solid lightgreen';
		return true
	}
	return false
}
const isChecked=()=>{
	let check=document.querySelector("#checkbox");
	let res=document.querySelector("#resCheckBox");
	if (check.checked==true){
		res.innerHTML="anda telah menyetujui persyaratan";
		res.style.color="green";
		return true;
	}else{
		res.innerHTML="anda harus menyetujui untuk melanjutkan";
		return false;
	}
}
function checkFill(){
	check=true
	if (!isName()){
		check=check&&false
	}
	if (!isUsername()){
		check=check&&false
	}
	if (!isUmur()){
		check=check&&false
	}
	if (!isTl()){
		check=check&&false
	}
	if (!isRadio()){
		check=check&&false
	}
	if (!isEmail()){
		check=check&&false
	}
	if (!isNoHp()){
		check=check&&false
	}
	if (!isSelect()){
		check=check&&false
	}
	if (!isMoto()){
		check=check&&false
	}
	if (!isChecked()){
		check=check&&false
	}
	return false
}