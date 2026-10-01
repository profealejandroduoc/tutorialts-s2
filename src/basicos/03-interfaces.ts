interface Persona{
    nombre:string,
    apellido:string,
    edad:number,
    direccion?:Direccion
}

interface Direccion{
    calle:string,
    numero:number
}

const waco:Persona={
    nombre:'Wacoldo',
    apellido:'Soto',
    edad:41,
    direccion:{
        calle:"Por ahi",
        numero:123
    }
}

// console.log(waco);
// console.log(waco.edad);

let dio=waco //Toma el tipo pero no se sobreescribe
dio={
    nombre:"Diogenes",
    apellido:"Carrasco",
    edad:30,
   
}

const tertu={...waco};
tertu.nombre="Tertuliano"
tertu.apellido="Cruzat"
tertu.edad=86


console.log(waco);
console.log(dio);
console.log(tertu);

//Extensión recomendada
//JSON to TS