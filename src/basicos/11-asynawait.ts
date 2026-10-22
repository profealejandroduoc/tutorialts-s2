import type {Meals, Meal} from '../interfaces/comidas'
//import { Meals } from '../interfaces/comidas';
let categoria='Seafood'

const request = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${categoria}`)

console.log("Esperando resultados.....");

const mostrarImagen=async ():Promise<void>=>{
  try {
      const respuesta =await request
      const datos=await respuesta.json()
      const url_imagen=datos.meals[0].strMealThumb;
      const foto=document.createElement('img')
      foto.src=url_imagen
      document.body.append(foto)
  } catch (error) {
    console.warn(error);
  }
}

mostrarImagen()

// request.then(respuesta=>{
//     respuesta.json().then((datos:Meals)=>{
//        const url_imagen=datos.meals[0].strMealThumb;
//        console.log(url_imagen);
//        const foto=document.createElement('img')
//        foto.src=url_imagen
//        document.body.append(foto)
//     }).catch((error)=>{
//         console.warn("No se encontro respuesta...." + error);
//     })
// })