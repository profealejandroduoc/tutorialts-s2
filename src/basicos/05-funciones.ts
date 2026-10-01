function saludar(){
    return "holi"
}

function retornacosas(){
    //MUCHO CODIGO....
    return {
        sku:"Tertuliano",
        nombre:"Cruzat",
        precio:12000
    }
}


function saludar_con_nombre(nombre:string){
    return `Hola ${nombre}`
    
}

const saludar_flecha=(nombre:string)=>{
    return `Hola ${nombre} con flecha`}


console.log(saludar());
console.log(saludar_con_nombre("Wacoldo"));
console.log(saludar_flecha("Diogenes"));

const cosa=retornacosas();
console.log(cosa);
console.log(`Precio $${cosa.precio}`);