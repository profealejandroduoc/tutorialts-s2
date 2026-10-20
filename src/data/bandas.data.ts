export interface Banda{
    id:number,
    nombre:string,
    genero:Genero
}

export enum Genero{
    HardRock='Hard Rock',
    Metal='Metal',
    Industrial='Industrial',
    KMetal='K-Metal'
}


export const bandas=[
    {id:1,nombre:'Scorpion',genero:Genero.HardRock},
    {id:2,nombre:'Metallica',genero:Genero.Metal},
    {id:3,nombre:'Rammstein',genero:Genero.Industrial},
    {id:4,nombre:'AC/DC',genero:Genero.HardRock},
    {id:5,nombre:'Baby Metal',genero:Genero.KMetal},
]