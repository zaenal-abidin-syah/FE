// key api
// http://www.omdbapi.com/?apikey=31a638da&s=avenger
// 'http://www.omdbapi.com/?apikey=31a638da&i='

// Async Await

// Asynchronous function
// sebuah function yang bekerja secara asynchronous (melalui event loop), yang menghasilkan (implisit) promise sebagai return valuenya, tetapi cara penulisan kodenya menggunakan penulisan synchronous (standard)

// fungsi yang  berjalan secara asynchronous
// menghasilkan (implisit) promise
// cara penulisannya sama seperti synchronous function (function biasa)


// sebuah async function dapat memiliki keyword await di dalamnya untuk memberhentikan sementara eksekusi fungsinya sambil menunggu promisenya selesai

// const coba=new Promise(resolve=>{
// 	setTimeout(()=>{
// 	resolve('selesai')
// 	} ,2000)
// });
// console.log(coba.then(()=>console.log(coba)));

function cobaPromise(){
	return new Promise((resolve,reject)=>{
	const waktu=5000;
	if (waktu < 5000){
	setTimeout(()=>{
	resolve('selesai');
	} ,3000)
	}else{
		reject('kelamaan');
	}
});
}



async function cobaAsync(){
	try{
	const coba = await cobaPromise();
	console.log(coba);
	}catch(err){
		console.log(err)
	}
}
cobaAsync()


const coba = cobaPromise();
coba
	.then(()=>console.log(coba))
	.catch(()=>console.log(coba))

