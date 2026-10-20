import {bandas,Genero, type Banda} from '../data/bandas.data'

console.log(bandas);

bandas.forEach(b=>{
    console.log(b.nombre);
})

// function getBandaById(id){
//     return
// }

const getBandaById=(id:number):Banda | undefined =>{
    const banda=bandas.find((b)=>{
        return b.id===id
    })

    return banda
}


console.log("BUSQUEDA CON FIND");
const busqueda=getBandaById(2);
if (busqueda!==undefined)
{
    console.log("Banda Encontrada:" + busqueda.nombre);
}
else
{
    console.log("Banda no encontrada");
}


console.log('BUSQUEDA POR GENERO');

const fitrarbyGenero=(genero:Genero)=>{

    const filtradas=bandas.filter(b=>b.genero===genero)
    return filtradas
}

const filtro=fitrarbyGenero(Genero.HardRock)

filtro.forEach(b=>{
    console.log("NOMBRE:" + b.nombre + " GENERO:" + b.genero);
})

