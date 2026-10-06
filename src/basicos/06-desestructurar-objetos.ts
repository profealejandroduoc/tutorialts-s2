const persona={
    nombre:"Elvira",
    edad:80,
    password:"12345"
}


const n=persona.nombre;
const e=persona.edad;
const p=persona.password
console.log({n},{e},{p});

const {edad,nombre,password}=persona
console.log({nombre},{edad},{password});

interface Persona{
    id:string
    nombre:string,
    edad:number,
    tipo?:string
}

const persona_context={
    id:"AABB12",
    nombre:"Ermeregildo",
    edad:87
}

const useContext=({id,nombre,edad,tipo}:Persona)=>{
    return {
        user_id:id,
        persona:{
            nombre,
            edad
        },
        perfil:tipo || "cliente"

    }
}

const contexto=useContext(persona_context)
console.log(contexto);
console.log(contexto.user_id);
console.log(contexto.perfil);
console.log(contexto.persona.nombre);