let preciosHelados = [
    { nombre: "Helado de Chocolate", precio: 5.5 },
    { nombre: "Helado de Vainilla", precio: 4 },
    { nombre: "Helado de Fresa", precio: 6 },
    { nombre: "Helado de Banana", precio: 5.5 },
  ];
  
  let dinero = 5.7//parseFloat(prompt("¿Cuánto dinero tienes?"));
  
  let heladosAlcance = preciosHelados.filter((helado) => helado.precio <= dinero);
  
  if (heladosAlcance.length === 0) {
    console.log("No tienes suficiente dinero para comprar ningún helado");
  } else {
    let preciosUnicos = [...new Set(heladosAlcance.map((helado) => helado.precio))];
    preciosUnicos.sort((a, b) => b - a);
  
    let helados = [];
    preciosUnicos.forEach((precio) => {
      let heladosConPrecio = heladosAlcance.filter(
        (helado) => helado.precio === precio
      );
      helados = [...helados, ...heladosConPrecio];
    });
  
    let mensaje =
      "Puedes comprar los siguientes helados con tu dinero:\n\n" +
      helados
        .map((helado) => `- ${helado.nombre} por $${helado.precio}`)
        .join("\n");
    console.log(mensaje);
  }