
const arreglo:number[]=[1,2,3,4,5,6,7]

console.log(arreglo[2]);

const otroarreglo=[...arreglo]
otroarreglo.push(8)


console.log(arreglo);
console.log(otroarreglo);

arreglo.pop()
console.log(arreglo);
arreglo.shift()
console.log(arreglo);
arreglo.reverse()
console.log(arreglo);