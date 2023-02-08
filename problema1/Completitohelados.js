// Vamos a ver según el dinero que tengamos la lista de helados que podemos comprar

//let dinero = parseFloat(prompt("Cuanto dinero tenes?"));
let dinero = 4;
let helados = [
    {nombre: "Helado de Vainilla", precio: 4},
    {nombre: "Helado de Chocolate", precio: 6},
    {nombre: "Helado de Frambuesa", precio: 3.5},
    {nombre: "Helado de Cereza", precio: 3.5},
    {nombre: "Helado de Banana", precio: 3},
    {nombre: "Helado Barato", precio: 3}
] 

let listaString =   `Lista de helados: \n\n` +
helados
.map(function(helado) {
 return `-${helado.nombre}, Precio: ${helado.precio}`
})
.join('\n');

console.log(listaString);


let heladosScope = helados.filter((helado) => helado.precio <= dinero);
heladosScope.sort((a,b) => b.precio - a.precio );

if(heladosScope.length === 0 ) {
    console.log("No tienes suficiente dinero para comprar ningún helado")
} else {

    console.log(`Tienes $${dinero}, por lo que te alcanza para los siguientes helados: ` + heladosScope
    .map((helado) =>`${helado.nombre}` )
    .join(', '));


    let heladoMasCaro = [{nombre:"", precio:0}];

    heladosScope.forEach(function (helado) {
        if(helado.precio <= dinero && heladoMasCaro[0].precio < helado.precio) {
            heladoMasCaro = [helado] 
        } else if(heladoMasCaro[0].precio == helado.precio) {
            heladoMasCaro.push(helado);
        };

    });

    if(heladoMasCaro.length == 1) {
        console.log('El helado más caro que puedes comprar es: '+ heladoMasCaro[0].nombre + ', cuyo precio es: ' + heladoMasCaro[0].precio);
    }else if(heladoMasCaro.length > 1) {
    //     console.log('Los helados más caros que puedes comprar son: \n')
    //     for(i=0; i< heladoMasCaro.length; i++){
    //        console.log( `-${heladoMasCaro[i].nombre}, cuyo precio es ${heladoMasCaro[i].precio} `);
    //     };

    console.log(`Los helados más caros que puedes comprar son: \n`+
    `${heladoMasCaro.map((helado) =>'-'+ helado.nombre+ ' cuyo precio es de: '+ helado.precio).join('\n') }`)
    };

    let heladoMasBarato = [{nombre:"", precio: Infinity}]

    heladosScope.forEach(function (helado) {
        if(helado.precio<= dinero && helado.precio< heladoMasBarato[0].precio ) {
            heladoMasBarato = [helado]
        }else if(helado.precio == heladoMasBarato[0].precio) {
            heladoMasBarato.push(helado)
        }
    })

    if(heladoMasBarato.length == 1) {
        console.log(`El helado más barato que te puedes comprar es ${heladoMasBarato[0].nombre}, cuyo precio es de ${heladoMasBarato[0].precio}`);
    } else if(heladoMasBarato.length> 1 ) {
        console.log(`Los helados más baratos que te puedes comprar son: \n`+
    `${heladoMasBarato.map((helado) =>
    `- ${helado.nombre}, cuyo precio es de ${helado.precio}`)
                    .join('\n')
            }
        `);
    };

}



