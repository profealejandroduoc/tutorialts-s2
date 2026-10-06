function saludar(){
    return "holi"
}
console.log(saludar());

function retornacosas(){
    //MUCHO CODIGO....
    return {
        sku:"AB1232",
        nombre:"Mouse",
        precio:12000
    }
}

const cosa=retornacosas();
console.log(cosa);
console.log(`Precio $${cosa.precio}`);


function saludar_con_nombre(nombre:string){
    return `Hola ${nombre}`
    
}

let s1=saludar_con_nombre("Diogenes")
s1=saludar_con_nombre("Wenceslao")

console.log(saludar_con_nombre("Wacoldo"));

const saludar_flecha=(nombre:string):string=>{
    return `Hola ${nombre} con flecha`
}

console.log(saludar_flecha("Diogenes"));



const flecha=()=>{
    return "Soy una función de flecha"
}
console.log(flecha());

function getPersona(){
    return {
        id:"waco",
        nombre: "Wacoldo",
        edad:21
    }
}

console.log(getPersona());


const getPersonaFlecha=()=>{
    return {
        id:"waco",
        nombre: "Wacoldo",
        edad:21
    }
}

console.log(getPersonaFlecha());


const saludoSimple=(nombre:string)=>`Hola ${nombre} de forma simple`
console.log(saludoSimple("Tertuliano"));

const sumar=(x:number,y:number)=>x+y
console.log(sumar(3,4));


interface Persona{
    id:string,
    nombre: string,
    edad:number
}

function retornoTipado():Persona{
    return {
        id:"A1",
        nombre:"Ladislao",
        edad:52
    }
}


console.log(retornoTipado());

const numeros=[10,20,30,40,50]
const letras=["a","b","c","d"]

console.log("Leyendo con For");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
    
}

console.log("Leyendo con For In");
for (const indice in numeros) {
    console.log(numeros[indice],{indice});
}

console.log("Leyendo con For of");
for (const element of numeros) {
    console.log(element);
}

console.log("Leyendo con For Each");
numeros.forEach(item=>{
    console.log({item});
});

//COMPARAR
// const saludar_flecha=(nombre:string):string=>{
//     return `Hola ${nombre} con flecha`
// }

numeros.forEach(console.log)