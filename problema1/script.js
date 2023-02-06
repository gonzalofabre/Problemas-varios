// -Pedirles que ingresen el monto que tienen y mostrarles el helado más caro que pueden comprar.

// -Si hay 2 o más con el mismo precio, mostrar ambos.
// -Cofla quiere saber cuanto es el vuelto.
let plata = 3; //parseFloat(prompt("Cuánto dinero tienes?")); // Parsefloat devuelve un valor numerico ignorando los caracteres invalidos.
let helados = [
{ nombre: "helado De Agua", precio:  0.6 },
{ nombre: "helado De Crema", precio: 1 },
{ nombre: "bombon Heladix", precio: 1.6 },
{ nombre: "bombon Heladovich", precio: 1.7 },
{ nombre: "bombon Helardo", precio:  1.8 },
{ nombre: "potecito", precio: 2.9 },
{ nombre: "pote", precio: 2.9 }
];

helados.sort(function(a,b) {
    return b.precio - a.precio
 }); // La resta a - b en la función comparadora determina el orden de los elementos en el array.

// Si a - b es un número negativo, significa que a es menor que b, y por lo tanto, en una ordenación de menor a mayor, a debe ir antes que b.

// Si a - b es un número positivo, significa que a es mayor que b, y por lo tanto, en una ordenación de mayor a menor, a debe ir antes que b.

// Si a - b es igual a cero, significa que a y b son iguales y su posición relativa en el array no cambiará.
let heladoMasCaro = [{nombre: "", precio: 0 }]
helados.forEach(function(helado) {
   if (helado.precio <= plata && helado.precio > heladoMasCaro.precio) {
    heladoMasCaro = [helado];
   } else if (helado.precio == heladoMasCaro.precio) {
    heladoMasCaro = [...heladoMasCaro, ...new(helado)];
   };
    
}); // forEach va revisando los objetos dentro de un array(en este caso helados). "helado" vale como un objeto
// random dentro del array... se lo compara con la plata y se lo compara con el helado mas caro, que como comienza en 0,
// se irá asignando el valor del objeto al heladoMasCaro a medida que encuentre un "objeto" del array que cumpla con ambas condiciones
// propuestas en el if.

if(heladoMasCaro.precio>0) {
    heladoMasCaro.map((helado) => helado.nombre);
console.log("El helado más caro que puedes comprar es " + heladoMasCaro)
} else {
    "no tienes suficiente dinero para comprar ningún helado"
} 

// En este caso, comprueba si el precio es mayor a 0, ya que de ser 0, significa que nunca se cumplio 
// ninguna condicion del if anterior
// y nunca se reasigno el valor del precio del heladoMasCaro por lo que quedo en 0 que es el valor del precio inicial.

