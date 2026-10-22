const promesa=new Promise<string>((resolve, reject)=>{
    let dinero=10000
    setTimeout(()=>{
        if (dinero===10000) resolve("Me devolvió el dinero")
        else reject("se arranco con la plata el winner")
    }, 2000)
})

console.log(promesa);

promesa.then(res=>{
    console.log(res);
}).catch(error=>{
    console.log(error);
}).finally(()=>{
    console.log("Esto pasa igual");
})


